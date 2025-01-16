'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showInfoModal, updateShowInfoModal] = useState(true);

  function handleInfoClick() {
    updateShowInfoModal(true);
  }

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-10">
      <nav className="flex justify-between w-full text-pink font-[family-name:var(--font-custom)] text-xl font-bold">
        <h1 className="mt-7 mr-7">BEE&apos;S</h1>
        <h1 className="mt-7 mr-7">KNEES</h1>
        <h1 className="mt-7 mr-7">DOG</h1>
        <h1 className="mt-7">WALKING</h1>
      </nav>

      <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-full h-full">
        {showInfoModal && (
          <div className="bg-pink w-3/4 h-3/4 text-purple text-sm leading-9 font-[family-name:var(--font-custom)] relative">
            <button className="mt-2 mr-3 text-base right-0 absolute w-auto hover:text-stroke-purple hover:text-stroke-2 hover:text-[#0000]" onClick={() => updateShowInfoModal(false)}>x
              {/* <Image
                style={{ margin: "10px" }}
                src="/x.svg"
                alt="close icon"
                width={24}
                height={24}
                priority
              /> */}
            </button>
            <div className="flex items-center justify-center px-9 gap-6 h-full">
              <div className="flex flex-col align-center"><p className="mb-1">Hi, I’m Jo.</p>
                <p>I’ve been walking dogs for <span className="text-pink bg-purple p-1">15 years</span> around the <span className="text-pink bg-purple p-1">Medway towns</span> in Kent. I&apos;m a local dog walker offering a one-to-one service to ensure your dog has the <span className="text-pink bg-purple p-1">best walk possible.</span> I also provide a multi-visit service if you’re away for the weekend where I can <span className="text-pink bg-purple p-1">feed,</span> <span className="text-pink bg-purple p-1">walk,</span> <span className="text-pink bg-purple p-1">play</span> and keep your pet <span className="text-pink bg-purple p-1">company</span> up to 4 times a day. I am unable to take on dangerous breeds and very large dogs. <span className="text-pink bg-purple p-1">Thank you!</span></p>
              </div>
              <Image
                src="/beesKnees.png"
                alt="bees knees with Mishka the dog"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        )
        }
      </main >


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between w-full text-pink font-[family-name:var(--font-custom)] text-xl font-bold">
        <a
          className="flex items-center gap-2 hover:text-stroke-pink hover:text-stroke-2 hover:text-[#0000]"
          href="mailto:willowweebs1963@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <a
          className="flex items-center gap-2 hover:text-stroke-pink hover:text-stroke-2 hover:text-[#0000]"
          href="https://www.instagram.com/beeskneesbyjo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
        </a>
        <button
          className="flex items-center gap-2 hover:text-stroke-pink hover:text-stroke-2 hover:text-[#0000]"
          onClick={handleInfoClick}
        >
          Info
        </button>
      </footer>
    </div >
  );
}
