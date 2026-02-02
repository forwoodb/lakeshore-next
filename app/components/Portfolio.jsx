import Image from "next/image";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-8">
      <div className="w-[95%] m-auto">
        <h2 className="text-2xl m-auto">Projects/Portfolio</h2>
        <div className="gallery grid gap-y-4 md:grid-cols-2 gap-x-4 lg:grid-cols-3">
          <Image
            src="https://placehold.co/300x200"
            alt=""
            width={300}
            height={200}
            unoptimized
            className="w-full"
          />
          <Image
            src="https://placehold.co/300x200"
            alt=""
            width={300}
            height={200}
            unoptimized
            className="w-full"
          />
          <Image
            src="https://placehold.co/300x200"
            alt=""
            width={300}
            height={200}
            unoptimized
            className="w-full"
          />
          <Image
            src="https://placehold.co/300x200"
            alt=""
            width={300}
            height={200}
            unoptimized
            className="w-full"
          />
          <Image
            src="https://placehold.co/300x200"
            alt=""
            width={300}
            height={200}
            unoptimized
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
