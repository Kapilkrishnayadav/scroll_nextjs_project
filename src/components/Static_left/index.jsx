import React from "react";
import rectangle from "../../../public/Rectangle.svg"
import Image from "next/image";
const Index = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="space-y-7">
        <div className="font-bold text-blue-700 text-2xl">UI UX Design</div>
        <div className="flex flex-col">
        <div className="font-semibold text-white text-2xl">Mobile App</div>
        <div className="font-semibold text-white text-2xl"> Development</div>
        </div>
        <div className="flex flex-col">
        <div className="font-semibold text-white text-2xl">Full Stack</div>
        <div className="font-semibold text-white text-2xl"> Engineering</div>
        </div>
       
        <div className="flex flex-col">
        <div className="font-semibold text-white text-2xl">CMS</div>
        <div className="font-semibold text-white text-2xl">Development</div>
        </div>

        <div className="font-semibold text-white text-2xl">Devops</div>
        <div className="font-semibold text-white text-2xl">Iot</div>
        <div className="flex flex-col">
        <div className="font-semibold text-white text-2xl">Product</div>
        <div className="font-semibold text-white text-2xl">Engioneering</div>
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
  );
};

export default Index;
