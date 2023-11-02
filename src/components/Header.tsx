import { Button } from "@nextui-org/react";
import Image from "next/image";
import header from "public/assets/header.jpg";

const Header = () => {
  return (
    <header className="flex flex-col-reverse md:flex-row">
      <div className="w-full lg:w-1/2 xl:w-1/3 h-[400px] md:h-[600px] bg-green-900 text-white flex flex-col items-center justify-center p-10 text-justify">
        <h1 className="text-3xl mb-6 text-warning-300">WELCOME EUCOFFEE</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
          quibusdam excepturi soluta ab eius dolorem libero voluptatibus error
          inventore tenetur architecto corporis quisquam ipsam quaerat minus
          odio magnam magni quis rerum officiis maiores ipsum.
        </p>
        <br />
        <p>
          Error ratione ad in molestiae consequatur laboriosam doloremque
          molestias explicabo, culpa mollitia iure quos earum sapiente, numquam
          alias cumque quae hic necessitatibus, unde rem reprehenderit illo
        </p>
        <Button
          variant="bordered"
          color="warning"
          className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 py-4 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/20 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 mt-8 bg-warning-500 text-teal-50 font-semibold"
        >
          Explore Now
        </Button>
      </div>
      <div className="relative h-[400px] md:h-[600px] w-full lg:1/2 xl:w-2/3">
        <Image src={header} alt="header" fill className="" />
      </div>
    </header>
  );
};

export default Header;
