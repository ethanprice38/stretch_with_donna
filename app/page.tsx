import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-center flex items-center justify-center min-h-[35vh]">
        <div
          className="absolute inset-0 bottom-10 top-10 svgdots"
          aria-hidden="true"
        ></div>
        <div className="relative max-w-5xl mt-0 mx-auto px-4">
          <p className="text-center text-text text-xl tracking-normal">
            You're on your way to a more flexible you!
          </p>
          <h1 className="mt-2 text-center text-text font-semibold font-playfair text-3xl tracking-wider">
            Stretch with Donna
          </h1>
          <p className="mt-1 text-center text-black font-inter font-light italic text-md tracking-tight">
            In-Home Maryland Stretchologist
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-0 flex justify-center">
        <div className="bg-pink-100 border-2 border-pink-200 w-full max-w-xs rounded-lg p-3 flex flex-col items-center text-center">
          <p className="text-text font-semibold">
            At Stretch with Donna, we come to you!
          </p>
          <button className="mt-2 bg-pink-200 border-2 border-pink-300 text-charcoal px-6 py-3 rounded-full shadow-sm hover:shadow-md">
            Book a <strong>Free</strong> Consultation!
          </button>
        </div>
      </div>
      <hr className="w-[80%] mx-auto mt-12 border-t border-gray-300" />
      {/* Services Grid */}
      <section className="mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* Icon placeholder */}
                </div>
              </div>
              <h3 className="text-lg text-center font-bold mb-2">
                Introductory Screening
              </h3>
              <p className="text-center text-sm text-text">
                [DESCRIPTION HERE!]
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* Icon placeholder */}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">
                Custom Stretch Program Design
              </h3>
              <p className="text-center text-sm text-text">
                [DESCRIPTION HERE!]
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* Icon placeholder */}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">
                Your In-Home Stretch Session{" "}
              </h3>
              <p className="text-center text-sm text-text">
                [DESCRIPTION HERE!]
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-[80%] mx-auto mt-12 border-t border-gray-300" />
      <section className="mt-12">
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
      <hr className="w-[80%] mx-auto mt-12 border-t border-gray-300" />
      <section className="mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Contact Us
          </h2>
          <p className="text-center mt-0">
            alkadlkakdalkdsjk
            <br />
            kdaljkdsjalkd
          </p>
        </div>
      </section>
    </>
  );
}
