import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See Placid Transit LLC's before-and-after moving transformations — residential, commercial, specialty, and junk removal projects.",
};

const projects = [
  {
    title: "3-Bedroom Home Move",
    location: "Schaumburg → Naperville",
    type: "Residential",
    beforeColor: "#f1f5f9",
    afterColor: "#F5EDE0",
    beforeContent: "📦 Packed & Staged",
    afterContent: "🏠 Unpacked & Settled",
  },
  {
    title: "Office Relocation",
    location: "Chicago Loop → Skokie",
    type: "Commercial",
    beforeColor: "#e2e8f0",
    afterColor: "#fef9f0",
    beforeContent: "🏢 Old Office",
    afterContent: "✅ New Office Running",
  },
  {
    title: "Grand Piano Move",
    location: "Evanston → Oak Park",
    type: "Specialty",
    beforeColor: "#f8fafc",
    afterColor: "#fff7f0",
    beforeContent: "🎹 Protected & Secured",
    afterContent: "🎶 Delivered Perfectly",
  },
  {
    title: "Garage Cleanout",
    location: "Palatine, IL",
    type: "Junk Removal",
    beforeColor: "#f1f5f9",
    afterColor: "#f0fdf4",
    beforeContent: "🗑️ Full Garage",
    afterContent: "✨ Clean & Clear",
  },
  {
    title: "Apartment Move + Setup",
    location: "Chicago, IL",
    type: "Residential + Handyman",
    beforeColor: "#fafafa",
    afterColor: "#F5EDE0",
    beforeContent: "📦 Empty Boxes",
    afterContent: "📺 TV Mounted & Home Ready",
  },
  {
    title: "Pool Table Relocation",
    location: "Arlington Heights → Buffalo Grove",
    type: "Specialty",
    beforeColor: "#f1f5f9",
    afterColor: "#fef9f0",
    beforeContent: "🎱 Disassembled",
    afterContent: "🎱 Reassembled & Level",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-4">
            Our Work
          </span>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Before & After Gallery
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            Swipe to see the transformation. Drag the slider to compare before and after on each project.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20 bg-brand-beige-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className="text-brand-charcoal font-semibold text-lg"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <span className="text-xs font-bold tracking-wider uppercase bg-brand-black text-white px-2.5 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">📍 {project.location}</p>
                </div>
                <div className="p-5">
                  <BeforeAfterSlider
                    beforeColor={project.beforeColor}
                    afterColor={project.afterColor}
                    beforeContent={project.beforeContent}
                    afterContent={project.afterContent}
                  />
                </div>
                <div className="px-5 pb-5">
                  <p className="text-gray-400 text-xs text-center">
                    ← Drag to compare Before & After →
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about real photos */}
          <div className="mt-12 text-center bg-brand-beige-dark rounded-xl p-8 border border-brand-beige-dark">
            <div className="text-3xl mb-3">📸</div>
            <h3
              className="text-brand-charcoal font-semibold text-lg mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Real Photos Coming Soon
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
              We&apos;re documenting our current projects with photos. Check back soon — or follow us on social media for real move photos from our team.
            </p>
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
            Your Move Could Be Next
          </h2>
          <p className="text-white/80 mb-8">
            Get your free quote today. We&apos;ll handle everything and make it look effortless.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-red font-semibold px-8 py-4 rounded text-base hover:bg-brand-beige transition-colors"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
