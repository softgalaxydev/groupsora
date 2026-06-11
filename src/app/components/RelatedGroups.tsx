"use client";

import { useState } from "react";
import GroupCard from "./GroupCard";

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

export default function RelatedGroups({ groups }: Props) {
  const [visibleCount, setVisibleCount] = useState(10);

  if (!groups || groups.length === 0) return null;

  return (
    <div id="related-groups" className="max-w-4xl mx-auto mt-12">
      <h2 className="text-xl font-bold text-zinc-800 mb-6 flex items-center gap-2 select-none">
        <span className="h-5 w-1 bg-green-600 rounded-full"></span>
        Related Groups
      </h2>

      <div className="flex flex-col gap-3">
        {groups.slice(0, visibleCount).map((item) => (
          <GroupCard
            key={item.id}
            title={item.title}
            category={item.category}
            platform={item.platform}
            country={item.country}
            language={item.language}
            slug={item.slug}
            imageUrl={item.image_url}
            tags={item.tags}
            inviteLink={item.invite_link}
            description={item.description}
            group_type={item.group_type}
          />
        ))}
      </div>

      {visibleCount < groups.length && (
        <div className="flex justify-center mt-8">
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
  );
}
