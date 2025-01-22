import NextImage from "next/image";

export default function Page() {

  return (
    <div className="flex justify-center items-center w-full" style={{ height: "100vh" }}>
      <div className="flex justify-center items-center w-full sm:w-2/3 md:w-4/5 text-purple text-sm sm:text-sm md:text-base font-[family-name:var(--font-fredoka)]">
        <div className="flex md:flex-row sm:flex-col flex-col flex-col-reverse sm:flex-col-reverse items-center justify-center p-9 gap-6 h-full">
          <div className="flex flex-col align-center"><p className="mb-1">Hi, I’m Jo.</p>
            <p>I’ve been walking dogs for <span className="text-blue bg-purple p-1">15 years</span> around the <span className="text-blue bg-purple p-1">Medway towns</span> in Kent. I&apos;m a local dog walker offering a one-to-one service to ensure your dog has the <span className="text-blue bg-purple p-1">best walk possible.</span> I also provide a multi-visit service if you’re away for the weekend where I can <span className="text-blue bg-purple p-1">feed,</span> <span className="text-blue bg-purple p-1">walk,</span> <span className="text-blue bg-purple p-1">play</span> and keep your pet <span className="text-blue bg-purple p-1">company</span> up to 4 times a day. I am unable to take on dangerous breeds and very large dogs. <span className="text-blue bg-purple p-1">Thank you!</span></p>
          </div>
          <NextImage
          className="w-1/3 sm:w-1/3 md:w-1/2 lg:w-1/3"
            src="/beesKnees4.png"
            alt="bees knees with Mishka the dog"
            width={320}
            height={320}
            priority
          />
        </div>
      </div>

    </div>
  )
}