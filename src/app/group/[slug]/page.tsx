import { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import RelatedGroups from "@/app/components/RelatedGroups";
import Navbar from "@/app/components/Navbar";
import ShareButton from "@/app/components/ShareButton";
import Footer from "@/app/components/Footer";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;

  const { data: group } = await supabase
    .from("groups")
    .select("*")
    .eq("slug", slug)
    .eq("status", "approved")
    .single();

  if (!group) {
    return {
      title: "Group Not Found",
    };
  }

  const title = `${group.title} - Join Best ${group.platform} Group | Groupsora`;
  const description = group.description || `Join ${group.title} on ${group.platform}. Best for ${group.category}. ${group.group_type || ""} group.`;
  const imageUrl = group.image_url || "https://groupsora.vercel.app/icon.png";
  const pageUrl = `https://groupsora.vercel.app/group/${slug}`;

  return {
    title: title,
    description: description,
    keywords: [
      group.title,
      group.category,
      group.platform,
      `${group.platform} groups`,
      `${group.category} groups`,
      group.group_type,
      group.country,
      "group links",
      "join groups",
    ],
    authors: [{ name: "Groupsora" }],
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
      type: "website",
      images: {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: group.title,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
}

export default async function GroupPage({
  params,
}: Props) {

  const { slug } = await params;

  // Current Group
  const { data: group } = await supabase
    .from("groups")
    .select("*")
    .eq("slug", slug)
    .eq("status", "approved")
    .single();

  if (!group) {
    return (
      <div className="p-10 text-center text-2xl text-black">
        Group not found
      </div>
    );
  }

  // Related Groups
  const { data: relatedGroups } = await supabase
    .from("groups")
    .select("*")
    .neq("slug", slug)
    .eq("status", "approved")
    .eq("category", group.category)
    .limit(30);

  const isWhatsapp = group.platform.toLowerCase() === "whatsapp";
  const isTelegram = group.platform.toLowerCase() === "telegram";
  const isInstagram = group.platform.toLowerCase() === "instagram";

  let platformBg = "bg-zinc-50 text-zinc-600 border-zinc-200/60";
  let buttonBg = "bg-zinc-800 hover:bg-zinc-900 text-white shadow-lg shadow-zinc-200/50";
  let platformIcon = null;

  if (isWhatsapp) {
    platformBg = "bg-emerald-50 text-emerald-700 border-emerald-100/80";
    buttonBg = "bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-100/40 active:scale-[0.98] transition-all duration-150";
    platformIcon = (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    );
  } else if (isTelegram) {
    platformBg = "bg-sky-50 text-sky-700 border-sky-100/80";
    buttonBg = "bg-[#0088cc] hover:bg-[#007cbd] text-white shadow-lg shadow-sky-100/40 active:scale-[0.98] transition-all duration-150";
    platformIcon = (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.15-.04-.21-.03-.09.02-1.5 1-4.24 2.85-.4.28-.76.42-1.08.41-.35-.01-1.02-.2-1.52-.37-.62-.2-1.1-.31-1.06-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .3z"/>
      </svg>
    );
  } else if (isInstagram) {
    platformBg = "bg-purple-50 text-purple-700 border-purple-100/80";
    buttonBg = "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-100/40 active:scale-[0.98] transition-all duration-150";
    platformIcon = (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-50/50 pt-5 pb-16 px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Thing",
              name: group.title,
              description: group.description,
              image: group.image_url || "https://groupsora.vercel.app/icon.png",
              url: `https://groupsora.vercel.app/group/${slug}`,
              category: group.category,
              inLanguage: group.language,
              locationCreated: {
                "@type": "Country",
                name: group.country,
              },
              isPartOf: {
                "@type": "WebSite",
                name: "Groupsora",
                url: "https://groupsora.vercel.app",
              },
            }),
          }}
        />
        <div className="max-w-4xl mx-auto">

          
          {/* MAIN CONTAINER */}
          <div className="bg-white rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-100/50 overflow-hidden">
            
            {/* HERO COVER IMAGE */}
            <div className="relative h-64 sm:h-96 w-full bg-zinc-100">
              <img
                src={group.image_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"}
                alt={group.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent"></div>
              
              {/* Floating Platform Badge */}
              <span className={`absolute bottom-6 left-6 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold border shadow-lg ${platformBg}`}>
                {platformIcon}
                <span>{group.platform}</span>
              </span>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 sm:p-10">

              {/* Category & Group Type */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-500 mb-3">
                
                {group.group_type && (
                  <>
                    <span className="text-zinc-300">•</span>
                    <span className="text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded-md font-medium">
                      {group.group_type}
                    </span>
                  </>
                )}
              </div>

              {/* TITLE */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                {group.title}
              </h1>

              {/* TARGET DETAILS: COUNTRY & LANGUAGE */}
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-zinc-500 font-medium pb-3 border-b border-zinc-100">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-600">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span>Country: <strong className="text-zinc-700">{group.country}</strong></span>
                </span>

                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-600">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>Language: <strong className="text-zinc-700">{group.language}</strong></span>
                </span>
              </div>

              {/* ABOUT SECTION */}
              <div className="mt-1">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">About This Group</h3>
                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {group.description || "No description provided."}
                </p>
              </div>

              {group.group_type && (
                <div className="mt-4 text-sm text-zinc-600">
                  Want more {group.group_type} groups?{' '}
                  <Link
                    href={`/groups/${encodeURIComponent(group.group_type)}`}
                    className="font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    See all {group.group_type} groups
                  </Link>
                </div>
              )}

              {/* TAGS SECTION */}
              {group.tags && (
                <div className="mt-1 pt-1 border-t border-zinc-100">
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Hashtags</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.split(",").map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs bg-zinc-50 text-zinc-600 border border-zinc-200/50 px-3 py-1 rounded-md font-medium hover:bg-zinc-100 transition-colors"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTION ROW */}
              <div className="flex items-center gap-3 mt-2 pt-6 border-t border-zinc-100">
                <a
                  href={group.invite_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 sm:flex-none px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-center cursor-pointer select-none transition-all duration-200 ${buttonBg}`}
                >
                  Join Group Channel
                </a>
                <ShareButton slug={group.slug} />
              </div>

            </div>

          </div>

          {/* RELATED GROUPS */}
          <RelatedGroups groups={relatedGroups || []} />

        </div>
      </main>
      <Footer />
    </>
  );
}