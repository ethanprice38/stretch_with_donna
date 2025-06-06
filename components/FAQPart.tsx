"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQPartProps = {
  items: FAQItem[];
};

export default function FAQPart({ items }: FAQPartProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8 transition-all ease-in-out duration-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white mb-6 border-t-4 border-t-primary rounded-lg shadow-md transition-transform duration-200 hover:scale-102 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center text-left p-6 hover:cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span>{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pt-2 pb-4">
                    <p
                      className="text-text text-left"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
