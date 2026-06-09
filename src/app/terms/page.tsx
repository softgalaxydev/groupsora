import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function TermsPage() {
  const sections = [
    { id: "intro", title: "1. Introduction & Overview" },
    { id: "acceptance", title: "2. Acceptance of Terms" },
    { id: "services", title: "3. Scope of Services" },
    { id: "eligibility", title: "4. User Eligibility" },
    { id: "conduct", title: "5. User Conduct & Rules" },
    { id: "third-party", title: "6. External Groups & Links" },
    { id: "disclaimers", title: "7. Disclaimers & Warranties" },
    { id: "liability", title: "8. Limitation of Liability" },
    { id: "moderation", title: "9. Content Takedowns" },
    { id: "privacy", title: "10. Privacy & Security" },
    { id: "final", title: "11. Miscellaneous Provisions" },
    { id: "contact", title: "12. Support & Contact" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Elegant Brand Header */}
          <div className="border-b border-gray-200 pb-8 mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider select-none">
                Legal Center
              </span>
              
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-900 text-lg md:text-xl font-normal max-w-3xl leading-relaxed">
              Welcome to GroupSora. Please read these Terms & Conditions carefully before using our platform. They establish a legally binding agreement between you and the Platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Desktop Sticky Table of Contents (Hidden on mobile) */}
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

            {/* Terms Content Column */}
            <div className="lg:col-span-9 bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10 md:p-12 space-y-12">
              
              {/* TL;DR Quick Summary Box */}
              <div className="bg-linear-to-br from-green-50/70 to-emerald-50/30 border border-green-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-green-900 flex items-center gap-2 mb-3">
                  💡 Quick Summary (TL;DR)
                </h3>
                <p className="text-green-800 text-sm leading-relaxed font-normal">
                  GroupSora is an independent catalog for finding WhatsApp, Telegram, and Instagram group links. We are <strong>completely independent</strong> and <strong>not affiliated</strong> with Meta, WhatsApp, Telegram, or any other company. We do not own, manage, or moderate these groups, and you join them entirely at your own risk. By browsing or submitting groups, you agree to comply with all laws and promise not to post illegal, harmful, or spam content.
                </p>
              </div>

              <div className="space-y-12 text-gray-700 leading-relaxed text-[16px]">
                
                {/* 1. Introduction */}
                <section id="intro" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">01.</span> Introduction & Overview
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Welcome to GroupSora (“we,” “our,” or “the Platform”). GroupSora is an independent online directory and search engine created to help users discover, browse, share, and join public social communities across platforms such as WhatsApp, Telegram, Instagram, and more.
                    </p>
                    <p>
                      All trademarks, logos, names, product brands, and company names appearing on this website belong to their respective owners. Any mention of third-party trademarks, applications, or services on GroupSora is purely for identification, informational, and descriptive purposes.
                    </p>
                    <div className="bg-amber-50/50 border-l-4 border-amber-500 rounded-r-xl p-4 my-6">
                      <p className="text-amber-800 text-xs leading-relaxed font-medium">
                        <strong>Non-Affiliation Disclaimer:</strong> GroupSora is not directly or indirectly associated, affiliated, sponsored, endorsed, or officially connected with WhatsApp Inc., Telegram Messenger LLP, Meta Platforms, Inc., Instagram, or any of their parent companies, subsidiaries, or affiliates.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. Acceptance of Terms */}
                <section id="acceptance" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">02.</span> Acceptance of Terms
                  </h2>
                  <div className="space-y-4">
                    <p>
                      By accessing, browsing, using, linking to, or submitting any content on GroupSora, you acknowledge that you have carefully read, fully understood, and agreed to comply with all the Terms & Conditions mentioned on this page. 
                    </p>
                    <p>
                      If you disagree with any part of these Terms & Conditions, then you must immediately stop using GroupSora and any related services provided through the website.
                    </p>
                    <p>
                      GroupSora reserves the full right to update, modify, replace, remove, or change any part of these Terms & Conditions at any time without prior notice. It is the sole responsibility of users to regularly review this page. Continued use of the website after changes are published automatically means that you accept and agree to the revised Terms & Conditions.
                    </p>
                  </div>
                </section>

                {/* 3. Scope of Services */}
                <section id="services" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">03.</span> Scope of Services
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora provides users with an index where publicly accessible social group invite links and community-related content may be shared, discovered, and accessed. Users may browse categories, search for groups, submit invite links, upload descriptions, and interact with public group listings available on the platform.
                    </p>
                    <p>
                      GroupSora itself does not own, create, manage, monitor, or control the external groups submitted by users. All groups listed on the website are user-generated or publicly available online. Therefore, GroupSora cannot guarantee the authenticity, safety, legality, reliability, activity level, or accuracy of any group listed on the website.
                    </p>
                  </div>
                </section>

                {/* 4. User Eligibility */}
                <section id="eligibility" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">04.</span> User Eligibility
                  </h2>
                  <div className="space-y-4">
                    <p>
                      You must be at least 13 years old to access or use GroupSora. By using this website, you confirm that you satisfy the minimum age requirement and are legally capable of agreeing to these Terms & Conditions. 
                    </p>
                    <p>
                      If you are under the required age, you are strictly prohibited from using the website or accessing any services provided by GroupSora. If we discover or suspect that any user is under the age of 13, we reserve the right to terminate their access immediately.
                    </p>
                  </div>
                </section>

                {/* 5. User Conduct & Rules */}
                <section id="conduct" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">05.</span> User Conduct & Rules
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Users are fully and personally responsible for all content, links, descriptions, images, tags, messages, or other materials they submit, upload, publish, or share through GroupSora. You agree not to use GroupSora for unlawful, abusive, harmful, fraudulent, or misleading purposes.
                    </p>
                    <p className="font-semibold text-gray-800">
                      Specifically, you represent and warrant that you will not submit or promote:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Adult material, pornography, sexually explicit content, or violence.</li>
                      <li>Hate speech, discrimination, harassment, defamation, or threats against individuals or groups.</li>
                      <li>Scams, phishing links, malware, ransomware, fake giveaways, or misleading software.</li>
                      <li>Promotional spam, duplicate group submissions, or bulk commercial advertising.</li>
                      <li>Content that infringes upon third-party copyrights, intellectual property rights, or privacy.</li>
                      <li>Group links related to illegal goods, weapons, drugs, or prohibited activities.</li>
                    </ul>
                    <p>
                      Any attempt to misuse the platform, distribute harmful links, impersonate another person or organization, or exploit the website for illegal activities may result in immediate content removal, permanent restrictions, and reporting to relevant legal authorities.
                    </p>
                  </div>
                </section>

                {/* 6. External Groups & Links */}
                <section id="third-party" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">06.</span> External Groups & Links
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora contains hyperlinks that redirect you to external platforms and chat networks. Since these third-party platforms are not controlled or managed by GroupSora, we are not responsible for their availability, safety, privacy practices, content accuracy, or reliability.
                    </p>
                    <p>
                      Users acknowledge that accessing any third-party link or joining any external group is done entirely at their own risk. GroupSora shall not be held responsible for any damages, losses, fraud, account bans, data leaks, inappropriate content, or negative experiences caused through third-party platforms or external communities.
                    </p>
                  </div>
                </section>

                {/* 7. Disclaimers & Warranties */}
                <section id="disclaimers" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">07.</span> Disclaimers & Warranties
                  </h2>
                  <div className="space-y-4">
                    <p className="italic text-gray-600">
                      All services, content, and features available on GroupSora are provided on an “AS IS” and “AS AVAILABLE” basis without any warranties of any kind, whether express or implied.
                    </p>
                    <p>
                      GroupSora does not warrant or guarantee that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>The Platform will operate uninterrupted, secure, or free from server glitches, bugs, or viruses.</li>
                      <li>All listed group invite links will remain active, safe, valid, or appropriate.</li>
                      <li>The content, user descriptions, or group tags are 100% accurate, complete, or verified.</li>
                    </ul>
                    <p>
                      Users understand that internet-based directories carry inherent risks and they agree to use the Platform entirely at their own discretion.
                    </p>
                  </div>
                </section>

                {/* 8. Limitation of Liability */}
                <section id="liability" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">08.</span> Limitation of Liability
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Under no circumstances shall GroupSora, its owners, developers, partners, employees, affiliates, or contributors be liable for any direct, indirect, incidental, special, or consequential damages.
                    </p>
                    <p>
                      This includes, but is not limited to, damages arising from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>The use or inability to use the Platform.</li>
                      <li>Any interactions, conversations, or agreements made within external groups.</li>
                      <li>Any scams, financial losses, fraud, or phishing occurring in external chat rooms.</li>
                      <li>Technical failures, unauthorized access, hacking, server downtime, or data loss.</li>
                    </ul>
                    <p>
                      Users agree that their use of GroupSora is entirely at their own risk and responsibility.
                    </p>
                  </div>
                </section>

                {/* 9. Content Takedowns */}
                <section id="moderation" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">09.</span> Content Takedowns & Moderation
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora reserves the full right, but not the obligation, to review, edit, restrict, block, or permanently remove any content, group listing, or submission that violates these Terms & Conditions, or is considered inappropriate, harmful, misleading, abusive, or unlawful.
                    </p>
                    <p>
                      If you are a copyright owner, a brand manager, or an admin of a group and wish to request the removal of a specific listing due to trademark violation, copyright infringement (DMCA), or privacy concerns, please contact us immediately. We process all legitimate takedown requests within 48–72 hours.
                    </p>
                  </div>
                </section>

                {/* 10. Privacy & Security */}
                <section id="privacy" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">10.</span> Privacy & Security
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora respects user privacy and aims to maintain a secure browsing experience. By using our website, you agree that your public information (such as submitted group links and descriptions) will be displayed publicly. 
                    </p>
                    <p>
                      Please do not share or upload private information, personal phone numbers, or passwords. GroupSora shall not be responsible for any spam calls, messages, or marketing campaigns targeted at users who willingly expose their contact details online.
                    </p>
                  </div>
                </section>

                {/* 11. Miscellaneous Provisions */}
                <section id="final" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">11.</span> Miscellaneous Provisions
                  </h2>
                  <div className="space-y-4">
                    <p>
                      These Terms & Conditions represent the complete agreement between users and GroupSora regarding the use of the website and its services.
                    </p>
                    <p>
                      If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue to remain fully valid and enforceable.
                    </p>
                  </div>
                </section>

                {/* 12. Support & Contact */}
                <section id="contact" className="scroll-mt-24 pb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">12.</span> Support & Legal Contact
                  </h2>
                  <div className="space-y-4">
                    <p>
                      If you have any questions, legal concerns, complaints, copyright issues, or requests related to these Terms & Conditions, please contact us directly through our Contact page.
                    </p>
                    <p>
                      Our support team will review your message and reply as soon as possible.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md active:scale-[0.98] transition-all"
                    >
                      ✉️ Open Contact Form
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