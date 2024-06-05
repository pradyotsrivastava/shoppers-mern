import React from "react";
import { FaInstagram, FaPhoneAlt, FaHome } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
// import {} from "react-icons/fa6";
import { MdOutlineCollections } from "react-icons/md";
import { CiMail } from "react-icons/ci";
// import { } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 text-center lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks :</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center tex-2xl gap-4">
          <Link
            to={"https://www.linkedin.com/in/pradyotsrivastava/"}
            target="_blank"
          >
            <FaLinkedin className=" hover:text-blue-700  " />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/pradyotsrivastava/"}
            target="_blank"
          >
            <FaGithub className="   hover:text-blue-700  " />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/pradyotsrivastava/"}
            target="_blank"
          >
            <MdOutlineCollections className="hover:text-blue-700  " />
          </Link>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              Shoppers💕
            </h6>
            <p>
              One stop shop for all tech gadgets😘 <br /> & your favorite items
              😉
            </p>
          </div>
          <div className="container mx-auto  text-zinc-700">
            <h6 className="mb-4 flex text-black text-center justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <div className="flex gap-4">
              <div className="grid w-30">
                <Link
                  to={"/"}
                  className="hover:underline hover:text-blue-700  "
                >
                  About
                </Link>
                <Link
                  to={"/"}
                  className="mt-1 hover:underline hover:text-blue-700  "
                >
                  Policies
                </Link>
                <Link
                  to={"/"}
                  className="mt-1 hover:underline hover:text-blue-700  "
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Connect with Me
            </h6>
            <div className="flex gap-4">
              <div className="grid w-30">
                <Link
                  to={"https://www.linkedin.com/in/pradyotsrivastava/"}
                  target="_blank"
                >
                  <div className="flex  hover:underline hover:text-blue-700 gap-2">
                    <FaLinkedin className="h-4 w-4 mt-1 " />
                    <p>Linked In</p>
                  </div>
                </Link>
                <Link
                  to={"https://github.com/pradyotsrivastava/"}
                  target="_blank"
                >
                  <div className="flex mt-1 hover:underline hover:text-blue-700 gap-2">
                    <FaGithub className="h-4 w-4 mt-1" />
                    <p>Github</p>
                  </div>
                </Link>
                <Link
                  to={"https://github.com/pradyotsrivastava/pradyot.portfolio"}
                  target="_blank"
                >
                  <div className="flex mt-1 hover:underline hover:text-blue-700 gap-2">
                    <MdOutlineCollections className="h-4 w-4 mt-1 " />
                    <p>Portfolio</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <div className="grid gap-2">
              <div className="flex">
                <FaPhoneAlt className="h-4 w-4 mt-1 mr-2" />
                <p>+91-83031-80457</p>
              </div>
              <div className="flex">
                <CiMail className="h-4 w-4 mt-2 mr-2" />
                <p>pradyotsrivastava93@gmail.com</p>
              </div>
              <div className="flex  gap-2">
                <FaHome className="h-4 w-4 mt-1 " />
                <p>Prayagraj, Uttar Pradesh - 211011</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-zinc-300 p-6 grid text-center ">
        <Link to={"/sign-up"}>
          <button className="hover:scale-110 mx-auto  transition-all hover:underline hover:text-zinc-800 text-zinc-600 font-bold ml-1 ">
            Pradyot Srivastava
          </button>
        </Link>
        <span>© All Rights Reserved, 2024 </span>
      </div>
    </footer>
  );
};

export default Footer;
