"use client";

import { useState } from "react";

type OptionCard = { label: string; icon: string; value: string };

interface Step {
  id: string;
  type: "choice" | "multichoice" | "text" | "tel" | "email" | "date";
  question: string;
  hint?: string;
  options?: OptionCard[];
  placeholder?: string;
  required?: boolean;
}

const steps: Step[] = [
  {
    id: "service",
    type: "choice",
    question: "What type of move do you need?",
    hint: "Select the one that best describes your situation.",
    options: [
      { label: "Local Move", icon: "🏠", value: "Local Move" },
      { label: "Long-Distance", icon: "🚛", value: "Long-Distance Move" },
      { label: "Commercial", icon: "🏢", value: "Commercial Move" },
      { label: "Specialty Item", icon: "🎹", value: "Specialty Move" },
      { label: "Junk Removal", icon: "🗑️", value: "Junk Removal" },
      { label: "Packing Only", icon: "📦", value: "Packing & Unpacking" },
    ],
  },
  {
    id: "date",
    type: "date",
    question: "When are you planning to move?",
    hint: "Give us your best estimate — even a rough timeframe helps.",
    placeholder: "Select a date",
  },
  {
    id: "from",
    type: "text",
    question: "Where are you moving FROM?",
    hint: "City, zip code, or full address.",
    placeholder: "e.g. Chicago, IL 60601",
  },
  {
    id: "to",
    type: "text",
    question: "Where are you moving TO?",
    hint: "City, zip code, or full address.",
    placeholder: "e.g. Schaumburg, IL 60173",
  },
  {
    id: "size",
    type: "choice",
    question: "How big is your current space?",
    hint: "This helps us estimate the crew size and truck needed.",
    options: [
      { label: "Studio", icon: "🛏️", value: "Studio" },
      { label: "1 Bedroom", icon: "🛏️", value: "1 Bedroom" },
      { label: "2 Bedrooms", icon: "🛏️🛏️", value: "2 Bedrooms" },
      { label: "3 Bedrooms", icon: "🏡", value: "3 Bedrooms" },
      { label: "4+ Bedrooms", icon: "🏠", value: "4+ Bedrooms" },
      { label: "Office / Commercial", icon: "🏢", value: "Office/Commercial" },
    ],
  },
  {
    id: "special",
    type: "multichoice",
    question: "Any special items?",
    hint: "Select all that apply — these may require extra equipment.",
    options: [
      { label: "Piano", icon: "🎹", value: "Piano" },
      { label: "Pool Table", icon: "🎱", value: "Pool Table" },
      { label: "Safe / Vault", icon: "🔒", value: "Safe" },
      { label: "Fine Art", icon: "🖼️", value: "Fine Art" },
      { label: "None", icon: "✅", value: "None" },
    ],
  },
  {
    id: "packing",
    type: "choice",
    question: "Do you need packing services?",
    hint: "We can pack everything, just fragile items, or nothing — your choice.",
    options: [
      { label: "Yes, pack everything", icon: "📦", value: "Full Packing" },
      { label: "Just fragile items", icon: "🫙", value: "Fragile Packing" },
      { label: "No, I'll pack myself", icon: "💪", value: "No Packing" },
    ],
  },
  {
    id: "name",
    type: "text",
    question: "What's your name?",
    placeholder: "Your full name",
  },
  {
    id: "phone",
    type: "tel",
    question: "Best phone number to reach you?",
    placeholder: "(XXX) XXX-XXXX",
  },
  {
    id: "email",
    type: "email",
    question: "And your email address?",
    hint: "We'll send your quote confirmation here.",
    placeholder: "you@example.com",
  },
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  const currentValue = answers[step.id];

  const handleChoice = (value: string) => {
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
    setTimeout(() => goNext(), 280);
  };

  const handleMultiChoice = (value: string) => {
    setAnswers((prev) => {
      const existing = (prev[step.id] as string[]) || [];
      if (value === "None") return { ...prev, [step.id]: ["None"] };
      const withoutNone = existing.filter((v) => v !== "None");
      const updated = withoutNone.includes(value)
        ? withoutNone.filter((v) => v !== value)
        : [...withoutNone, value];
      return { ...prev, [step.id]: updated.length ? updated : [] };
    });
  };

  const handleText = (value: string) => {
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
  };

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
    else handleSubmit();
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const canAdvance = () => {
    const val = answers[step.id];
    if (!val) return false;
    if (Array.isArray(val)) return val.length > 0;
    return val.trim().length > 0;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">✅</div>
          <h2
            className="text-brand-charcoal text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Quote Request Sent!
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Thank you, <strong>{answers.name as string}</strong>! We received your request and will get back to you within the hour during business hours.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            In the meantime, feel free to call us directly at{" "}
            <a href="tel:XXXXXXXXXX" className="text-brand-red font-semibold">
              (XXX) XXX-XXXX
            </a>
          </p>
          <a
            href="/"
            className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-7 py-3 rounded text-base transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col">
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200">
        <div
          className="h-full bg-brand-red transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step counter */}
      <div className="px-6 pt-4 text-center">
        <span className="text-xs text-gray-400 font-medium tracking-wide">
          {currentStep + 1} of {steps.length}
        </span>
      </div>

      {/* Question area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-xl">
          {/* Question */}
          <h2
            className="text-brand-charcoal text-2xl sm:text-3xl mb-2 text-center"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.25" }}
          >
            {step.question}
          </h2>
          {step.hint && (
            <p className="text-gray-400 text-sm text-center mb-8">{step.hint}</p>
          )}
          {!step.hint && <div className="mb-8" />}

          {/* Choices */}
          {step.type === "choice" && step.options && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {step.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleChoice(opt.value)}
                  className={`flex flex-col items-center gap-2 p-5 rounded-xl border-2 font-medium text-sm transition-all ${
                    currentValue === opt.value
                      ? "border-brand-red bg-brand-red/5 text-brand-red"
                      : "border-gray-200 hover:border-brand-red/40 text-brand-charcoal hover:bg-gray-50"
                  }`}
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Multi-choices */}
          {step.type === "multichoice" && step.options && (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {step.options.map((opt) => {
                  const selected = ((currentValue as string[]) || []).includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleMultiChoice(opt.value)}
                      className={`flex flex-col items-center gap-2 p-5 rounded-xl border-2 font-medium text-sm transition-all ${
                        selected
                          ? "border-brand-red bg-brand-red/5 text-brand-red"
                          : "border-gray-200 hover:border-brand-red/40 text-brand-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={goNext}
                  disabled={!canAdvance()}
                  className="bg-brand-red disabled:opacity-40 hover:bg-brand-red-dark text-white font-semibold px-10 py-3.5 rounded text-base transition-colors"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Text / email / tel / date inputs */}
          {["text", "tel", "email", "date"].includes(step.type) && (
            <div className="flex flex-col gap-5">
              <input
                type={step.type}
                value={(currentValue as string) || ""}
                onChange={(e) => handleText(e.target.value)}
                placeholder={step.placeholder}
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && goNext()}
                className="w-full border-0 border-b-2 border-gray-300 focus:border-brand-red text-brand-charcoal text-xl py-3 bg-transparent outline-none transition-colors placeholder:text-gray-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
                autoFocus
              />
              <div className="flex justify-center">
                <button
                  onClick={goNext}
                  disabled={!canAdvance()}
                  className="bg-brand-red disabled:opacity-40 hover:bg-brand-red-dark text-white font-semibold px-10 py-3.5 rounded text-base transition-colors"
                >
                  {currentStep === steps.length - 1
                    ? submitting
                      ? "Sending…"
                      : "Submit Request →"
                    : "Continue →"}
                </button>
              </div>
              <p className="text-center text-gray-400 text-xs">
                Press <kbd className="border border-gray-300 px-1.5 py-0.5 rounded text-xs">Enter</kbd> to continue
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Back button */}
      {currentStep > 0 && (
        <div className="text-center pb-8">
          <button
            onClick={goBack}
            className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
