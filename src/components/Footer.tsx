import Link from "next/link";

const serviceLinks = [
  { href: "/services/local-moving", label: "Local Moving" },
  { href: "/services/regional-moving", label: "Regional Moving" },
  { href: "/services/commercial-moving", label: "Commercial Moving" },
  { href: "/services/specialty-moving", label: "Specialty Moving" },
  { href: "/services/packing-unpacking", label: "Packing & Unpacking" },
  { href: "/services/demolition-junk-removal", label: "Junk Removal" },
  { href: "/services/handyman-services", label: "Handyman Services" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-brand-red rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base" style={{ fontFamily: "serif" }}>PT</span>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-semibold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Placid Transit</span>
                <span className="block text-white/40 text-[0.62rem] tracking-widest uppercase">LLC</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Professional moving services across Chicago, IL and surrounding areas. Trusted, careful, and always on time.
            </p>
            <a href="tel:6198150443" className="text-brand-beige font-semibold text-sm hover:text-white transition-colors">
              ☎ (619) 815-0443
            </a>
            <p className="text-white/40 text-xs mt-1">Available 7 days a week</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-brand-beige transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-brand-beige transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas & Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Service Areas</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Chicago, IL", "Schaumburg", "Naperville", "Evanston", "Oak Park", "Palatine", "Indiana border", "Wisconsin border"].map((area) => (
                <span key={area} className="text-xs text-white/50 border border-white/10 px-2.5 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Placid Transit LLC. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-white/30 text-xs hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
