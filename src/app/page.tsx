import GroupsSection from "./components/GroupsSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { supabase } from "../lib/supabase";

export default async function Home() {

  const { data: groups } = await supabase
    .from("groups")
    .select("*")
    .eq("status","approved");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-50/70 pb-16">

        {/* Brand Hero Section */}
        <section className="text-center pt-8 pb-4 px-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100/80 mb-3 select-none">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Active WhatsApp, Telegram & Instagram Group Links
          </div>
          
          <p className="text-gray-800 text-lg font-bold italic sm:text-sm mt-2.5 max-w-lg mx-auto leading-relaxed">
            Discover and join thousands of active communities.
          </p>
        </section>

        <GroupsSection groups={groups || []} />

      </main>
      <Footer />
    </>
  );
}