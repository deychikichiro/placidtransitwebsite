import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Placid Transit LLC — a professional moving company serving Chicago, IL and surrounding areas with integrity, care, and expertise.",
};

const values = [
  {
    icon: "🤝",
    title: "Integrity First",
    desc: "We quote what we charge. No surprise fees, no hidden costs. What you see is what you get.",
  },
  {
    icon: "💪",
    title: "Work Ethic",
    desc: "Every move gets our full effort — from the first box to the last piece of furniture placed.",
  },
  {
    icon: "❤️",
    title: "We Actually Care",
    desc: "Your belongings matter to you — so they matter to us. We treat every item with genuine respect.",
  },
  {
    icon: "🗺️",
    title: "Community Rooted",
    desc: "We're local to Chicagoland. These are our streets, our neighborhoods. We take pride in serving them.",
  },
];

const stats = [
  { num: "500+", label: "Moves Completed" },
  { num: "7", label: "Days a Week" },
  { num: "3", label: "States Served" },
  { num: "100%", label: "Satisfaction Goal" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-4">
                About Us
              </span>
              <h1
                className="text-white mb-5"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                Moving Built on{" "}
                <span style={{ color: "#C41E3A" }}>Trust.</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed">
                Placid Transit LLC was founded with a clear mission: provide moving services that people can actually count on — reliable, careful, and honest from start to finish.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/8 rounded-xl p-6 text-center"
                >
                  <div
                    className="text-white font-bold text-3xl mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-white/45 text-xs tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-brand-beige-light">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-brand-charcoal text-3xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Story
          </h2>
          <div className="space-y-5 text-gray-600 text-base leading-relaxed">
            <p>
              Placid Transit LLC was born out of a simple frustration: moving companies that overpromise and underdeliver. Late arrivals, hidden fees, damaged items, unprofessional crews — we saw it all, and we knew there had to be a better way.
            </p>
            <p>
              So we built it. Placid Transit is the moving company we always wished existed — one where the team shows up on time, handles your belongings with real care, charges what they quoted, and stays until you&apos;re fully settled.
            </p>
            <p>
              Based in the Chicago metro area, we serve all of Chicagoland and extend into the Indiana and Wisconsin border regions. Our team handles everything from studio apartments to full corporate relocations, pianos to pool tables, and even light demolition and junk removal.
            </p>
            <p>
              We&apos;re also the only moving company that includes free handyman services with every move — because getting there isn&apos;t enough. We want you truly settled in from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-3">
              What We Stand For
            </span>
            <h2
              className="text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-white/8 rounded-xl p-7 hover:border-brand-red/30 transition-colors">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3
                  className="text-white font-semibold text-xl mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area coverage */}
      <section className="py-20 bg-brand-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-3">
            Where We Operate
          </span>
          <h2
            className="text-brand-charcoal mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
          >
            Tri-State Service Area
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Based in the Chicago metro area, Placid Transit serves all of Chicago and its suburbs, extending into the Indiana border region and the Wisconsin border areas that overlap with the Illinois metro.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              {
                state: "🏙️ Illinois",
                areas: ["Chicago (All Neighborhoods)", "Schaumburg", "Naperville", "Palatine", "Arlington Heights", "Evanston", "Oak Park", "And all suburbs"],
              },
              {
                state: "🌽 Indiana",
                areas: ["Hammond", "Gary", "East Chicago", "Whiting", "Merrillville", "Highland", "Munster", "Border metro areas"],
              },
              {
                state: "🌊 Wisconsin",
                areas: ["Kenosha", "Racine", "Pleasant Prairie", "Caledonia", "Bristol", "Salem", "Border communities", "Metro overlap areas"],
              },
            ].map((region) => (
              <div key={region.state} className="bg-white rounded-xl p-6 border border-brand-beige-dark">
                <h3 className="font-semibold text-brand-charcoal text-base mb-3">{region.state}</h3>
                <ul className="space-y-1.5">
                  {region.areas.map((a) => (
                    <li key={a} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="text-brand-red text-xs">•</span> {a}
                    </li>
                  ))}
                </ul>
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
            Ready to Move with Us?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free, no-obligation quote. We&apos;ll be in touch within the hour.
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
