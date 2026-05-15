import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Placid Transit LLC moving services — pricing, process, service area, specialty items, and more.",
};

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of Chicago and its suburbs throughout Illinois, as well as the Indiana border areas (Hammond, Gary, Merrillville, etc.) and Wisconsin border areas (Kenosha, Racine, Pleasant Prairie, etc.).",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill out our online quote form or call us directly. We typically respond within the hour during business hours. For large or specialty moves, we may schedule a quick phone call to ensure we give you an accurate estimate.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "Never. The price we quote is the price you pay. We build everything into your estimate upfront — labor, truck, fuel, equipment, and materials.",
  },
  {
    question: "Do you offer same-day moves?",
    answer:
      "Yes, depending on availability. Call us directly for same-day or next-day service. We accommodate urgent moves whenever our schedule allows.",
  },
  {
    question: "Can you move pianos and pool tables?",
    answer:
      "Absolutely. Specialty items like grand pianos, upright pianos, slate pool tables, safes, and fine art require special equipment and training — and we have both. These moves are quoted separately.",
  },
  {
    question: "What is the free handyman service?",
    answer:
      "With every move, we include small handyman tasks at no extra charge: TV mounting, furniture assembly (IKEA and other brands), picture/artwork hanging, curtain rod installation, and shelf mounting. Just let us know what you need.",
  },
  {
    question: "Do you offer packing services?",
    answer:
      "Yes. We offer full-home packing, partial packing (specific rooms or fragile items only), and unpacking after delivery. Packing materials are included in the packing service quote.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand plans change. Please give us at least 48 hours notice for cancellations or reschedules to avoid any fees. Contact us as soon as you know and we'll work with you.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Placid Transit LLC is a registered and insured moving company. Your belongings are covered throughout the move.",
  },
  {
    question: "How far do you travel for a move?",
    answer:
      "We serve all of Illinois including Chicago and suburbs, plus Indiana and Wisconsin border areas. We do not currently offer moves outside this region.",
  },
  {
    question: "Can you handle commercial and office relocations?",
    answer:
      "Yes. We handle full office moves, retail relocations, and warehouse transfers. We can work after hours and on weekends to minimize business disruption. Contact us for a custom commercial quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check, and major credit/debit cards. Payment is typically collected after the move is complete and you're satisfied.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-red mb-4">
            FAQ
          </span>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            Everything you need to know about moving with Placid Transit LLC.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-brand-beige-light">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-brand-beige-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-brand-charcoal text-2xl mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-sm mb-7">
            We&apos;re happy to answer anything. Call us or fill out a quick contact form.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:6198150443"
              className="border border-brand-charcoal/25 hover:border-brand-red text-brand-charcoal hover:text-brand-red font-medium px-6 py-3 rounded text-sm transition-colors"
            >
              ☎ Call Us
            </a>
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
