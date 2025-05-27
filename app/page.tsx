import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-center pt-16 min-h-[30vh]">
        <div className="absolute inset-0 svgdots" aria-hidden="true"></div>
        <div className="relative max-w-5xl mx-auto px-4">
          <p className="text-center text-text text-xl tracking-tight">
            You're on your way to a more flexible you!
          </p>
          <h1 className="mt-2 text-center text-text font-semibold font-playfair text-3xl tracking-wider">
            Stretch with Donna
          </h1>
          <p className="mt-1 text-center text-text font-inter font-light italic text-md tracking-tight">
            In-Home Maryland Stretchologist
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-8 flex justify-center">
        <div className="bg-pink-100 w-full max-w-xs rounded-lg p-3 flex flex-col items-center text-center border-2 border-transparent transition-all duration-200 ease-in-out hover:border-pink-200">
          <p className="text-text font-medium">
            At Stretch with Donna, we come to you!
          </p>
          <button className="mt-2 bg-pink-200 text-charcoal px-6 py-3 rounded-full shadow-sm hover:shadow-md">
            Book a Session
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <section className="mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-6">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  {/* Icon placeholder */}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Service 1</h3>
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
              <h3 className="text-lg font-bold mb-2">Service 2</h3>
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
              <h3 className="text-lg font-bold mb-2">Service 3</h3>
              <p className="text-center text-sm text-text">
                [DESCRIPTION HERE!]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
