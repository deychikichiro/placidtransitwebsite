import Link from "next/link";
import { services } from "@/data/services";

const testimonials = [
  {
    name: "Maria K.",
    location: "Chicago, IL",
    text: "Placid Transit moved our entire 3-bedroom house without a single scratch. The team was professional, fast, and even mounted our TVs before they left. Absolutely recommend.",
    stars: 5,
  },
  {
    name: "James T.",
    location: "Schaumburg, IL",
    text: "Used them for our office relocation. They worked over the weekend so we didn't lose a single business day. Flawless execution.",
    stars: 5,
  },
  {
    name: "Sasha R.",
    location: "Evanston, IL",
    text: "They moved my grand piano. I was terrified, but they had the right equipment and knew exactly what they were doing. Not one scratch. Worth every penny.",
    stars: 5,
  },
];

const whyUs = [
  {
    icon: "🛡️",
    title: "Fully Insured",
    desc: "Every move is covered. Your belongings are protected from pickup to delivery.",
  },
  {
    icon: "⏱️",
    title: "Always On Time",
    desc: "We show up when we say we will — every time, no excuses.",
  },
  {
    icon: "💸",
    title: "Transparent Pricing",
    desc: "No hidden fees. Your quote is your price.",
  },
  {
    icon: "🔧",
    title: "Free Handyman Bonus",
    desc: "TV mounting, furniture assembly, and picture hanging — included free with every move.",
  },
  {
    icon: "🗺️",
    title: "Tri-State Coverage",
    desc: "Illinois, Indiana, and Wisconsin — we go where you go.",
  },
  {
    icon: "🎹",
    title: "Specialty Experts",
    desc: "Pianos, pool tables, safes — we move what other companies won't.",
  },
];

const areas = [
  "Chicago (All Neighborhoods)",
  "Schaumburg",
  "Naperville",
  "Palatine",
  "Arlington Heights",
  "Evanston",
  "Oak Park",
  "Des Plaines",
  "Rolling Meadows",
  "Buffalo Grove",
  "Wheeling",
  "Mount Prospect",
  "Hoffman Estates",
  "Lombard",
  "Elmhurst",
  "Indiana (border areas)",
  "Wisconsin (border areas)",
  "And more →",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0608 50%, #2a0a0e 100%)" }}
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Red glow accent */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 80% 40%, rgba(196,30,58,0.12) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-beige/70 border border-brand-beige/20 px-4 py-2 rounded-full mb-8">
              📍 Serving Chicago, IL · Indiana & Wisconsin Borders
            </div>

            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                lineHeight: "1.08",
              }}
            >
              Your Move,{" "}
              <span style={{ color: "#C41E3A" }}>Our Mission.</span>
            </h1>

            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
              Placid Transit LLC delivers professional moving services across Chicagoland and the
              tri-state area — residential, commercial, specialty, junk removal, and free handyman
              services included.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-7 py-3.5 rounded text-base transition-colors"
              >
                Get Your Free Quote →
              </Link>
              <a
                href="tel:XXXXXXXXXX"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded text-base transition-colors"
              >
                ☎ (XXX) XXX-XXXX
              </a>
            </div>

            {/* Service checkmarks */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                "✓ Local & Long-Distance",
                "✓ Commercial Moving",
                "✓ Specialty Moving",
                "✓ Junk Removal",
                "✓ Free Handyman",
              ].map((item) => (
                <span key={item} className="text-white/55 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-brand-beige-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-3">
              What We Do
            </span>
            <h2
              className="text-brand-charcoal"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
            >
              Every Moving Service You Need
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">
              From a studio apartment to a full warehouse — Placid Transit has the right solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl border ${
                  i === 2
                    ? "bg-brand-black text-white border-brand-black"
                    : "bg-white text-brand-charcoal border-gray-100 hover:border-brand-red/20"
                }`}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3
                  className={`font-semibold text-lg mb-2 ${i === 2 ? "text-white" : "text-brand-charcoal"}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.shortTitle}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${i === 2 ? "text-white/65" : "text-gray-500"}`}>
                  {service.tagline}
                </p>
                {service.slug === "handyman-services" && (
                  <span className="inline-block text-xs font-bold tracking-widest uppercase bg-brand-red text-white px-2.5 py-1 rounded mb-3">
                    FREE
                  </span>
                )}
                <div
                  className={`text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all ${
                    i === 2 ? "text-brand-red" : "text-brand-red"
                  }`}
                >
                  Learn more →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-brand-charcoal/20 hover:border-brand-red text-brand-charcoal hover:text-brand-red font-medium px-6 py-3 rounded text-sm transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-3">
              Why Placid Transit
            </span>
            <h2
              className="text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
            >
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="border border-white/8 rounded-xl p-7 hover:border-brand-red/40 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3
                  className="text-white font-semibold text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-3">
              How It Works
            </span>
            <h2
              className="text-brand-charcoal"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
            >
              Your Move in 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                num: "01",
                title: "Get a Free Quote",
                desc: "Fill out our quick form or call us. You'll get a clear, honest estimate — no hidden fees.",
              },
              {
                num: "02",
                title: "We Handle Everything",
                desc: "Our crew arrives on time, fully equipped. Packing, loading, transport — all handled with care.",
              },
              {
                num: "03",
                title: "Move In & Settle",
                desc: "We unload, assemble furniture, mount your TV, and hang your art. You're home on day one.",
              },
            ].map((step, i) => (
              <div key={step.num} className="relative text-center">
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#C41E3A", opacity: 0.8 }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-brand-charcoal font-semibold text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-brand-red/40 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded text-base transition-colors"
            >
              Start Your Move Today →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-3">
              Reviews
            </span>
            <h2
              className="text-brand-charcoal"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-brand-beige-light rounded-xl p-8 border border-brand-beige-dark"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-brand-red text-base">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&quot;{t.text}&quot;</p>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-3">
            Where We Serve
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
          >
            Chicago & Beyond
          </h2>
          <p className="text-white/50 text-sm mb-10 max-w-md mx-auto">
            Based in the Chicago metro — serving all suburbs plus Indiana and Wisconsin border areas.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {areas.map((area) => (
              <span
                key={area}
                className="text-xs text-white/60 border border-white/10 hover:border-brand-red/50 hover:text-white/80 px-4 py-2 rounded-full transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #C41E3A 0%, #9B1830 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Ready to Move?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a free, no-obligation quote in minutes. We respond fast — usually within the hour.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-red font-semibold px-8 py-4 rounded text-base hover:bg-brand-beige transition-colors"
            >
              Get a Free Quote →
            </Link>
            <a
              href="tel:XXXXXXXXXX"
              className="border-2 border-white/50 hover:border-white text-white font-medium px-8 py-4 rounded text-base transition-colors"
            >
              ☎ Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
