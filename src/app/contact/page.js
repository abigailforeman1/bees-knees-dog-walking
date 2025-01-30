'use client';

export default function Page() {

  return (
    <div className="text-sm md:text-base flex flex-col justify-center items-center w-full h-full mt-[50px] md:mt-[100px] ">
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
  )
}