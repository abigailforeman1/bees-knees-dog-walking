export default function Page() {

  return (
    <div className="text-sm sm:text-sm md:text-base flex flex-col justify-center items-center w-full" style={{ height: "100vh" }}>
      <nav className="flex flex-col p-4 w-3/5 sm:w-1/2 md:w-3/5 gap-4 justify-center text-purple font-[family-name:var(--font-fredoka)]">
        <p>Please contact me{" "}
          <a
            className="underline hover:text-orange"
            href="mailto:willowweebs1963@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
          >via email</a>{" "}
          or by messaging me on{" "}
          <a
            className="underline hover:text-orange"
            href="https://www.instagram.com/beeskneesbyjo/"
            target="_blank"
            rel="noopener noreferrer"
          >instagram</a>{" "}and include the following in your message:</p>
        <ul>
          <li>▪︎ Your name</li>
          <li>▪︎ Breed of your dog</li>
          <li>▪︎ Your location</li>
          <li>▪︎ Dates and times you would like to book me</li>
        </ul>
        <div className="flex justify-start w-full">
          <p className="font-bold text-blue bg-purple p-1">Thank you!</p>
        </div>
      </nav>
    </div>
  )
}