import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="mb-4"
      />
      <h3 className="text-[20px] md:text-[18px] font-semibold mb-2">{title}</h3>
      <p
        className="text-[18px] md:text-[16px] text-text"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}
