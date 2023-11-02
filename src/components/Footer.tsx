import Image from "next/image";
import logo from "public/assets/icons/logo.svg";
import instagram from "public/assets/icons/instagram.svg";
import facebook from "public/assets/icons/facebook.svg";
import twitter from "public/assets/icons/twitter.svg";
import youtube from "public/assets/icons/youtube.svg";
import Link from "next/link";

const footerItems = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Products",
    href: "#",
  },
  {
    label: "Customers",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Help & Feedback",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="relative flex flex-col md:flex-row mt-20 p-8 shadow-5xl bg-footer-img bg-cover text-white">
      <div className="flex-1 space-y-5">
        <div className="flex items-center  ">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="bg-white rounded-full"
          />
          <p className="text-xl font-semibold ml-2  ">EUCOFFEE</p>
        </div>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          laboriosam temporibus veniam exercitationem maxime, delectus quaerat
          ut dicta voluptatem, consequuntur et saepe sequi obcaecati possimus
        </p>
        <div className="flex gap-3">
          <Link href="#">
            <Image
              src={instagram}
              width={30}
              height={30}
              alt="social"
              className="opacity-30 hover:opacity-100 transition-all"
            />
          </Link>

          <Link href="#">
            <Image
              src={facebook}
              width={30}
              height={30}
              alt="social"
              className="opacity-30 hover:opacity-100 transition-all"
            />
          </Link>

          <Link href="#">
            <Image
              src={twitter}
              width={30}
              height={30}
              alt="social"
              className="opacity-30 hover:opacity-100 transition-all"
            />
          </Link>

          <Link href="#">
            <Image
              src={youtube}
              width={30}
              height={30}
              alt="social"
              className="opacity-30 hover:opacity-100 transition-all"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 md:ms-20 my-10 md:my-0">
        <h2 className="text-2xl text-orange-500 mb-4 font-semibold">Pages</h2>
        <ul className="space-y-4 ">
          {footerItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-orange-400 transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl text-orange-500 font-semibold">Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit
          quibusdam nisi omnis quos eaque illum commodi fugit veritatis
          blanditiis explicabo at, harum libero quas minus earum, aut doloribus
        </p>
        <p className="text-orange-400">
          <span className="font-bold">Tel:</span> 02123124254
        </p>
        <p className="text-orange-400">
          <span className="font-bold ">E-mail:</span> eucoffee.info.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
