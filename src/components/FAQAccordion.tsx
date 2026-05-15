"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-colors ${
            openIndex === i
              ? "border-brand-red/30 bg-white"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
          >
            <span
              className="font-semibold text-brand-charcoal text-base leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {faq.question}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                openIndex === i
                  ? "bg-brand-red text-white rotate-180"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              ↓
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
