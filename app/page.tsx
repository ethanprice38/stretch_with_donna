import Image from "next/image";
import FAQPart from "@/components/FAQPart";
import ServiceCard from "@/components/ServiceCard";

const faqData = [
  {
    question: "What is Stretch with Donna?",
    answer:
      "Stretch with Donna is an in-home stretch service that helps you improve flexibility and mobility.",
  },
  {
    question: "How does the process work?",
    answer:
      "We start with a free introductory screening, followed by a custom stretch program design, and then we come to your home for the stretch session.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-primary w-full bg-center flex items-center justify-center px-4 py-8"
      >
        <div className="relative max-w-5xl px-4 py-8 mx-auto">
          <p className="text-center text-text text-[16px] tracking-normal">
            You're on your way to a more flexible you!
          </p>
          <h1 className="mt-2 text-center text-text font-semibold font-playfair text-[32px] tracking-wider">
            Stretch with Donna
          </h1>
          <h3 className="text-center text-black font-inter font-light italic text-[20px] tracking-tight">
            In-Home Maryland Stretchologist
          </h3>
        </div>
      </section>

      <hr className="w-[80%] mx-auto border-t border-gray-300" />

      {/* CTA Section */}
      <section className="flex max-w-[100%] max-h-[90%] justify-center px-4 py-4">
        <div className="bg-pink-100 border-2 border-pink-200 max-w-[70%] md:max-w-[50%] max-h-[40%] gap-y-3 rounded-lg p-4 flex flex-col items-center text-center">
          <p className="text-text text-[16px] font-semibold">
            At Stretch with Donna, we start with a free introductory screening
            to ensure that our services are a good fit for you.
          </p>
          <button
            id="services"
            className="mt-2 p-4  max-w-[80%] max-h-[70%] bg-pink-300 border-2 border-pink-400 text-charcoal text-[16px] text-center rounded-full shadow-sm hover:shadow-md hover:cursor-pointer"
          >
            Book your <strong>Free</strong> Consultation!
          </button>
        </div>
      </section>

      <hr className="w-[80%] mx-auto border-t border-gray-300" />

      {/* Services Grid */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-[24px] font-semibold mb-4">
            From First Call to Flexibility: Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <ServiceCard
              image="/introscreening.png"
              title="Step 1: Free Introductory Screening"
              description="Your first step is to book a free introductory screening: a free, no-obligation consultation where we assess your flexibility and mobility goals and needs. <br/><br/>You may be asked questions regarding pain, range of motion, past surgeries, medications, and any other conditions you believe might affect the way we deliver our services. <br/><br/> This is a great time to ask any questions you may have about our services, and to see if we are a good fit for you!"
            />
            {/* Service Card 2 */}
            <ServiceCard
              image="/stretchplan.png"
              title="Custom Stretch Program Design"
              description="[DESCRIPTION HERE!]"
            />
            {/* Service Card 3 */}
            <ServiceCard
              image="/inhomestretch.png"
              title="Your In-Home Stretch Session"
              description="[DESCRIPTION HERE!]"
            />
          </div>
        </div>
      </section>
      <hr id="faq" className="w-[80%] mx-auto border-t border-gray-300" />
      {/*FAQ section*/}
      <FAQPart items={faqData} />
      <hr id="about" className="w-[80%] mx-auto border-t border-gray-300" />
      {/* About Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">
            About Stretch With Donna
          </h2>
          <p className="text-center mt-4">
            alkadlkakdalkdsjk
            <br />
            kdaljkdsjalkd
          </p>
        </div>
      </section>

      <hr id="contact" className="w-[80%] mx-auto border-t border-gray-300" />

      {/* Contact Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-center">
            alkadlkakdalkdsjk
            <br />
            kdaljkdsjalkd
          </p>
        </div>
      </section>
    </>
  );
}
