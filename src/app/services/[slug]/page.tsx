import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors"
          >
            ← All Services
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-5">{service.icon}</div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-red">
                  Service
                </span>
                {service.slug === "handyman-services" && (
                  <span className="text-xs font-bold tracking-widest uppercase bg-brand-red text-white px-2.5 py-1 rounded">
                    FREE
                  </span>
                )}
              </div>
              <h1
                className="text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}
              >
                {service.title}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">{service.tagline}</p>
            </div>
            <div>
              <div className="bg-white/5 border border-white/8 rounded-xl p-7">
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-3.5 rounded text-base transition-colors"
                >
                  {service.cta} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Details */}
      <section className="py-20 bg-brand-beige-light">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Features */}
          <div className="md:col-span-2">
            <h2
              className="text-brand-charcoal text-2xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What&apos;s Included
            </h2>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-brand-red font-bold text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="md:col-span-3">
            <h2
              className="text-brand-charcoal text-2xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How We Do It
            </h2>
            <div className="space-y-5">
              {service.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-brand-charcoal text-2xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group border border-gray-100 hover:border-brand-red/30 rounded-xl p-6 transition-colors"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3
                  className="text-brand-charcoal font-semibold mb-1.5 group-hover:text-brand-red transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.shortTitle}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.tagline}</p>
              </Link>
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
            Book Your {service.shortTitle}
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Get a free, transparent quote — no hidden fees, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-red font-semibold px-8 py-4 rounded text-base hover:bg-brand-beige transition-colors"
          >
            {service.cta} →
          </Link>
        </div>
      </section>
    </>
  );
}
