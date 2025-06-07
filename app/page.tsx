import Image from "next/image";
import FAQPart from "@/components/FAQPart";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const faqData = [
  {
    question: "What is Stretch with Donna?",
    answer:
      "Stretch with Donna is a mobile in-home service that uses assisted stretching to help you move better, feel looser, and stay flexible.",
  },
  {
    question: "How does the process work?",
    answer:
      "We start with a free introductory screening, then your program is designed, and finally we come to your home for the stretch session.",
  },
  {
    question: "Is assisted stretching right for me?",
    answer:
      "Everyone can benefit from assisted stretching. Whether you're an athlete, farmer, office worker, or just want to feel better, our sessions are gentle, guided, and adapted to your flexibility, injury history, and comfort level.",
  },
  {
    question: "I'm injured, can I still do this?",
    answer:
      "In most cases, yes. We'll discuss your condition during the free consultation and tailor your sessions accordingly. Always consult your doctor if unsure.",
  },
  {
    question: "Is this like physical or massage therapy?",
    answer:
      "Not exactly, but it can complement them. Assisted stretching is a hands-on service focused on improving flexibility and mobility through.",
  },
  {
    question: "What should I wear for my stretch session?",
    answer:
      "Comfortable, flexible, fitted clothing like athletic wear is best. Avoid restrictive or bulky clothing.",
  },
  {
    question: "How long is each session?",
    answer: "Most sessions last between 45-60 minutes, depending on your plan.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "Nope! We bring everything. Just make sure there is a small, open space where we can work comfortably.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Maryland. <br/><br/>If you are located in Virginia, Washington D.C., or another nearby area, please contact us to see if we can accommodate you.",
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
        <div className={`relative max-w-5xl px-4 py-8 mx-auto`}>
          <p className="text-center text-text text-[20px] tracking-normal">
            You&#39;re on your way to a more flexible you!
          </p>
          <h1
            className={`${quicksand.className} text-center text-text font-semibold font-playfair text-[40px] tracking-wider`}
          >
            Stretch with Donna
          </h1>
          <h3 className="text-center text-black font-inter font-light italic text-[24px] tracking-tight">
            In-Home Maryland Stretchologist
          </h3>
        </div>
      </section>

      <hr className="w-[80%] mx-auto border-t border-gray-300" />

      {/* CTA Section */}
      <section className="flex max-w-[100%] max-h-[90%] justify-center px-4 py-4">
        <div className="bg-pink-100 border-2 border-pink-200 max-w-[70%] md:max-w-[50%] max-h-[40%] gap-y-3 rounded-lg p-4 flex flex-col items-center text-center">
          <p className="text-text text-[18px]">
            Ready to feel looser, lighter, and more mobile?
            <br />
            <br />
            Book your free, no-obligation consultation to discuss your goals and
            your personalized plan.
          </p>
          <a
            id="services"
            className="mt-2 p-4 tracking-wider max-w-[80%] max-h-[70%] bg-pink-300 border-2 border-pink-400 text-black text-[18px] text-center rounded-full shadow-sm hover:shadow-md hover:cursor-pointer"
            href="https://scheduler.plannieapp.com/?name=stretchwithdonna#!/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a free consultation with Stretch with Donna"
          >
            Book your <strong>Free</strong> Consultation!
          </a>
        </div>
      </section>

      <hr className="w-[80%] mx-auto border-t border-gray-300" />

      {/* Services Grid */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-[24px] font-semibold mb-6">
            From First Call to Flexibility: Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <ServiceCard
              image="/introscreening.png"
              title="Step 1: Free Introductory Screening"
              description="Your first step is a free, no-obligation consultation where we get to know your goals and movement history. <br/><br/>We'll ask about pain, past injuries, surgeries, or conditions that may affect your stretching experience. This ensures your plan is safe and personalized.<br/><br/>It's also your chance to ask questions and see if we're a great fit!"
            />
            {/* Service Card 2 */}
            <ServiceCard
              image="/stretchplan.png"
              title="Step 2: Custom Stretch Program Design"
              description="After your consultation, we design a personalized stretch plan based on your needs, pain points, and lifestyle.<br/><br/>This plan evolves over time and targets your flexibility, mobility, recovery, and injury prevention goals."
            />
            {/* Service Card 3 */}
            <ServiceCard
              image="/inhomestretch.png"
              title="Step 3: Your In-Home Stretch Session"
              description="We come to you! No travel, no stress, just a professional, hands-on stretching session.<br/><br/>Each session begins with a quick check-in to make sure your plan still aligns with your goals. Then, we guide you through targeted assisted stretches to relieve tightness, increase range of motion, and improve how you move and feel.<br/><br/>You’ll wrap up with a takeaway stretch to continue at home; your progress doesn’t stop when the session ends."
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
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <div className="w-[150px] h-[150px] md:w-[300px] md:h-[130px] rounded-full overflow-hidden border-2 border-pink-300">
            <Image
              src="/owner.jpg"
              alt="Donna, owner of Stretch with Donna"
              width={300}
              height={130}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center md:text-left mb-2">
              About the Owner
            </h2>
            <p className="text-center md:text-left text-text">
              Donna is a Licensed Stretch Practitioner with over 7 years of
              experience in mobility and wellness training, including being a
              stretchologist and Zumba instructor. She founded Stretch with
              Donna to bring expert flexibility care into the homes of everyday
              people with no commute and no stress.
              <br />
              <br />
              Her approach blends technical skill and a deep understanding of
              the human body. Whether you&#39;re stiff, recovering from an
              injury, or want to feel better, Donna meets you where you are!
              <br />
              <br />
              She believes flexibility isn&#39;t a luxury, but a foundation for
              longevity and feeling good. And no, you do not need to be an
              athlete to benefit.
            </p>
          </div>
        </div>
      </section>

      <hr id="contact" className="w-[80%] mx-auto border-t border-gray-300" />

      {/* Contact Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
