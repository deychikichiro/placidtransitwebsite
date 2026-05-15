import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Placid Transit LLC.",
};

export default function PrivacyPage() {
  const lastUpdated = "May 2025";

  return (
    <>
      <section className="bg-brand-black pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-gray max-w-none">
            <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  1. Introduction
                </h2>
                <p>
                  Placid Transit LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information you provide when using our website or requesting our services.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2. Information We Collect
                </h2>
                <p className="mb-3">We may collect the following information when you contact us or request a quote:</p>
                <ul className="space-y-2 pl-4">
                  {["Your name", "Phone number", "Email address", "Moving addresses (origin and destination)", "Move date and service details", "Any additional details you provide in forms or calls"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-red mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  3. How We Use Your Information
                </h2>
                <p className="mb-3">We use your information solely to:</p>
                <ul className="space-y-2 pl-4">
                  {[
                    "Respond to your quote requests and inquiries",
                    "Schedule and confirm moving services",
                    "Contact you about your move before, during, and after service",
                    "Improve our services and customer experience",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-red mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  4. Data Security
                </h2>
                <p>
                  We take reasonable precautions to protect your information. Your data is used only internally by Placid Transit LLC staff to fulfill your service request. We do not store payment information on our systems.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  5. Cookies & Analytics
                </h2>
                <p>
                  Our website may use basic analytics tools (such as Google Analytics) to understand how visitors use our site. These tools may use cookies — small files stored in your browser. You may disable cookies in your browser settings; this will not affect your ability to request our services.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  6. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to external sites. We are not responsible for the privacy practices or content of those sites.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  7. Children&apos;s Privacy
                </h2>
                <p>
                  Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  8. Your Rights
                </h2>
                <p>
                  You may request to view, correct, or delete any personal information we hold about you by contacting us directly. We will respond to your request within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
                </p>
              </div>

              <div>
                <h2 className="text-brand-charcoal text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  10. Contact Us
                </h2>
                <p className="mb-2">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="bg-brand-beige-light rounded-lg p-5 border border-brand-beige-dark">
                  <p className="font-semibold text-brand-charcoal mb-1">Placid Transit LLC</p>
                  <p>Chicago, IL</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:XXXXXXXXXX" className="text-brand-red hover:underline">
                      (XXX) XXX-XXXX
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@placidtransit.com" className="text-brand-red hover:underline">
                      info@placidtransit.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
