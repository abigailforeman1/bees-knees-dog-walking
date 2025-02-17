'use client';
import NextImage from "next/image";
import { gsap } from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';
import useWindowDimensions from "@/app/hooks/useWindowDimension";
import { useEffect } from "react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Page() {
  const { windowDimensions, currentDevice } = useWindowDimensions();

  useGSAP(() => {
    const tlBeeTwo = gsap.timeline({ paused: false, repeat: -1, repeatDelay: 7 });
    tlBeeTwo.startTime(3);
    tlBeeTwo.to('#bee', { right: windowDimensions.width + 70, duration: 9, ease: "none" }, "animation-3")
    tlBeeTwo.to('#bee', { y: -100, duration: 2, ease: "power1.inOut" }, "animation-3+=1")
    tlBeeTwo.to('#bee', { y: -50, duration: 1, ease: "power1.inOut" }, "animation-3+=3")
    tlBeeTwo.to('#bee', { y: -300, duration: 3, ease: "power1.inOut" }, "animation-3+=4")
    tlBeeTwo.to('#bee', { y: -150, duration: 2, ease: "power1.inOut" }, "animation-3+=7")
  }, [windowDimensions, currentDevice]);

  return (
    <>
      <NextImage
        id="bee"
        src={"/bee-paper.png"}
        className="fixed bottom-20 right-[-70px] scale-x-[-1]"
        style={{ zIndex: 101 }}
        alt="bee"
        width={70}
        height={0}
        priority
      />
      <div className="text-sm md:text-base flex flex-col justify-center items-center w-full mt-[0px] h-screen">
        <div className="flex flex-col p-4 w-4/5 md:w-3/5 gap-6 justify-center text-purple font-[family-name:var(--font-workSans)]">
          <p>Please contact me{" "}
            <a
              className="underline hover:text-yellow"
              href="https://www.instagram.com/beeskneesbyjo/"
              target="_blank"
              rel="noopener noreferrer"
            >via Instagram</a>{" "}
            and include the following in your message:</p>
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