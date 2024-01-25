import React from "react";
import { items } from "@/Navcontents/items";
import Link from "next/link";
import { footerLinks } from "./footerlinks";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(37, 37, 37, 0.1), rgba(37, 37, 37, 0.85)), url('https://shorturl.at/fqxJW')",
        backgroundSize: "cover",
      }}
    >
      <div className="xl:mx-20 w-full max-w-screen-xl">
        <h2 className="text-[#777B7E]  text-4xl px-4  py-20 tracking-wide font-serif">
          सो देख के ना हुई चेतन, मुढमति अभागि ।
          <br />
          अब लो सिखापन साथ जि, श्री महामत कहें पांउ लागि ।।
        </h2>
        <div className="sm:grid md:grid-cols-2  px-4 py-6 lg:py-8 xl:flex justify-between">
          <div className="mb-6">
            <h2 className="mb-6 text-lg font-semibold text-gray-300 uppercase ">
              Pranami Sampradaya
            </h2>
            <div className="flex flex-col lg:text-xl text-sm text-gray-400 tracking-wider ">
              <span>KMC, Bhaktapur, Nepal</span>
              <span>Phone: +977 01-000564</span>
              <span>Email: pranamisampradayanepal@gmail.com</span>
            </div>
          </div>

          <div className="mb-6 lg:ml-16">
            <h2 className="mb-6  text-lg font-semibold text-gray-300 uppercase ">
              Quick Links
            </h2>
            <ul className="text-gray-500 lg:text-xl text-sm dark:text-gray-400 font-medium">
              {items?.map((items, i) => (
                <li key={i} className="mb-4">
                  <Link href={items?.to} className=" hover:underline">
                    {items?.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 lg:ml-16">
            <h2 className="mb-6 text-lg font-semibold text-gray-300 uppercase ">
              Help center
            </h2>
            <ul className="text-gray-500 lg:text-xl text-sm dark:text-gray-400 font-medium">
              {footerLinks?.map((media) => (
                <li key={media?.id} className="mb-4">
                  <span className="hover:underline cursor-pointer  flex items-center gap-4">
                    {media?.icon} {media?.menu}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 lg:ml-16">
            <h2 className="mb-6 text-lg font-semibold text-gray-300 uppercase ">
              Legal
            </h2>
            <ul className="text-gray-500 lg:text-xl text-sm dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gray-900 flex items-center sm:justify-around justify-between  px-1">
        <span className=" text-sm sm:text-lg flex items-center text-gray-400  sm:text-center">
          <span className="lg:text-2xl sm:tracking-wider ">&copy;</span> Pranami
          Sampradaya Nepal
        </span>
        <span className=" text-sm sm:text-lg tracking-wider text-gray-400">
          Developer:Sworup Kc
        </span>
      </div>
    </footer>
  );
};

// adaksdj

export default Footer;
