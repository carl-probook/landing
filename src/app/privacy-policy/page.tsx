import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <section className="py-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Privacy Policy
                        </h1>
                        <div className="prose prose-lg max-w-none text-zinc-600">
                            <p>Last updated: November 24, 2025</p>
                            
                            <p>
                                This Privacy Policy (&ldquo;Policy&rdquo;) describes how <strong>Probook</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, discloses, and secures information in connection with our products and services, including but not limited to our website(s), browser extensions, mobile and web applications, APIs, and marketplace integrations (collectively, the &ldquo;Services&rdquo;). By using the Services, you acknowledge and agree to the practices described in this Policy.
                            </p>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-black mt-6 mb-2">1.1 Account and Authentication Data</h3>
                            <p>
                                When you create an account, log in, or authenticate via third-party providers (e.g., Google Firebase), we collect identifiers such as your email address or authentication tokens necessary to manage and secure your access.
                            </p>

                            <h3 className="text-xl font-semibold text-black mt-6 mb-2">1.2 Usage, Technical, and Device Data</h3>
                            <p>
                                We may collect data automatically when you use the Services, including IP addresses, browser type, device identifiers, operating system, geolocation (coarse/anonymized), server logs, crash reports, and usage statistics. This helps us operate, secure, and improve our Services.
                            </p>

                            <h3 className="text-xl font-semibold text-black mt-6 mb-2">1.3 Persistent Identifiers and Preferences</h3>
                            <p>
                                To personalize and improve your experience, we may use persistent identifiers (e.g., user or device IDs) and store your preferences or settings.
                            </p>

                            <h3 className="text-xl font-semibold text-black mt-6 mb-2">1.4 Cookies and Similar Technologies</h3>
                            <p>
                                On our websites and within certain Services, we and our partners may use cookies, web beacons, pixels, and similar tools to monitor usage, support features, and enable relevant communications or advertising.
                            </p>

                            <h3 className="text-xl font-semibold text-black mt-6 mb-2">1.5 Marketing and Third-Party Data</h3>
                            <p>
                                If you have interacted with our Services or with data partners, your email or related identifiers may be used in marketing or communications, subject to opt-out options (see Section 5).
                            </p>

                            <h3 className="text-xl font-semibold text-black mt-6 mb-2">1.6 Data from ServiceTitan</h3>
                            <p>
                                When you connect Probook to your ServiceTitan account via the ServiceTitan Marketplace, and authorize our integration, we may access and process certain ServiceTitan data as permitted by ServiceTitan&rsquo;s API and your authorization. We only access the categories of data that you have explicitly authorized through ServiceTitan.
                            </p>

                            <h3 className="text-xl font-semibold text-black mt-6 mb-2">1.7 Google User Data</h3>
                            <p>
                                Our application accesses Google user data, specifically Google Local Services Ads (LSA) leads, to enable you to aggregate and manage these leads within our platform. We use this data to allow you to view lead details and send messages to prospective customers. We do not use Google user data for training generalized AI/ML models (unless explicitly permitted and disclosed), advertising, or other unrelated purposes. This data is stored securely and is only shared with third-party service providers as necessary to provide these communication features.
                            </p>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. How We Use Information</h2>

                            <p>
                                We use collected information, including ServiceTitan and Google data, for purposes that include but are not limited to:
                            </p>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Delivering and maintaining the Services</strong> – enabling integrations, managing authentication, and securing data flows.
                                </li>
                                <li>
                                    <strong>Personalization and workflow support</strong> – tailoring features, displaying relevant schedules or tasks, and synchronizing data across systems.
                                </li>
                                <li>
                                    <strong>Analytics and improvements</strong> – understanding usage patterns, identifying errors, and enhancing performance.
                                </li>
                                <li>
                                    <strong>Communications</strong> – sending you updates, support messages, or (where permitted) marketing communications.
                                </li>
                                <li>
                                    <strong>Compliance</strong> – meeting legal obligations or responding to lawful requests.
                                </li>
                            </ul>

                            <p className="mt-4">
                                We do not use ServiceTitan or Google user data for advertising or unrelated purposes.
                            </p>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Information Sharing and Disclosure</h2>

                            <p>
                                We do <strong>not sell</strong> your personal information. We may share data in the following ways:
                            </p>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Service Providers</strong>: Trusted partners (e.g., hosting, analytics, authentication) who process data only on our behalf.
                                </li>
                                <li>
                                    <strong>ServiceTitan</strong>: Data access and usage are governed by ServiceTitan&rsquo;s API terms, and in some cases, certain data may flow back into ServiceTitan in order to maintain integration functionality.
                                </li>
                                <li>
                                    <strong>Google</strong>: Data access and usage are governed by Google&rsquo;s API Services User Data Policy, specifically adhering to Limited Use requirements where applicable.
                                </li>
                                <li>
                                    <strong>Legal or Safety Reasons</strong>: If compelled by law, regulation, litigation, or necessary to protect rights, property, or safety.
                                </li>
                                <li>
                                    <strong>Business Transfers</strong>: If Probook undergoes a merger, acquisition, or sale of assets.
                                </li>
                                <li>
                                    <strong>Aggregated or De-Identified Data</strong>: Shared insights that cannot reasonably identify individuals.
                                </li>
                            </ul>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Data Retention and Security</h2>

                            <p className="mb-4">
                                We retain ServiceTitan, Google, and other collected data only as long as necessary to provide the Services or as required by law. Data obtained through ServiceTitan is handled in accordance with both this Policy and ServiceTitan&rsquo;s marketplace rules. Google user data is handled in accordance with Google&rsquo;s API Services User Data Policy.
                            </p>

                            <p>
                                We implement reasonable safeguards to protect the confidentiality and integrity of data. However, no system is fully secure, and we cannot guarantee absolute protection.
                            </p>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Your Choices and Rights</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Account Control</strong>: Contact <a href="mailto:info@probook.ai" className="text-black hover:underline font-semibold">info@probook.ai</a> to access, modify, or delete your account-related data.
                                </li>
                                <li>
                                    <strong>ServiceTitan Data</strong>: You may manage or revoke Probook&rsquo;s access to ServiceTitan data through your ServiceTitan account or marketplace authorization settings.
                                </li>
                                <li>
                                    <strong>Google Data</strong>: You may manage or revoke Probook&rsquo;s access to your Google data through your <a href="https://myaccount.google.com/permissions" target="_blank" className="text-black hover:underline">Google Account security settings</a>.
                                </li>
                                <li>
                                    <strong>Cookies & Tracking</strong>: Manage cookie preferences in your browser.
                                </li>
                                <li>
                                    <strong>Marketing Opt-Out</strong>: You may unsubscribe from our marketing emails at any time, or opt out of certain advertising practices via: <a href="https://app.retention.com/optout?utm_source=chatgpt.com" target="_blank" className="text-black hover:underline break-all">https://app.retention.com/optout</a>.
                                </li>
                                <li>
                                    <strong>Legal Rights</strong>: Depending on your jurisdiction, you may have additional rights (e.g., GDPR or CCPA) related to data access, portability, or deletion.
                                </li>
                            </ul>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Compliance & Third-Party Standards</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>ServiceTitan Marketplace</strong>: Our integration adheres to ServiceTitan&rsquo;s applicable API and marketplace requirements.
                                </li>
                                <li>
                                    <strong>Google API Services</strong>: Our use and transfer to any other app of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" className="text-black hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
                                </li>
                                <li>
                                    <strong>CAN-SPAM and Similar Laws</strong>: We ensure that permitted marketing communications comply with applicable regulations, including unsubscribe mechanisms.
                                </li>
                                <li>
                                    <strong>Third-Party Policies</strong>: Your use of connected services (such as Firebase or ServiceTitan) remains subject to their respective privacy policies.
                                </li>
                            </ul>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">7. Changes to This Policy</h2>

                            <p>
                                We may update this Policy periodically. Updates will be posted with an effective date, and material changes will be communicated where required.
                            </p>

                            <hr className="my-8 border-zinc-200" />

                            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. Contact Us</h2>

                            <p>
                                For questions or to exercise your privacy rights, contact us at: <br />
                                <a href="mailto:info@probook.ai" className="text-black hover:underline font-semibold">info@probook.ai</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
