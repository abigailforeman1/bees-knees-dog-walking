'use client';
import NextImage from "next/image";
import useWindowDimensions from "@/app/hooks/useWindowDimension";

export default function Page() {
  const { currentDevice } = useWindowDimensions();
  return (
    <div className="flex justify-center items-center w-full h-full mb-[10px] md:mb-[150px] mt-[180px] md:mt-[120px]">
      <div className="flex flex-col md:flex-row items-center justify-center h-full w-full md:w-3/4 gap-7">

        <div className="flex flex-col align-center w-3/4 text-purple text-sm md:text-base font-[family-name:var(--font-workSans)]"><p className="mb-1">Hi, I’m Jo.</p>
          <p>I’ve been walking dogs for <span className="text-blue bg-purple p-1">15 years</span> around the <span className="text-blue bg-purple p-1">Medway towns</span> in Kent. I&apos;m a local dog walker offering a one-to-one service to ensure your dog has the <span className="text-blue bg-purple p-1">best walk possible.</span> I also provide a multi-visit service if you’re away for the weekend where I can <span className="text-blue bg-purple p-1">feed,</span> <span className="text-blue bg-purple p-1">walk,</span> <span className="text-blue bg-purple p-1">play</span> and keep your pet <span className="text-blue bg-purple p-1">company</span> up to 4 times a day. I am unable to take on dangerous breeds and very large dogs. <span className="text-blue bg-purple p-1">Thank you!</span></p>
        </div>

        <NextImage
          className="mb-[100px] md:mb-0"
          src="/profilePicture.png"
          alt="bees knees with Mishka the dog"
          width={currentDevice === "mobile" ? 250 : 300}
          height={300}
          priority
        />

      </div>

    </div>
  )
}