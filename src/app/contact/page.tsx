import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free moving quote from Placid Transit LLC. Answer a few quick questions and we'll get back to you with a transparent estimate — usually within the hour.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header band */}
      <section className="bg-brand-black pt-28 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-4">
            Free Quote
          </span>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Tell Us About Your Move
          </h1>
          <p className="text-white/55 text-base max-w-lg mx-auto">
            Answer a few quick questions — no account needed, no commitment. We typically respond within the hour.
          </p>
        </div>
      </section>

      {/* Typeform-style form */}
      <section className="bg-white">
        <div className="max-w-2xl mx-auto">
          <QuoteForm />
        </div>
      </section>

      {/* Alternative contact */}
      <section className="py-16 bg-brand-beige-light border-t border-brand-beige-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">☎</div>
              <h3
                className="text-brand-charcoal font-semibold text-base mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Call Us
              </h3>
              <a
                href="tel:XXXXXXXXXX"
                className="text-brand-red font-semibold text-sm hover:text-brand-red-dark transition-colors"
              >
                (XXX) XXX-XXXX
              </a>
              <p className="text-gray-400 text-xs mt-1">7 days a week</p>
            </div>
            <div>
              <div className="text-3xl mb-3">✉️</div>
              <h3
                className="text-brand-charcoal font-semibold text-base mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Email
              </h3>
              <a
                href="mailto:info@placidtransit.com"
                className="text-brand-red font-semibold text-sm hover:text-brand-red-dark transition-colors"
              >
                info@placidtransit.com
              </a>
              <p className="text-gray-400 text-xs mt-1">Response within 2 hours</p>
            </div>
            <div>
              <div className="text-3xl mb-3">📍</div>
              <h3
                className="text-brand-charcoal font-semibold text-base mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Service Area
              </h3>
              <p className="text-gray-600 text-sm">Chicago, IL & Suburbs</p>
              <p className="text-gray-400 text-xs mt-1">+ Indiana & Wisconsin borders</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
