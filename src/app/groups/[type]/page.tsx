import Navbar from "@/app/components/Navbar";
import GroupCard from "@/app/components/GroupCard";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    type: string;
  }>;
};

export default async function GroupTypePage({
  params,
}: Props) {

  const { type } = await params;

  const decodedType =
    decodeURIComponent(type);

  const { data: groups } =
    await supabase
      .from("groups")
      .select("*")
      .eq("group_type", decodedType)
      .eq("status", "approved")
      .order("id", { ascending: false });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 px-4 py-24">

        {/* Heading */}
        <div className="max-w-4xl mx-auto">

          <h1 className="text-2xl font-bold text-black mb-6">
            {decodedType} Groups
          </h1>

          {/* Cards */}
          <div className="flex flex-col gap-4">

            {groups?.length ? (
              groups.map((group) => (

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

              ))
            ) : (

              <div className="bg-white rounded-2xl p-8 text-center text-gray-500">
                No groups found
              </div>

            )}

          </div>

        </div>

      </main>
    </>
  );
}