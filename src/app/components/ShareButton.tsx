"use client";

type Props = {
  slug: string;
};

export default function ShareButton({
  slug,
}: Props) {
  const handleShare = async () => {
    const url =
  `${window.location.origin}/group/${slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-10 h-10 flex items-center justify-center bg-zinc-50 hover:bg-zinc-100 active:scale-[0.95] text-zinc-500 hover:text-zinc-800 rounded-xl border border-zinc-200/60 transition-all duration-100 shrink-0 cursor-pointer"
      aria-label="Share group"
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
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    </button>
  );
}