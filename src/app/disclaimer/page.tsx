import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function DisclaimerPage() {
  const sections = [
    { id: "overview", title: "1. Platform Overview" },
    { id: "non-affiliation", title: "2. Non-Affiliation Notice" },
    { id: "public-links", title: "3. Nature of Public Links" },
    { id: "purpose", title: "4. Informational Purpose Only" },
    { id: "responsibility", title: "5. User Responsibility" },
    { id: "warranties", title: "6. Disclaimer of Warranties" },
    { id: "liability", title: "7. Limitation of Liability" },
    { id: "trademarks", title: "8. Trademark Ownership" },
    { id: "updates", title: "9. Document Modifications" },
    { id: "copyright", title: "10. Copyright & DMCA Claims" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Brand Header */}
          <div className="border-b border-gray-200 pb-8 mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider select-none">
                Legal Disclaimer
              </span>
             
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Disclaimer
            </h1>
            <p className="text-gray-900 text-lg md:text-xl font-normal max-w-3xl leading-relaxed">
              This document clarifies the legal boundaries of GroupSora. Please read this Disclaimer thoroughly to understand our position regarding third-party platforms, links, and content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Desktop Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 self-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-h-[75vh] overflow-y-auto">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-4">
                On This Page
              </h4>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block py-2 px-3 text-sm font-semibold text-gray-500 hover:text-green-600 hover:bg-green-50/50 rounded-xl transition-all"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Disclaimer Content Column */}
            <div className="lg:col-span-9 bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10 md:p-12 space-y-12">
              
              {/* TL;DR Quick Summary Box */}
              <div className="bg-linear-to-br from-green-50/70 to-emerald-50/30 border border-green-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-green-900 flex items-center gap-2 mb-3">
                  💡 Disclaimer Highlights (TL;DR)
                </h3>
                <p className="text-green-800 text-sm leading-relaxed font-normal">
                  GroupSora is a community listing directory. We are **completely unaffiliated** with WhatsApp, Meta, Telegram, or Discord. We do **not monitor, own, or verify** any of the public groups listed. Joining any chat group is your own decision and **at your own risk**. We are not liable for any scams, fraud, malware, or inappropriate behavior within external groups.
                </p>
              </div>

              <div className="space-y-12 text-gray-700 leading-relaxed text-[16px]">
                
                {/* 1. Platform Overview */}
                <section id="overview" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">01.</span> Platform Overview
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora operates as a community directory that indexes public social chat groups and invitation hyperlinks. Our database contains user-submitted and web-curated invite links to platforms like WhatsApp, Telegram, Instagram, Facebook, and Discord.
                    </p>
                    <p>
                      By accessing our Platform, you explicitly acknowledge that the database consists of user-generated links. GroupSora is not responsible for the contents or activities of external chat rooms.
                    </p>
                  </div>
                </section>

                {/* 2. Non-Affiliation Notice */}
                <section id="non-affiliation" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">02.</span> Non-Affiliation Notice
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora is an entirely independent online directory. We are not associated, affiliated, sponsored, endorsed, or officially connected with any third-party communication application, software, or brand.
                    </p>
                    <div className="bg-amber-50/50 border-l-4 border-amber-500 rounded-r-xl p-4 my-6">
                      <p className="text-amber-800 text-xs leading-relaxed font-medium">
                        <strong>Official Trademark Clarification:</strong> WhatsApp™, Instagram™, Facebook™ are registered trademarks of Meta Platforms, Inc. Telegram™ is a registered trademark of Telegram FZ-LLC. Discord™ is a registered trademark of Discord Inc. Use of these names on our Platform does not imply endorsement or official affiliation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. Nature of Public Links */}
                <section id="public-links" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">03.</span> Nature of Public Links
                  </h2>
                  <div className="space-y-4">
                    <p>
                      All group invite links, tags, descriptions, and logos submitted on GroupSora are considered publicly available content on the World Wide Web. 
                    </p>
                    <p>
                      By uploading or submitting any group link on GroupSora, you confirm that the group is set to "public" on the respective application, and that you have full authorization to distribute its invite link. GroupSora is not responsible for any subsequent copying, scraping, or sharing of public links.
                    </p>
                  </div>
                </section>

                {/* 4. Informational Purpose Only */}
                <section id="purpose" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">04.</span> Informational Purpose Only
                  </h2>
                  <div className="space-y-4">
                    <p>
                      The group databases and listings compiled on GroupSora are provided strictly for educational, discovery, and general informational purposes.
                    </p>
                    <p>
                      GroupSora does not advocate, encourage, or facilitate spamming, harassment, illegal commerce, copyrighted material sharing, or any form of platform misuse. Users are solely responsible for keeping their behavior lawful and in compliance with the Terms of Service of the respective chat applications.
                    </p>
                  </div>
                </section>

                {/* 5. User Responsibility */}
                <section id="responsibility" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">05.</span> User Responsibility & Risk
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Any action you take based on information, links, or group directories found on GroupSora is **entirely at your own risk**.
                    </p>
                    <p>
                      GroupSora does not monitor, oversee, verify, or regulate the activities, voice chats, shared media, or user conduct taking place within external groups. You are warned that public chat channels may contain mature content, fake giveaways, financial advice, or spam. Please protect your personal details and never send money to individuals inside public groups.
                    </p>
                  </div>
                </section>

                {/* 6. Disclaimer of Warranties */}
                <section id="warranties" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">06.</span> Disclaimer of Warranties
                  </h2>
                  <div className="space-y-4">
                    <p className="italic text-gray-600">
                      GroupSora provides its directory on an “AS IS” and “AS AVAILABLE” basis without warranties of any kind, whether express or implied.
                    </p>
                    <p>
                      We specifically disclaim all warranties regarding:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>The accurate spelling, description, or tags of group cards.</li>
                      <li>The online availability or activity status of any listed link.</li>
                      <li>The safety, server integrity, or security of external chat servers.</li>
                      <li>Uninterrupted, lag-free access to our Platform.</li>
                    </ul>
                  </div>
                </section>

                {/* 7. Limitation of Liability */}
                <section id="liability" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">07.</span> Limitation of Liability
                  </h2>
                  <div className="space-y-4">
                    <p>
                      In no event shall GroupSora, its developers, founding team, employees, or partners be liable for any direct, indirect, incidental, special, or consequential damages.
                    </p>
                    <p>
                      This limitation covers losses resulting from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Joining public groups or clicking external hyperlinks.</li>
                      <li>Scams, fraud, identity theft, or phishing in external channels.</li>
                      <li>Viruses, malware, or computer bugs downloaded from external storage links.</li>
                      <li>Temporary service downtime of the GroupSora platform.</li>
                    </ul>
                  </div>
                </section>

                {/* 8. Trademark Ownership */}
                <section id="trademarks" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">08.</span> Trademark & Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <p>
                      All third-party trademarks, service marks, brand logos, and trade names used on GroupSora remain the exclusive intellectual property of their respective legal owners.
                    </p>
                    <p>
                      Any use of trademarked titles or brand names on GroupSora is purely nominal and intended solely to guide visitors to the corresponding platforms or services.
                    </p>
                  </div>
                </section>

                {/* 9. Document Modifications */}
                <section id="updates" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">09.</span> Document Modifications
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora reserves the right to modify, edit, purge, or revise any section of this Disclaimer at any time without prior notification.
                    </p>
                    <p>
                      It is your responsibility to review this legal page regularly. Your continued access to the website confirms your acceptance of any revisions made.
                    </p>
                  </div>
                </section>

                {/* 10. Copyright & DMCA Claims */}
                <section id="copyright" className="scroll-mt-24 pb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">10.</span> Copyright Claims & Takedowns (DMCA)
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora respects intellectual property rights. If you are a copyright owner, a brand manager, or a group owner and believe that any listing on GroupSora infringes your trademark or copyright, please contact us immediately through our official contact page.
                    </p>
                    <p>
                      Please include the exact URL of the listing and evidence of ownership in your message. We process all legitimate removal requests within 48–72 hours.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md active:scale-[0.98] transition-all"
                    >
                      ✉️ Report a Violation
                    </Link>
                  </div>
                </section>

              </div>
            </div>

          </div>
        </div>
      </main>

      
      <Footer />
    </>
  );
}