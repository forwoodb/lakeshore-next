import Image from "next/image";
// import logo from "@/public/images/your-logo-black.webp";

const Footer = () => {
  return (
    <footer className="h-20 bg-gray-100">
      <div className="flex justify-between w-[95%] h-full m-auto">
        {/* <a className="my-auto" href="index.html">
          <Image
            className="light"
            src={logo}
            alt="Logo"
            width={70}
            height={45}
            unoptimized
          />
        </a> */}
        <p className="m-auto">&copy; 2026</p>
        <div className="flex my-auto">
          <a target="_blank" href="https://www.facebook.com/" className="p-2">
            <Image
              src="/images/facebook.webp"
              alt="Facebook"
              height={24}
              width={24}
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/" className="p-2">
            <Image
              src="/images/instagram.webp"
              alt="Instagram"
              height={24}
              width={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
