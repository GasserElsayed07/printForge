import Image from "next/image";
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
    <main className="h-screen">
      <section className="flex items-center justify-around">
        <p>Your go-to platform for 3D printing files</p>
        <Image
          src="/hero.png"
          alt="Hero image"
          width={500}
          height={300}
          priority
        />
      </section>
    </main>
  );
}
