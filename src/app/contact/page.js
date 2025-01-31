'use client';
import NextImage from "next/image";
import { gsap } from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';
import useWindowDimensions from "@/app/hooks/useWindowDimension";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Page() {
  const { windowDimensions, currentDevice } = useWindowDimensions();

  useGSAP(() => {
    const tlBeeTwo = gsap.timeline({ paused: false });
    tlBeeTwo.startTime(3);
    tlBeeTwo.to('#bee', { top: 70, duration: 6, ease: "none" }, "animation-1")
    tlBeeTwo.to('#bee', { left: -70, duration: 6, ease: "power1.inOut" }, "animation-1")
  }, [windowDimensions, currentDevice]);

  return (
    <>
      <NextImage
        id="bee"
        src={"/bee-paper.png"}
        className="absolute bottom-20 right-[-70px] scale-x-[-1]"
        style={{ zIndex: 101 }}
        alt="bee"
        width={60}
        height={0}
        priority
      />
      <div className="text-sm md:text-base flex flex-col justify-center items-center w-full h-full mt-[180px] md:mt-[150px]">
        <div className="flex flex-col p-4 w-4/5 md:w-3/5 gap-6 justify-center text-purple font-[family-name:var(--font-workSans)]">
          <p>Please contact me{" "}
            <a
              className="underline hover:text-yellow"
              href="https://www.instagram.com/beeskneesbyjo/"
              target="_blank"
              rel="noopener noreferrer"
            >via Instagram</a>{" "}
            or by sending me an{" "}
            <a
              className="underline hover:text-yellow"
              href="mailto:willowweebs1963@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
            >email</a>{" "}and include the following in your message:</p>
          <ul className="font-bold">
            <li>▪︎ Your name</li>
            <li>▪︎ Breed of your dog</li>
            <li>▪︎ Your location</li>
            <li>▪︎ Dates and times you would like to book me</li>
          </ul>
          <p>I will then review your request and get back to you as soon as possible.</p>
          <div className="flex justify-start w-full">
            <p className="text-blue bg-purple p-2">Thank you!</p>
          </div>
        </div>

      </div>
    </>
  )
}