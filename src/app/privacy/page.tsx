import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    { id: "scope", title: "1. Scope & Introduction" },
    { id: "collect", title: "2. Information We Collect" },
    { id: "use", title: "3. How We Use Data" },
    { id: "cookies", title: "4. Cookies & Tracking" },
    { id: "advertising", title: "5. Advertising Partners" },
    { id: "user-content", title: "6. User-Submitted Links" },
    { id: "rights", title: "7. Data Protection Rights" },
    { id: "children", title: "8. Children's Privacy" },
    { id: "security", title: "9. Security Measures" },
    { id: "updates", title: "10. Policy Modifications" },
    { id: "contact", title: "11. Contact & Requests" },
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
                Privacy Center
              </span>
              
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-900 text-lg md:text-xl font-normal max-w-3xl leading-relaxed">
              At GroupSora, your privacy is our highest priority. This policy outlines how we handle, protect, and use the information gathered across our platform.
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

            {/* Privacy Content Column */}
            <div className="lg:col-span-9 bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10 md:p-12 space-y-12">
              
              {/* TL;DR Quick Summary Box */}
              <div className="bg-linear-to-br from-green-50/70 to-emerald-50/30 border border-green-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-green-900 flex items-center gap-2 mb-3">
                  💡 Privacy Highlights (TL;DR)
                </h3>
                <p className="text-green-800 text-sm leading-relaxed font-normal">
                  We collect basic server logs, browser type, and details you actively submit when listing a social group. <strong>We do not sell your personal data</strong>. Any group link, title, or description you publish here is completely <strong>public</strong> and accessible to anyone. We advise users not to publish private phone numbers or personal information.
                </p>
              </div>

              <div className="space-y-12 text-gray-700 leading-relaxed text-[16px]">
                
                {/* 1. Introduction */}
                <section id="scope" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">01.</span> Scope & Introduction
                  </h2>
                  <div className="space-y-4">
                    <p>
                      At GroupSora, accessible through our platform, protecting the privacy of our visitors and users is one of our core values. This Privacy Policy documents the types of information we collect, record, process, and protect while you navigate our community index.
                    </p>
                    <p>
                      By accessing, browsing, or using GroupSora, you explicitly consent to the data practices outlined in this Privacy Policy. If you do not agree with the terms listed, you must immediately cease accessing our website and related services.
                    </p>
                  </div>
                </section>

                {/* 2. Information We Collect */}
                <section id="collect" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">02.</span> Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora collects information both automatically and voluntarily to provide a secure and functional catalog.
                    </p>
                    <p className="font-semibold text-gray-800">The categories of information we gather include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li><strong>Log Data & Metadata:</strong> When you browse, our servers automatically log details such as IP address, browser type, device operating system, referring URL, pages viewed, and access timestamps.</li>
                      <li><strong>Contact Information:</strong> If you contact us directly via email or our contact form, we collect your name, email address, message subject, and the contents of your message.</li>
                      <li><strong>User Submissions:</strong> When you list a group, we collect the public invite link, group title, description, category, platform type, country, language, tags, and custom images.</li>
                    </ul>
                    <div className="bg-amber-50/50 border-l-4 border-amber-500 rounded-r-xl p-4 my-6">
                      <p className="text-amber-800 text-xs leading-relaxed font-medium">
                        <strong>Public Listing Warning:</strong> Any group information, links, or logos you submit are immediately made visible to the general public and search engines. Please do not submit private chat links or groups containing private data.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. How We Use Data */}
                <section id="use" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">03.</span> How We Use Your Data
                  </h2>
                  <div className="space-y-4">
                    <p>
                      We process and use the gathered information to provide, maintain, and secure our online directory.
                    </p>
                    <p className="font-semibold text-gray-800">Specifically, your data is used for:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Operating, developing, and upgrading the GroupSora platform.</li>
                      <li>Reviewing and certifying submitted group links to prevent scams.</li>
                      <li>Anonymously measuring traffic metrics to understand user preferences.</li>
                      <li>Identifying and blocking malicious traffic, spam, DDoS attempts, and bots.</li>
                      <li>Responding to user support emails, copyright claims, and feedback.</li>
                      <li>Displaying relevant community suggestions and personalized advertisements.</li>
                    </ul>
                  </div>
                </section>

                {/* 4. Cookies & Tracking */}
                <section id="cookies" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">04.</span> Cookies & Tracking Technologies
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora utilizes standard cookies, local browser storage, and pixel tags to customize your browsing session. Cookies help us keep you logged in, remember your search options, and analyze website speed performance.
                    </p>
                    <p>
                      You can choose to disable or block cookies through your individual browser settings. However, disabling cookies may limit your ability to use certain features or maintain active preferences on our Platform.
                    </p>
                  </div>
                </section>

                {/* 5. Advertising Partners */}
                <section id="advertising" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">05.</span> Advertising Partners & Cookies
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Third-party ad networks and ad servers may display promotions on GroupSora. These ad networks automatically receive your IP address when advertisements are rendered on your device.
                    </p>
                    <p>
                      Google is one of our third-party vendors. It uses DART cookies to serve contextual advertisements to our users based on their visits to GroupSora and other internet domains. You may choose to opt-out of Google’s ad cookies by visiting the Google Ad Network Privacy Policy.
                    </p>
                    <p>
                      Please note that GroupSora has no control or access to the tracking cookies used by third-party advertisers.
                    </p>
                  </div>
                </section>

                {/* 6. User-Submitted Links */}
                <section id="user-content" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">06.</span> User-Submitted Links & Groups
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora indexes chat groups on external platforms (WhatsApp, Telegram, etc.). Once you click on a group card and leave our website, our Privacy Policy is no longer in effect.
                    </p>
                    <p>
                      We do not control the privacy practices, chat histories, data collections, or member activities within external channels. We strongly recommend reading the privacy policies of the respective chat applications and external platforms before joining any group.
                    </p>
                  </div>
                </section>

                {/* 7. Data Protection Rights */}
                <section id="rights" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">07.</span> Your Data Protection Rights
                  </h2>
                  <div className="space-y-4">
                    <p>
                      We want to ensure you are fully aware of all your data protection rights. Depending on your geographical location (e.g., GDPR in the EU or CCPA in California), you may hold the following legal rights:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li><strong>Right to Access:</strong> You can request copies of your archived personal data.</li>
                      <li><strong>Right to Rectification:</strong> You can request corrections to any inaccurate or incomplete listing details.</li>
                      <li><strong>Right to Erasure (Takedown):</strong> You can request that we permanently delete any listing or data we hold about you.</li>
                      <li><strong>Right to Restrict Processing:</strong> You can request that we limit how we process or filter your submitted information.</li>
                    </ul>
                    <p>
                      If you submit a privacy request, we will respond within 30 days. Please contact us via our Contact Form to execute any data rights.
                    </p>
                  </div>
                </section>

                {/* 8. Children's Privacy */}
                <section id="children" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">08.</span> Children's Privacy Protection
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Protecting young children online is a fundamental priority for us. GroupSora does not knowingly collect or store any personal identifiable information from children under the age of 13.
                    </p>
                    <p>
                      If you are a parent or legal guardian and discover that your child has submitted public group details or contact information on GroupSora, please contact us immediately. We will take swift steps to purge the requested information from our servers.
                    </p>
                  </div>
                </section>

                {/* 9. Security Measures */}
                <section id="security" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">09.</span> Security Measures & Protocols
                  </h2>
                  <div className="space-y-4">
                    <p>
                      We employ modern industry-standard security measures (including SSL encryption, secure hosting configurations, and API gateways) to safeguard our databases.
                    </p>
                    <p>
                      However, please understand that no internet transmission method or server storage architecture is 100% immune to breaches. Therefore, while we strive to protect your info, we cannot guarantee absolute database security.
                    </p>
                  </div>
                </section>

                {/* 10. Policy Modifications */}
                <section id="updates" className="scroll-mt-24 border-b border-gray-100 pb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">10.</span> Policy Modifications & Changes
                  </h2>
                  <div className="space-y-4">
                    <p>
                      GroupSora reserves the right to modify, add to, or replace this Privacy Policy at any time without prior notice. 
                    </p>
                    <p>
                      Any modifications take effect immediately upon being published on this page. We encourage you to check this page frequently to stay informed about how we safeguard your privacy.
                    </p>
                  </div>
                </section>

                {/* 11. Contact & Requests */}
                <section id="contact" className="scroll-mt-24 pb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-green-600 font-mono text-xl">11.</span> Contact & Privacy Requests
                  </h2>
                  <div className="space-y-4">
                    <p>
                      If you have questions regarding this Privacy Policy, need to execute a GDPR/CCPA request, or want to report a privacy concern, please contact us immediately through our official contact page.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md active:scale-[0.98] transition-all"
                    >
                      ✉️ Open Privacy Request
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