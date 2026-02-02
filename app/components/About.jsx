import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="w-[95%] m-auto">
        <h2 className="text-2xl">About Us</h2>
        <div className="md:flex grid gap-x-4 my-4">
          <Image
            src="https://placehold.co/300x200"
            alt=""
            width={300}
            height={200}
            unoptimized
            className="w-full"
          />
          <div className="about-text">
            <h3>Two-line headline describing your business</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              maxime officiis blanditiis provident nesciunt ullam a tempore ut,
              laborum similique aut laboriosam corporis voluptas voluptates nam
              ex soluta quae impedit.
            </p>
          </div>
        </div>
        <div className="md:flex grid gap-x-4 my-4 flex-row-reverse">
          <Image
            src="https://placehold.co/300x200"
            alt=""
            width={300}
            height={200}
            unoptimized
          />
          <div className="about-text">
            <h3>Two-line headline describing your business</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              maxime officiis blanditiis provident nesciunt ullam a tempore ut,
              laborum similique aut laboriosam corporis voluptas voluptates nam
              ex soluta quae impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
