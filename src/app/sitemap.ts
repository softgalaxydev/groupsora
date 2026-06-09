import { supabase } from "@/lib/supabase";

export default async function sitemap() {

  const { data: groups } = await supabase
    .from("groups")
    .select("slug")
    .eq("status", "approved");

  const groupUrls =
    groups?.map((group) => ({
      url: `https://yourwebsite.com/group/${group.slug}`,
      lastModified: new Date(),
    })) || [];

  return [
    {
      url: "https://yourwebsite.com",
      lastModified: new Date(),
    },

    {
      url: "https://yourwebsite.com/add-group",
      lastModified: new Date(),
    },

    ...groupUrls,
  ];
}