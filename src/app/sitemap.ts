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
      changeFrequency: "weekly",
      priority: 0.8,
    })) || [];

  // Static pages
  const staticPages = [
    {
      url: "https://groupsora.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://groupsora.vercel.app/add-group",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://groupsora.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://groupsora.vercel.app/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://groupsora.vercel.app/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://groupsora.vercel.app/disclaimer",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://groupsora.vercel.app/groups/whatsapp",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://groupsora.vercel.app/groups/telegram",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://groupsora.vercel.app/groups/instagram",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  return [...staticPages, ...groupUrls];
}
