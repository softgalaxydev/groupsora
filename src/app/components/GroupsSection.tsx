"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GroupCard from "./GroupCard";
import { groupTypes, countries, languages } from "@/app/data/constants";

type Group = {
  id: number;
  title: string;
  category: string;
  platform: string;
  country: string;
  language: string;
  slug: string;
  image_url?: string;
  tags?: string;
  invite_link?: string;
  description?: string;
  group_type?: string;
};

type Props = {
  groups: Group[];
};

export default function GroupsSection({
  groups,
}: Props) {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedGroupType, setSelectedGroupType] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [openSubModal, setOpenSubModal] = useState("");

  useEffect(() => {
    setVisibleCount(10);
  }, [search, selectedCategory, selectedCountry, selectedGroupType, selectedLanguage]);

  const categories = [
    "All",
    "WhatsApp",
    "Telegram",
    "Instagram",
  ];

  const filteredGroups = groups.filter((group) => {
    const searchText =
    `
    ${group.title}
    ${group.tags || ""}
    ${group.platform}
    `
    .toLowerCase();

    const matchesSearch =
    searchText.includes(
    search.toLowerCase()
  );

    const matchesCategory =
      selectedCategory === "All" ||
      group.platform === selectedCategory;

    const matchesCountry =
      selectedCountry === "All" ||
      group.country === selectedCountry;

    const matchesGroupType =
      selectedGroupType === "All" ||
      group.group_type === selectedGroupType;

    const matchesLanguage =
      selectedLanguage === "All" ||
      group.language === selectedLanguage;

    return matchesSearch && matchesCategory && matchesCountry && matchesGroupType && matchesLanguage;
  });

  const sortedGroups =
  filteredGroups.sort((a, b) => {

    const aText =
      `${a.title} ${a.tags || ""}`
      .toLowerCase();

    const bText =
      `${b.title} ${b.tags || ""}`
      .toLowerCase();

    const query =
      search.toLowerCase();

    const aScore =
      aText.includes(query) ? 1 : 0;

    const bScore =
      bText.includes(query) ? 1 : 0;

    return bScore - aScore;
    });

  return (
    
    <section className="relative z-10 px-5 py-0 flex justify-center">
      <div className="w-full max-w-4xl">

      {/* Search + Filter */}
<div className="flex gap-3">

  <input
    type="text"
    placeholder="Search groups..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 p-4 rounded-xl border border-gray-300 outline-none text-black bg-white"
  />

  <button
    type="button"
    onClick={() => setShowFilters(true)}
    className="px-4 rounded-xl bg-white border border-gray-300 text-gray-700 cursor-pointer select-none touch-manipulation active:bg-gray-100 hover:bg-gray-50 hover:text-black transition flex items-center justify-center min-w-12"
    aria-label="Filter groups"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-5 h-5"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  </button>

</div>

 

      {/* Categories */}
      
      <div className="grid grid-cols-4 gap-2 mt-6">

        {categories.map((category) => (

          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={` py-1.5 px-0.46 text-sm rounded-lg font-semibold shadow w-full text-center truncate cursor-pointer select-none touch-manipulation active:scale-[0.97] transition-all duration-150
            ${
              selectedCategory === category
                ? "bg-green-600 text-white shadow-green-200/50"
                : "bg-white text-black active:bg-gray-100"
            }`}
          >
            {category}
          </button>

        ))}

      </div>


      {/* FILTER POPUP */}
      {showFilters && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Overlay */}
          <div
            onClick={() => setShowFilters(false)}
            className="absolute inset-0 bg-black/55 backdrop-blur-xs"
          />

          {/* Popup Panel */}
          <div
            className="
              relative
              w-full
              max-w-md
              bg-[#18181b]
              text-white
              rounded-3xl
              p-6
              shadow-2xl
              border border-zinc-800
              animate-scaleUp
              z-10
            "
          >
            <h2 className="text-lg font-extrabold mb-5 flex items-center justify-between border-b border-zinc-800 pb-3 select-none">
              <span>Filter to Search</span>
              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="text-2xl text-zinc-400 hover:text-white transition p-1 cursor-pointer"
              >
                ×
              </button>
            </h2>

            <div className="space-y-4">
              
              {/* Group Type Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Group Type / Category</label>
                <button
                  type="button"
                  onClick={() => setOpenSubModal("group_type")}
                  className="w-full p-3 bg-zinc-900 hover:bg-zinc-800 text-left outline-none rounded-xl text-zinc-100 flex items-center justify-between transition border border-zinc-800 cursor-pointer text-xs font-semibold"
                >
                  <span className="truncate">{selectedGroupType === "All" ? "All Group Types" : selectedGroupType}</span>
                  <span className="text-zinc-500">▼</span>
                </button>
              </div>

              {/* Country Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Country</label>
                <button
                  type="button"
                  onClick={() => setOpenSubModal("country")}
                  className="w-full p-3 bg-zinc-900 hover:bg-zinc-800 text-left outline-none rounded-xl text-zinc-100 flex items-center justify-between transition border border-zinc-800 cursor-pointer text-xs font-semibold"
                >
                  <span className="truncate">{selectedCountry === "All" ? "All Countries" : selectedCountry}</span>
                  <span className="text-zinc-500">▼</span>
                </button>
              </div>

              {/* Language Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Language</label>
                <button
                  type="button"
                  onClick={() => setOpenSubModal("language")}
                  className="w-full p-3 bg-zinc-900 hover:bg-zinc-800 text-left outline-none rounded-xl text-zinc-100 flex items-center justify-between transition border border-zinc-800 cursor-pointer text-xs font-semibold"
                >
                  <span className="truncate">{selectedLanguage === "All" ? "All Languages" : selectedLanguage}</span>
                  <span className="text-zinc-500">▼</span>
                </button>
              </div>
              
              {/* Bottom Actions */}
              <div className="flex gap-3 pt-5 border-t border-zinc-800 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCountry("All");
                    setSelectedGroupType("All");
                    setSelectedLanguage("All");
                    setShowFilters(false);
                  }}
                  className="flex-1 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 font-semibold text-xs hover:bg-zinc-900 hover:text-white transition cursor-pointer select-none"
                >
                  Reset Filters
                </button>
                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="flex-1 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs transition active:scale-[0.97] cursor-pointer select-none"
                >
                  Apply Filters
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* FILTER SUB-MODALS LISTS */}
      {openSubModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
          {/* Overlay */}
          <div
            onClick={() => setOpenSubModal("")}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />
          
          {/* Sub Modal Box */}
          <div
            className="
              relative
              bg-[#18181b]
              text-white
              rounded-3xl
              p-5
              w-full
              max-w-md
              max-h-[65vh]
              flex flex-col
              shadow-2xl
              z-10
              border border-zinc-800
              animate-scaleUp
            "
          >
            {/* Sub Modal Header */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-4">
              <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider">
                {openSubModal === "group_type" && "Select Group Type"}
                {openSubModal === "country" && "Select Country"}
                {openSubModal === "language" && "Select Language"}
              </h3>
              <button
                type="button"
                onClick={() => setOpenSubModal("")}
                className="text-2xl text-zinc-400 hover:text-white transition p-1 cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* List Option Content */}
            <div className="overflow-y-auto pr-1 flex-1 space-y-1 scrollbar-thin">
              
              {/* "All" Option */}
              <div
                onClick={() => {
                  if (openSubModal === "group_type") setSelectedGroupType("All");
                  if (openSubModal === "country") setSelectedCountry("All");
                  if (openSubModal === "language") setSelectedLanguage("All");
                  setOpenSubModal("");
                }}
                className="p-3 border-b border-zinc-800/50 hover:bg-zinc-800 hover:text-white transition cursor-pointer rounded-xl font-semibold select-none text-[13px] text-zinc-300"
              >
                Show All {openSubModal === "group_type" ? "Group Types" : openSubModal === "country" ? "Countries" : "Languages"}
              </div>

              {openSubModal === "group_type" &&
                groupTypes.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setSelectedGroupType(item);
                      setOpenSubModal("");
                    }}
                    className="p-3 border-b border-zinc-800/50 last:border-b-0 hover:bg-green-900/30 hover:text-green-400 transition cursor-pointer rounded-xl font-semibold select-none text-[13px] text-zinc-300"
                  >
                    {item}
                  </div>
                ))}

              {openSubModal === "country" &&
                countries.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setSelectedCountry(item);
                      setOpenSubModal("");
                    }}
                    className="p-3 border-b border-zinc-800/50 last:border-b-0 hover:bg-green-900/30 hover:text-green-400 transition cursor-pointer rounded-xl font-semibold select-none text-[13px] text-zinc-300"
                  >
                    {item}
                  </div>
                ))}

              {openSubModal === "language" &&
                languages.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setSelectedLanguage(item);
                      setOpenSubModal("");
                    }}
                    className="p-3 border-b border-zinc-800/50 last:border-b-0 hover:bg-green-900/30 hover:text-green-400 transition cursor-pointer rounded-xl font-semibold select-none text-[13px] text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Groups */}
      <div className="flex flex-col items-center gap-3 mt-7 w-full">

        {sortedGroups.slice(0, visibleCount).map((group) => (
          <GroupCard
            key={group.id}
            title={group.title}
            category={group.category}
            platform={group.platform}
            country={group.country}
            language={group.language}
            slug={group.slug}
            imageUrl={group.image_url}
            tags={group.tags}
            inviteLink={group.invite_link}
            description={group.description}
            group_type={group.group_type}
          />

        ))}

      </div>

      {/* Load More Button */}
      {visibleCount < sortedGroups.length && (
        <div className="flex justify-center mt-8 pb-10">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white rounded-2xl font-bold shadow-md shadow-green-100 transition-all duration-150 text-sm cursor-pointer select-none"
          >
            Load More Groups
          </button>
        </div>
      )}

      </div>
    </section>
  );
}