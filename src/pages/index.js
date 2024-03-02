import Image from "next/image";
import rectangle from "../../public/Rectangle.svg";
import Scroll_right from "../components/Scroll_right/index";
import Static_left from "../components/Static_left/index";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <div className="bg-black flex flex-row justify-center items-center">
        {/* <Static_left/> */}
        <div className="flex flex-row justify-center items-center">
          <div className="space-y-7">
            <div className="font-bold text-blue-700 text-2xl">UI UX Design</div>
            <div onClick={scroll_1} className="flex flex-col cursor-pointer">
              <div className="font-semibold text-white text-2xl">
                Mobile App
              </div>
              <div className="font-semibold text-white text-2xl">
                {" "}
                Development
              </div>
            </div>
            <div onClick={scroll_2} className="flex flex-col cursor-pointer">
              <div className="font-semibold text-white text-2xl">
                Full Stack
              </div>
              <div className="font-semibold text-white text-2xl">
                {" "}
                Engineering
              </div>
            </div>

            <div onClick={scroll_3} className="flex flex-col cursor-pointer">
              <div className="font-semibold text-white text-2xl">CMS</div>
              <div className="font-semibold text-white text-2xl">
                Development
              </div>
            </div>

            <div onClick={scroll_4} className="font-semibold text-white text-2xl cursor-pointer">Devops</div>
            <div onClick={scroll_5} className="font-semibold text-white text-2xl cursor-pointer">Iot</div>
            <div onClick={scroll_6} className="flex flex-col cursor-pointer">
              <div className="font-semibold text-white text-2xl">Product</div>
              <div className="font-semibold text-white text-2xl">
                Engioneering
              </div>
            </div>
          </div>
          <Image
            src={rectangle}
            alt="Description of the image"
            width={330}
            height={330}
            className="mx-12"
          ></Image>
          <div></div>
        </div>
        {/* <Scroll_right/> */}

        <div
          className="h-[66vh] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div id="first" className="flex flex-col justify-center items-start space-y-10">
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-white ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-white">Intuitive Interfaces</li>
                <li className="text-white">User_centric Design</li>
                <li className="text-white">Resposive Solutions</li>
                <li className="text-white">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-white">Prototyping Excellence</li>
                <li className="text-white">Accessibility Enhancement</li>
                <li className="text-white">Engaging Experiences</li>
                <li className="text-white">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div
            id="second"
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
            <div className="text-white ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-white">Intuitive Interfaces</li>
                <li className="text-white">User_centric Design</li>
                <li className="text-white">Resposive Solutions</li>
                <li className="text-white">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-white">Prototyping Excellence</li>
                <li className="text-white">Accessibility Enhancement</li>
                <li className="text-white">Engaging Experiences</li>
                <li className="text-white">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div id="third" className="flex flex-col justify-center items-start space-y-10 mt-28">
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-white ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-white">Intuitive Interfaces</li>
                <li className="text-white">User_centric Design</li>
                <li className="text-white">Resposive Solutions</li>
                <li className="text-white">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-white">Prototyping Excellence</li>
                <li className="text-white">Accessibility Enhancement</li>
                <li className="text-white">Engaging Experiences</li>
                <li className="text-white">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>

          <div id="fourth" className="flex flex-col justify-center items-start space-y-10 mt-28">
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-white ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-white">Intuitive Interfaces</li>
                <li className="text-white">User_centric Design</li>
                <li className="text-white">Resposive Solutions</li>
                <li className="text-white">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-white">Prototyping Excellence</li>
                <li className="text-white">Accessibility Enhancement</li>
                <li className="text-white">Engaging Experiences</li>
                <li className="text-white">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>


          <div id="fifth" className="flex flex-col justify-center items-start space-y-10 mt-28">
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-white ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-white">Intuitive Interfaces</li>
                <li className="text-white">User_centric Design</li>
                <li className="text-white">Resposive Solutions</li>
                <li className="text-white">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-white">Prototyping Excellence</li>
                <li className="text-white">Accessibility Enhancement</li>
                <li className="text-white">Engaging Experiences</li>
                <li className="text-white">Future-ready Solutions</li>
              </ul>
            </div>
            <button className="rounded-full text-white w-44 h-12 text-lg bg-blue-700 ">
              {" "}
              View more
            </button>
          </div>


          <div id="sixth" className="flex flex-col justify-center items-start space-y-10 mt-28">
            <div className="flex flex-col">
              <div className="text-white font-semibold text-2xl">
                Crafting Experiences,
              </div>
              <div className="text-white font-semibold text-2xl">
                Inspiring Connections.
              </div>
            </div>
            <div className="text-white ">
              <div>Craft a memorable brand presence. Elevate your brand</div>
              <div>with captivating UI/UX designs for intuitive mobile</div>
              <div>experience and facilitate lasting connection through</div>
              <div>design evolution. </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul className="list-disc mx-8 m">
                <li className="text-white">Intuitive Interfaces</li>
                <li className="text-white">User_centric Design</li>
                <li className="text-white">Resposive Solutions</li>
                <li className="text-white">Brand-Focused Visuals</li>
              </ul>
              <ul className="list-disc">
                <li className="text-white">Prototyping Excellence</li>
                <li className="text-white">Accessibility Enhancement</li>
                <li className="text-white">Engaging Experiences</li>
                <li className="text-white">Future-ready Solutions</li>
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
