import Image from "next/image";
import { Albert_Sans } from 'next/font/google';
import circleHero from '@/public/circleHero.png'
// Configure Albert Sans font
const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Tailwind equivalent:
// font-family: Albert Sans; -> font-[Albert_Sans] (requires custom font setup)
// font-weight: 500; -> font-medium
// font-style: Medium; -> (handled by font-medium)
// font-size: 16px; -> text-base
// line-height: 100%; -> leading-none
// letter-spacing: 5%; -> tracking-wider (or use tracking-[0.05em] for exact)
// text-transform: uppercase; -> uppercase
export default function Home() {

  return (
    <main className={`${albertSans.className} h-screen`}>
      <section className="mt-8 mb-8 flex items-center justify-around">
        <div>
          <div className="flex flex-col space-y-6 mb-16">
            <p className="font-medium tracking-wider leading-none uppercase">
              Your go-to platform for 3D printing files
            </p>
            <h1 className="font-bold text-6xl max-w-2xl ">
              Discover what’s possible with 3D printing
            </h1>
            <p className="max-w-md font-normal 16px tracking-wider leading-none text-2xl" >
              Join our community of creators and explore a vast library of user-submitted models.
            </p>
          </div>
          <button className="border-solid border-2 border-black p-2 cursor-pointer font-semibold tracking-normal ">
            BROWSE MODELS
          </button>
        </div>
        <Image
          src={circleHero.src}
          alt="Circle Hero image"
          width={500}
          height={300}
          priority
        />
      </section>
    </main>
  );
}
