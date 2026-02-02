import Link from "next/link";
import React from "react";

const Hero = ({ page }) => {
  return (
    <section
      id="hero"
      className="flex h-[50vh] pt-20 bg-[url(https://placehold.co/768x512)] bg-cover"
    >
      <div className="w-[95%] m-auto text-center">
        <h1 className="p-4 m-4 text-4xl">{page}</h1>
        {/* <p className="p-4 m-4">
          Talk about the other services they do with keywords and locations
          where they serve. Try to make this 2-3 lines tall.
        </p>
        <Link href="#" className="inline-block p-4 m-4 bg-black text-white">
          Main Call to Action
        </Link> */}
      </div>
    </section>
  );
};

export default Hero;
