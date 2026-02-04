import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="flex relative h-[85vh]">
      {/* LCP IMAGE */}
      <Image
        src="/images/sleeping_bear.webp"
        alt="Sleeping Bear Dunes"
        fill
        priority
        quality={[25, 60, 75]}
        // quality={60}
        fetchPriority="high"
        className="object-cover"
      />
      <div className="background absolute w-full h-full bg-black opacity-70"></div>
      <div className="w-[95%] m-auto text-center z-1">
        <div className="text-wrapper w-175 m-auto">
          <h1 className="p-4 m-4 font-bold text-6xl text-white">
            Website and Web App Development
          </h1>
          <p className="p-4 m-4 text-xl text-white">
            No page builders or WordPress - We offer websites coded from scratch
            with superior results starting at $175/mo.
          </p>
          <Link
            href="#"
            className="inline-block p-4 m-4 hover:bg-slate-500 text-white border border-honolulu-blue rounded"
          >
            GET IN TOUCH!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
