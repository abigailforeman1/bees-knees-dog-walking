import "./globals.css";
import { Work_Sans } from "next/font/google";
import Link from 'next/link'
import NextImage from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google'

const workSans = Work_Sans({
  variable: "--font-workSans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bee's Knees Dog Walking",
  description: "Bee's Knees Dog Walking provides walking and home visits for all pets in the Medway towns and surrounding areas. Enquire today for professional and friendly dog walking services.",
  openGraph: {
    title: "Bee's Knees Dog Walking",
    description: "Bee's Knees Dog Walking provides walking and home visits for all pets in the Medway towns and surrounding areas. Enquire today for professional and friendly dog walking services.",
    images: ['/bee-thumbnail.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-blue">
      <body
        className={`${workSans.variable} antialiased bg-blue`} style={{
          backgroundImage: `url('/background-paper.png')`
        }}
      >

        <NextImage
          src={"/background-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/ball-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />


        <NextImage
          src={"/bigDog-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/bone-paper2.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/bowl-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/flower-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/heart-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/heart-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/kennel-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/mediumDog-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/smallDog-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <NextImage
          src={"/star-paper.png"}
          className="hidden"
          alt="background"
          width={0}
          height={0}
          priority
        />

        <div className="flex flex-col">
          <header id={"header"} className={`w-screen md:w-auto absolute flex items-center flex-col md:flex-row gap-4 md:gap-7 font-[family-name:var(--font-workSans)] mt-5 md:m-4`} style={{ zIndex: 100 }}>

            <Link className="bg-yellow hover:rotate-3 pt-1 pb-1 pl-3 pr-3 w-[340px] lg:w-[425px]" href={"/"}>
              <p className="text-blueDark text-l lg:text-xl relative">Bee&apos;s Knees Dog Walking</p>
            </Link>

            <nav id="footer" className="justify-between gap-4 lg:gap-7 flex flex-wrap text-l lg:text-xl font-[family-name:var(--font-workSans)] w-[340px] lg:w-[425px]">

              <Link className="bg-purple hover:rotate-5 pt-1 pb-1 pl-3 pr-3" href={"/info"}>
                <p className="text-pink relative">Info</p>
              </Link>

              <Link className="bg-green hover:rotate-5 pt-1 pb-1 pl-3 pr-3" href={"/contact"}>
                <p className="text-yellow relative">Contact</p>
              </Link>

              <Link
                href={"https://www.instagram.com/beeskneesbyjo/"}
                className="bg-pink hover:rotate-5 pt-1 pb-1 pl-3 pr-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-red relative"
                >Follow</p>
              </Link>

            </nav>
          </header>

          {children}

        </div>

        <NextImage
          id="grass"
          src={"/grass-paper2.png"}
          className="w-screen h-[65px] lg:h-auto fixed bottom-[-3px] object-cover"
          alt="grass"
          width={1440}
          height={120}
        // priority
        />
        <p className="fixed bottom-1 left-3 text-purple font-normal md:font-bold font-[family-name:var(--font-workSans)] text-xs">© Bee&apos;s Knees 2025</p>
        <a href={"https://www.studiosunne.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-1 right-3 text-purple font-normal md:font-bold font-[family-name:var(--font-workSans)] text-xs hover:text-yellow">Website by Studio Sunne</a>

      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html >
  );
}
