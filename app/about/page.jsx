import { Albert_Sans } from 'next/font/google';
import hero from "@/public/hero.png"
// Configure Albert Sans font
const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});


export default function About() {
    return (
        <main className={`${albertSans.className}`}>
            {/* the img and info section */}
            <section className="flex justify-around border-b-1 p-2 h-[600px] border-#DDDDDD"> 
                <img 
                    src={hero.src}
                    alt="square hero image"
                    className="max-w-[600px] h-auto flex-shrink"
                >
                </img>

                <div className="flex flex-col justify-around w-[600px]">
                    <p className='font-medium text-xl leading-[100%] tracking-wide'>
                        About print forge
                    </p>
                    <h1 className='font-heading text-6xl leading-[100%]'>
                        Empowering makers worldwide
                    </h1>
                    <p className='font-normal text-[28px] leading-[100%]'>
                        Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.
                    </p>
                    <p className='font-normal text-[28px] leading-[100%]'>
                        Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.
                    </p>
                </div>
            </section>
            <section className='flex justify-around'>
                <div className='max-w-[350px]'>
                    <div>
                        <img></img>
                        <h2>100K+ Models</h2>
                    </div>
                    <p>Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                </div>
                <div className='max-w-[350px]'>
                    <div>
                        <img></img>
                        <h2>Active Community</h2>
                    </div>
                    <p>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                </div>
                <div className='max-w-[350px]'>
                    <div>
                        <img></img>
                        <h2>Free to Use</h2>
                    </div>
                    <p>Most models are free to download, with optional premium features for power users.</p>
                </div>
            </section>
            <section className='flex flex-col items-center justify-around h-[500px]'>
                <div className='border-b-1 max-w-[800px]'>
                    <h1>Our vision</h1>
                    <p>At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.</p>
                </div>
                <p className='max-w-[800px]'>Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
            </section>
        </main>
    )
}