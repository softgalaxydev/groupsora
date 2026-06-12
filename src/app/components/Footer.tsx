import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-zinc-400 text-center py-4 px-5 border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        
        <p className="text-xs text-zinc-500 mt-2">
          © 2026 GroupSora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
