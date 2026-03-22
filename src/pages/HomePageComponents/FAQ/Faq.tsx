import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy for unused products in original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3–7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping costs may vary based on location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You will receive a tracking link via email once your order is shipped.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className=" pb-14 px-5 md:px-12 lg:pb-20 lg:px-24 mx-auto grid lg:grid-cols-2 gap-10 items-start">

        <div>
          <h2 className="text-3xl font-bold mb-1">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mb-6">
            Find answers to common questions about our products, services, and policies.
          </p>

          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Ask A Question
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-4 text-gray-600 text-sm transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 py-2"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;