"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { groupTypes, countries, languages } from "@/app/data/constants";

export default function AddGroupPage() {
  const [loadingMeta, setLoadingMeta] = useState(false);

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [autoFetched, setAutoFetched] =
  useState(false);

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("WhatsApp");
  const [groupType, setGroupType] = useState("Select Category");
  const [openType, setOpenType] = useState("");
  useEffect(() => {
  if (openType) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  }, [openType]);

  const [inviteLink, setInviteLink] = useState("");
  useEffect(() => {
  const locale =
    Intl.DateTimeFormat()
      .resolvedOptions()
      .locale;
  if (locale.includes("IN")) {
    setCountry("India");
  }
  }, []);


  const createSlug = (text: string) => {

  const cleanTitle = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const random =
    Math.random()
      .toString(36)
      .substring(2, 8);

  if (!cleanTitle) {
    return `group-${random}`;
  }

  return `${cleanTitle}-${random}`;
  };

  const handleLinkChange = async (value: string) => {
    setInviteLink(value);
    if (value.includes("whatsapp")) {
  setCategory("WhatsApp");
}

else if (
  value.includes("telegram") ||
  value.includes("t.me")
) {
  setCategory("Telegram");
}

else if (
  value.includes("instagram")
) {
  setCategory("Instagram");
}

    if (!value.startsWith("http")) return;

    try {
      setLoadingMeta(true);

      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: value }),
      });

      const data = await res.json();

      if (data.title) setTitle(data.title);
      if (data.image) setImageUrl(data.image);
      if (
        data.title ||
        data.image
      ) {
        setAutoFetched(true);
      }
    } catch (err) {
      console.log(err);
      setAutoFetched(false);
    } finally {
      setLoadingMeta(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !inviteLink ||
      !category ||
      !country ||
      !language
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (!inviteLink.startsWith("https://")) {
      toast.error("Please enter valid link");
      return;
    }

    let finalImageUrl = imageUrl;

    if (image) {
      const fileName = `${Date.now()}-${image.name}`;

      const { error } = await supabase.storage
        .from("group-images")
        .upload(fileName, image);

      if (error) {
        toast.error("Image upload failed");
        return;
      }

      const { data } = supabase.storage
        .from("group-images")
        .getPublicUrl(fileName);

      finalImageUrl = data.publicUrl;
    }

    const slug = createSlug(title);

    const { error } = await supabase.from("groups").insert([
      {
        title,
        slug,
        description,
        category,
        platform: category,
        country,
        language,
        tags,
        invite_link: inviteLink,
        image_url: finalImageUrl || "",
        group_type: groupType,
      },
    ]);

    if (error) {
      toast.error("Something went wrong");
      console.log(error);
      return;
    }

    toast.success("Group submitted successfully!");

    setTitle("");
    setDescription("");
    setCountry("India");
    setLanguage("");
    setTags("");
    setCategory("WhatsApp");
    setInviteLink("");
    setImage(null);
    setImageUrl("");
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Main Submission Card */}
          <div className="bg-white border border-gray-100 p-6 sm:p-10 rounded-3xl shadow-sm text-black relative z-10">
            <div className="mb-8">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider select-none">
                Grow Community
              </span>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-2">
                Submit Your Group
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                List your public WhatsApp, Telegram, or Instagram community and get discovered by thousands of active members worldwide.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Invite Link */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Group Invite Link (URL)</label>
                <input
                  type="text"
                  placeholder="e.g. https://chat.whatsapp.com/invite..."
                  value={inviteLink}
                  onChange={(e) => handleLinkChange(e.target.value)}
                  className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black transition-all text-[15px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Platform */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Platform Type</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black transition-all text-[15px]"
                  >
                    <option>WhatsApp</option>
                    <option>Telegram</option>
                    <option>Instagram</option>
                  </select>
                </div>

                {/* Group Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Group Category</label>
                  <div
                    onClick={() => setOpenType("group")}
                    className="flex justify-between items-center w-full p-3.5 border border-gray-200 hover:border-green-500 rounded-xl bg-gray-50/50 hover:bg-white transition cursor-pointer select-none text-[15px] text-gray-800 active:scale-[0.99] font-medium"
                  >
                    
                    <span className="truncate">{groupType || "Select Category"}</span>
                    <span className="text-gray-400 select-none text-[10px]">▼</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Country */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Country</label>
                  <div
                    onClick={() => setOpenType("country")}
                    className="flex justify-between items-center w-full p-3.5 border border-gray-200 hover:border-green-500 rounded-xl bg-gray-50/50 hover:bg-white transition cursor-pointer select-none text-[15px] text-gray-800 active:scale-[0.99] font-medium"
                  >
                    <span className="truncate">{country || "Select Country"}</span>
                    <span className="text-gray-400 select-none text-[10px]">▼</span>
                  </div>
                </div>
                
                {/* Language */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">Primary Language</label>
                  <div
                    onClick={() => setOpenType("language")}
                    className="flex justify-between items-center w-full p-3.5 border border-gray-200 hover:border-green-500 rounded-xl bg-gray-50/50 hover:bg-white transition cursor-pointer select-none text-[15px] text-gray-800 active:scale-[0.99] font-medium"
                  >
                    <span className="truncate">{language || "Select Language"}</span>
                    <span className="text-gray-400 select-none text-[10px]">▼</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Search Keywords (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="e.g. study, gaming, crypto, jobs"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black transition-all text-[15px]"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Group Description</label>
                <textarea
                  placeholder="Describe your group's focus, rules, and community values..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black h-28 resize-none transition-all text-[15px]"
                />
              </div>

              {/* Title (Only if not auto-fetched) */}
              {!autoFetched && (
                <div className="flex flex-col gap-1.5 animate-fadeIn">
                  <label className="text-sm font-semibold text-gray-700">Group Title</label>
                  <input
                    type="text"
                    placeholder="Enter Group Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3.5 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-gray-50/50 focus:bg-white outline-none rounded-xl text-black transition-all text-[15px]"
                  />
                </div>
              )}

              {/* Image Upload (ONLY for Telegram & Instagram and if not auto-fetched) */}
              {category !== "WhatsApp" && !imageUrl && (
                <div className="flex flex-col gap-1.5 border border-dashed border-gray-200 rounded-xl p-4 bg-gray-50/30">
                  <label className="text-sm font-semibold text-gray-700">Group Banner Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition file:cursor-pointer"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loadingMeta}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-md cursor-pointer select-none touch-manipulation active:scale-[0.98] disabled:opacity-50 transition-all duration-150 text-[16px] text-center"
              >
                {loadingMeta ? "Fetching Metadata..." : "Submit Group"}
              </button>

            </form>
          </div>
        </div>

        {/* Exquisite Popup Selector Modal */}
        {openType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Overlay */}
            <div
              onClick={() => setOpenType("")}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity pointer-events-auto"
            />

            {/* Modal Box */}
            <div
              className="
                relative
                bg-white
                text-gray-900
                rounded-3xl
                p-6
                w-full
                max-w-md
                max-h-[75vh]
                flex flex-col
                shadow-2xl
                z-10
                pointer-events-auto
                animate-scaleUp
              "
            >
              
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4 select-none">
                <h3 className="text-lg font-extrabold text-gray-900">
                  {openType === "group" && "Select Category"}
                  {openType === "country" && "Select Country"}
                  {openType === "language" && "Select Language"}
                </h3>
                <button
                  type="button"
                  onClick={() => setOpenType("")}
                  className="text-2xl text-gray-400 hover:text-gray-600 transition p-1 cursor-pointer"
                >
                  ×
                </button>
              </div>

              {/* Modal List Content */}
              <div className="overflow-y-auto pr-1 flex-1 space-y-1 scrollbar-thin">
                {openType === "group" &&
                  groupTypes.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setGroupType(item);
                        setOpenType("");
                      }}
                      className="p-3.5 border-b border-gray-50 last:border-b-0 hover:bg-green-50 hover:text-green-800 transition active:scale-[0.98] cursor-pointer rounded-xl font-semibold select-none text-[14px]"
                    >
                      {item}
                    </div>
                  ))}

                {openType === "country" &&
                  countries.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setCountry(item);
                        setOpenType("");
                      }}
                      className="p-3.5 border-b border-gray-50 last:border-b-0 hover:bg-green-50 hover:text-green-800 transition active:scale-[0.98] cursor-pointer rounded-xl font-semibold select-none text-[14px]"
                    >
                      {item}
                    </div>
                  ))}

                {openType === "language" &&
                  languages.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setLanguage(item);
                        setOpenType("");
                      }}
                      className="p-3.5 border-b border-gray-50 last:border-b-0 hover:bg-green-50 hover:text-green-800 transition active:scale-[0.98] cursor-pointer rounded-xl font-semibold select-none text-[14px]"
                    >
                      {item}
                    </div>
                  ))}
              </div>

            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}