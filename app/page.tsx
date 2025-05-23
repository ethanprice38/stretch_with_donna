import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background mt-15 pt-5 min-h-screen">
      <p className="text-center text-text text-xl tracking-tight">
        You're on your way to a more flexible you!
      </p>
      <h1 className="mt-2 text-center text-[#264D00] font-semibold text-3xl tracking-wider">
        Stretch with Donna
      </h1>
      <p className="text-center text-text font-light italic text-md tracking-tight">
        In-Home Maryland Stretchologist
      </p>
      <div className="bg-[#8AAE7F] outline-accent outline-2 mx-auto mt-2 w-1/2 rounded-lg p-3 flex flex-col items-center justify-center">
        <p>At Stretch with Donna, we come to you!</p>
        <a className="text-text mt-2">Click here to book!</a>
      </div>
    </div>
  );
}
