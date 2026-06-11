"use client";

import Link from "next/link";
import ShareButton from "@/app/components/ShareButton";
import { useState } from "react";

type GroupCardProps = { 
  title: string;
  category: string;
  platform: string;
  country: string;
  language: string;
  slug: string;
  imageUrl?: string;
  tags?: string;
  inviteLink?: string;
  description?: string;
  group_type?: string;
};

export default function GroupCard({
  title,
  category,
  platform,
  country,
  language,
  slug,
  imageUrl,
  tags,
  inviteLink,
  description,
  group_type,
}: GroupCardProps) {
  const shortDesc = description || "";
  const tagList = tags
    ? tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

    
  
  const isWhatsapp = platform?.toLowerCase() === "whatsapp";
  const isTelegram = platform?.toLowerCase() === "telegram";
  const isInstagram = platform?.toLowerCase() === "instagram";

  const [imgError, setImgError] = useState(false);

  const fallbackImage =
    isWhatsapp
    ? "/whatsapp.png"
    : isTelegram
    ? "/telegram.png"
    : isInstagram
    ? "/instagram.png"
    : "/default-group.png";

  let platformBg = "bg-zinc-50 text-zinc-600 border-zinc-200/60";
  let buttonBg = "bg-zinc-800 hover:bg-zinc-900 text-white shadow-sm shadow-zinc-200/50";
  let platformIcon = null;

  if (isWhatsapp) {
    platformBg = "bg-emerald-50 text-emerald-700 border-emerald-100/80";
    buttonBg = "bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-sm shadow-emerald-100 active:scale-[0.98]";
    platformIcon = (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    );
  } else if (isTelegram) {
    platformBg = "bg-sky-50 text-sky-700 border-sky-100/80";
    buttonBg = "bg-[#0088cc] hover:bg-[#007cbd] text-white shadow-sm shadow-sky-100 active:scale-[0.98]";
    platformIcon = (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.15-.04-.21-.03-.09.02-1.5 1-4.24 2.85-.4.28-.76.42-1.08.41-.35-.01-1.02-.2-1.52-.37-.62-.2-1.1-.31-1.06-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .3z"/>
      </svg>
    );
  } else if (isInstagram) {
    platformBg = "bg-purple-50 text-purple-700 border-purple-100/80";
    buttonBg = "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-sm shadow-purple-100 active:scale-[0.98]";
    platformIcon = (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    );
  }

  return (
    <div className="w-full bg-white p-3.5 sm:p-5 rounded-2xl border border-zinc-100/85 shadow-sm hover:shadow-md hover:border-zinc-200/80 hover:-translate-y-0.5 transition-all duration-300">

      {/* TOP SECTION */}
      <div className="flex gap-4">

        {/* IMAGE LEFT */}
        <Link href={`/group/${slug}`} className="block shrink-0">
          <img
  src={imgError ? fallbackImage : (imageUrl || fallbackImage)}
  alt={title}
  onError={() => setImgError(true)}
  loading="lazy"
  decoding="async"
  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-zinc-100 shadow-inner"
/>
        </Link>

        {/* RIGHT CONTENT */}
        <div className="flex-1 min-w-0">

          {/* TITLE */}
          <Link href={`/group/${slug}`} className="inline-block max-w-full">
            <h4 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight hover:text-zinc-700 transition-colors line-clamp-1">
              {title}
            </h4>
          </Link>

          {/* BADGES ROW */}
          <div className="flex flex-wrap items-center gap-1.5 mt-0">

            {group_type && (
              <span className="text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-100/60 px-2.5 py-0.5 rounded-full font-medium">
                {group_type}
              </span>
            )}

          </div>
        </div>
      </div>

      {/* METADATA + TAGS */}
      <div className="flex flex-wrap gap-1.5 mt-3">

        {platformIcon && (
          <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${platformBg}`}>
            {platformIcon}
            <span>{platform}</span>
          </span>
        )}

        {/* Country Pill */}
        {country && (
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-50 border border-zinc-200/50 text-zinc-500 select-none">
            <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {country}
          </span>
        )}

        {/* Language Pill */}
        {language && (
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-50 border border-zinc-200/50 text-zinc-500 select-none">
            <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            {language}
          </span>
        )}
        </div>

      {/* DESCRIPTION */}
      <p className="text-zinc-600 mt-2 text-xs sm:text-sm leading-relaxed">
        {shortDesc.length > 80
          ? shortDesc.slice(0, 80) + "..."
          : shortDesc}
        
        {shortDesc.length > 80 && (
          <Link
            href={`/group/${slug}`}
            className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-semibold ml-1.5 cursor-pointer select-none touch-manipulation active:text-blue-900 inline-block p-1 -m-1"
          >
            Continue reading →
          </Link>
        )}
      </p>

      {/* FOOTER ACTIONS */}
      <div className="flex items-center justify-end gap-2 mt-0 pt-3 border-t border-zinc-100">
        <a
          href={inviteLink || `/group/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 sm:flex-none px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold text-center cursor-pointer select-none transition-all duration-200 ${buttonBg}`}
        >
          Join Group
        </a>

        <ShareButton slug={slug} />
      </div>

    </div>
  );
}