import { supabase } from "@/lib/supabase";

export default async function sitemap() {

  const { data: groups } = await supabase
    .from("groups")
    .select("slug")
    .eq("status", "approved");

  const groupUrls =
    groups?.map((group) => ({
      url: `https://groupsora.vercel.app/group/${group.slug}`,
      lastModified: new Date(),
    })) || [];

  return [
    {
      url: "https://groupsora.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://groupsora.vercel.app/add-group",
      lastModified: new Date(),
    },

    ...groupUrls,
  ];
}