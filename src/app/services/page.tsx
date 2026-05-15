import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Moving Services",
  description:
    "Placid Transit LLC offers local moving, long-distance moving, commercial moving, specialty moving, packing, junk removal, and free handyman services in Chicago, IL.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-4">
            Our Services
          </span>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 3.8rem)" }}
          >
            Every Move, Every Need
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            From studio apartments to full office relocations, Placid Transit delivers the right service for every situation.
          </p>
        </div>
      </section>

      {/* Services detail list */}
      <section className="py-20 bg-brand-beige-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`rounded-xl border overflow-hidden grid grid-cols-1 md:grid-cols-3 ${
                  i % 2 === 1
                    ? "bg-brand-black border-brand-charcoal"
                    : "bg-white border-gray-100"
                }`}
              >
                {/* Left info */}
                <div
                  className={`md:col-span-1 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r ${
                    i % 2 === 1
                      ? "border-white/8"
                      : "border-gray-100"
                  }`}
                >
                  <div>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h2
                      className={`font-semibold text-2xl mb-2 ${i % 2 === 1 ? "text-white" : "text-brand-charcoal"}`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h2>
                    {service.slug === "handyman-services" && (
                      <span className="inline-block text-xs font-bold tracking-widest uppercase bg-brand-red text-white px-2.5 py-1 rounded mb-3">
                        FREE
                      </span>
                    )}
                    <p className={`text-sm leading-relaxed ${i % 2 === 1 ? "text-white/55" : "text-gray-500"}`}>
                      {service.tagline}
                    </p>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-brand-red hover:text-brand-red-light text-sm font-semibold mt-5 transition-colors"
                  >
                    Full Details →
                  </Link>
                </div>

                {/* Right features */}
                <div className="md:col-span-2 p-8">
                  <p className={`text-sm leading-relaxed mb-5 ${i % 2 === 1 ? "text-white/60" : "text-gray-500"}`}>
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2.5 text-sm ${i % 2 === 1 ? "text-white/70" : "text-gray-600"}`}>
                        <span className="text-brand-red font-bold flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #C41E3A 0%, #9B1830 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Tell us about your move and we&apos;ll get back to you with a free estimate — usually within the hour.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-red font-semibold px-8 py-4 rounded text-base hover:bg-brand-beige transition-colors"
          >
            Get Your Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
