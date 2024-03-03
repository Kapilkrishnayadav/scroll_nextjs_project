import Image from "next/image";
import rectangle from "../../public/Rectangle.svg";
import image1 from "../../public/img1.png";
import image2 from "../../public/img2.png";
import image3 from "../../public/img3.png";
import image4 from "../../public/img4.png";
import image5 from "../../public/img5.png";

import Scroll_right from "../components/Scroll_right/index";
import Static_left from "../components/Static_left/index";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [Imag, setImag] = useState("");

  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // document.getElementById("")
            if (entry.target.id == "first") {
              setImag("first");

              document.getElementById("scroll-1").style.backgroundColor =
                "#524949";
              document.getElementById("scroll-2").style.backgroundColor =
                "black";
              document.getElementById("scroll-3").style.backgroundColor =
                "black";
              document.getElementById("scroll-4").style.backgroundColor =
                "black";
              document.getElementById("scroll-5").style.backgroundColor =
                "black";
              document.getElementById("scroll-6").style.backgroundColor =
                "black";
            } else if (entry.target.id == "second") {
              setImag("second");
              document.getElementById("scroll-1").style.backgroundColor =
                "black";
              document.getElementById("scroll-2").style.backgroundColor =
                "#524949";
              document.getElementById("scroll-3").style.backgroundColor =
                "black";
              document.getElementById("scroll-4").style.backgroundColor =
                "black";
              document.getElementById("scroll-5").style.backgroundColor =
                "black";
              document.getElementById("scroll-6").style.backgroundColor =
                "black";
            } else if (entry.target.id == "third") {
              setImag("third");
              document.getElementById("scroll-1").style.backgroundColor =
                "black";
              document.getElementById("scroll-2").style.backgroundColor =
                "black";
              document.getElementById("scroll-3").style.backgroundColor =
                "#524949";
              document.getElementById("scroll-4").style.backgroundColor =
                "black";
              document.getElementById("scroll-5").style.backgroundColor =
                "black";
              document.getElementById("scroll-6").style.backgroundColor =
                "black";
            } else if (entry.target.id == "fourth") {
              setImag("fourth");
              document.getElementById("scroll-1").style.backgroundColor =
                "black";
              document.getElementById("scroll-2").style.backgroundColor =
                "black";
              document.getElementById("scroll-3").style.backgroundColor =
                "black";
              document.getElementById("scroll-4").style.backgroundColor =
                "#524949";
              document.getElementById("scroll-5").style.backgroundColor =
                "black";
              document.getElementById("scroll-6").style.backgroundColor =
                "black";
            } else if (entry.target.id == "fifth") {
              setImag("fifth");
              document.getElementById("scroll-1").style.backgroundColor =
                "black";
              document.getElementById("scroll-2").style.backgroundColor =
                "black";
              document.getElementById("scroll-3").style.backgroundColor =
                "black";
              document.getElementById("scroll-4").style.backgroundColor =
                "black";
              document.getElementById("scroll-5").style.backgroundColor =
                "#524949";
              document.getElementById("scroll-6").style.backgroundColor =
                "black";
            } else if (entry.target.id == "sixth") {
              setImag("sixth");
              document.getElementById("scroll-1").style.backgroundColor =
                "black";
              document.getElementById("scroll-2").style.backgroundColor =
                "black";
              document.getElementById("scroll-3").style.backgroundColor =
                "black";
              document.getElementById("scroll-4").style.backgroundColor =
                "black";
              document.getElementById("scroll-5").style.backgroundColor =
                "black";
              document.getElementById("scroll-6").style.backgroundColor =
                "#524949";
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    refs.current.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scroll_1 = () => {
    const element = document.getElementById("first");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const scroll_2 = () => {
    const element = document.getElementById("second");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const scroll_3 = () => {
    const element = document.getElementById("third");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const scroll_4 = () => {
    const element = document.getElementById("fourth");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const scroll_5 = () => {
    const element = document.getElementById("fifth");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const scroll_6 = () => {
    const element = document.getElementById("sixth");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <div className="bg-black flex flex-row justify-center items-center h-[100vh] ">
        {/* <Static_left/> */}
        <div className=" flex-row justify-center items-center hidden sm:flex ">
          <div className="space-y-7 mr-6">
            <div className="font-bold text-blue-700 text-2xl">UI UX Design</div>
            <div
              onClick={scroll_1}
              id="scroll-1"
              className="flex flex-col cursor-pointer p-2 rounded-3xl"
            >
              <div className="font-semibold text-white text-2xl">
                Mobile App
              </div>
              <div className="font-semibold text-white text-2xl">
                {" "}
                Development
              </div>
            </div>
            <div
              onClick={scroll_2}
              id="scroll-2"
              className="flex flex-col cursor-pointer p-2 rounded-3xl"
            >
              <div className="font-semibold text-white text-2xl">
                Full Stack
              </div>
              <div className="font-semibold text-white text-2xl">
                {" "}
                Engineering
              </div>
            </div>

            <div
              onClick={scroll_3}
              id="scroll-3"
              className="flex flex-col cursor-pointer p-2 rounded-3xl"
            >
              <div className="font-semibold text-white text-2xl">CMS</div>
              <div className="font-semibold text-white text-2xl">
                Development
              </div>
            </div>

            <div
              onClick={scroll_4}
              id="scroll-4"
              className="font-semibold text-white text-2xl cursor-pointer p-2 rounded-3xl"
            >
              Devops
            </div>
            <div
              onClick={scroll_5}
              id="scroll-5"
              className="font-semibold text-white text-2xl cursor-pointer p-2 rounded-3xl"
            >
              Iot
            </div>
            <div
              onClick={scroll_6}
              id="scroll-6"
              className="flex flex-col cursor-pointer p-2 rounded-3xl"
            >
              <div className="font-semibold text-white text-2xl">Product</div>
              <div className="font-semibold text-white text-2xl">
                Engioneering
              </div>
            </div>
          </div>
          {Imag === "first" && (
            <Image
              className=" hidden lg:block"
              src={rectangle}
              alt="Description of the image"
              width={330}
              height={330}
            />
          )}
          {Imag === "second" && (
            <Image
              className=" hidden lg:block"
              src={image1}
              alt="Description of the image"
              width={330}
              height={330}
            />
          )}
          {Imag === "third" && (
            <Image
              className=" hidden lg:block"
              src={image2}
              alt="Description of the image"
              width={330}
              height={330}
            />
          )}
          {Imag === "fourth" && (
            <Image
              className=" hidden lg:block"
              src={image3}
              alt="Description of the image"
              width={330}
              height={330}
            />
          )}
          {Imag === "fifth" && (
            <Image
              className="hidden lg:block"
              src={image4}
              alt="Description of the image"
              width={330}
              height={330}
            />
          )}
          {Imag === "sixth" && (
            <Image
              className=" hidden lg:block"
              src={image5}
              alt="Description of the image"
              width={330}
              height={330}
            />
          )}

          <div></div>
        </div>
        {/* <Scroll_right/> */}

        <div
          className="h-[66vh] overflow-y-auto ml-6"
          style={{ scrollbarWidth: "none" }}
        >
          <div
            id="first"
            ref={(el) => refs.current.push(el)}
            className="flex flex-col justify-center items-start space-y-10"
          >
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-[#FFFFFF] ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-[#FFFFFF]">Intuitive Interfaces</li>
                <li className="text-[#FFFFFF]">User_centric Design</li>
                <li className="text-[#FFFFFF]">Resposive Solutions</li>
                <li className="text-[#FFFFFF]">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#FFFFFF]">Prototyping Excellence</li>
                <li className="text-[#FFFFFF]">Accessibility Enhancement</li>
                <li className="text-[#FFFFFF]">Engaging Experiences</li>
                <li className="text-[#FFFFFF]">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div
            id="second"
            ref={(el) => refs.current.push(el)}
            className="flex flex-col justify-center items-start space-y-10 mt-28"
          >
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-[#FFFFFF] ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-[#FFFFFF]">Intuitive Interfaces</li>
                <li className="text-[#FFFFFF]">User_centric Design</li>
                <li className="text-[#FFFFFF]">Resposive Solutions</li>
                <li className="text-[#FFFFFF]">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#FFFFFF]">Prototyping Excellence</li>
                <li className="text-[#FFFFFF]">Accessibility Enhancement</li>
                <li className="text-[#FFFFFF]">Engaging Experiences</li>
                <li className="text-[#FFFFFF]">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div
            id="third"
            ref={(el) => refs.current.push(el)}
            className="flex flex-col justify-center items-start space-y-10 mt-28"
           >
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-[#FFFFFF] ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-[#FFFFFF]">Intuitive Interfaces</li>
                <li className="text-[#FFFFFF]">User_centric Design</li>
                <li className="text-[#FFFFFF]">Resposive Solutions</li>
                <li className="text-[#FFFFFF]">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#FFFFFF]">Prototyping Excellence</li>
                <li className="text-[#FFFFFF]">Accessibility Enhancement</li>
                <li className="text-[#FFFFFF]">Engaging Experiences</li>
                <li className="text-[#FFFFFF]">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div
            id="fourth"
            ref={(el) => refs.current.push(el)}
            className="flex flex-col justify-center items-start space-y-10 mt-28"
          >
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-[#FFFFFF] ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-[#FFFFFF]">Intuitive Interfaces</li>
                <li className="text-[#FFFFFF]">User_centric Design</li>
                <li className="text-[#FFFFFF]">Resposive Solutions</li>
                <li className="text-[#FFFFFF]">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#FFFFFF]">Prototyping Excellence</li>
                <li className="text-[#FFFFFF]">Accessibility Enhancement</li>
                <li className="text-[#FFFFFF]">Engaging Experiences</li>
                <li className="text-[#FFFFFF]">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div
            id="fifth"
            ref={(el) => refs.current.push(el)}
            className="flex flex-col justify-center items-start space-y-10 mt-28"
          >
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-[#FFFFFF] ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-[#FFFFFF]">Intuitive Interfaces</li>
                <li className="text-[#FFFFFF]">User_centric Design</li>
                <li className="text-[#FFFFFF]">Resposive Solutions</li>
                <li className="text-[#FFFFFF]">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#FFFFFF]">Prototyping Excellence</li>
                <li className="text-[#FFFFFF]">Accessibility Enhancement</li>
                <li className="text-[#FFFFFF]">Engaging Experiences</li>
                <li className="text-[#FFFFFF]">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div
            id="sixth"
            ref={(el) => refs.current.push(el)}
            className="flex flex-col justify-center items-start space-y-10 mt-28"
          >
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-[#FFFFFF] ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-[#FFFFFF]">Intuitive Interfaces</li>
                <li className="text-[#FFFFFF]">User_centric Design</li>
                <li className="text-[#FFFFFF]">Resposive Solutions</li>
                <li className="text-[#FFFFFF]">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-[#FFFFFF]">Prototyping Excellence</li>
                <li className="text-[#FFFFFF]">Accessibility Enhancement</li>
                <li className="text-[#FFFFFF]">Engaging Experiences</li>
                <li className="text-[#FFFFFF]">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
