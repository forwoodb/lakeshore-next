import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      // className="flex h-[70vh] pt-20 bg-cover"
      className="flex relative h-[85vh] bg-[url('/images/sleeping_bear.webp')] bg-cover"
      // className="flex h-[70vh] pt-20 bg-[url(https://placehold.co/768x512)] bg-cover"
    >
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
