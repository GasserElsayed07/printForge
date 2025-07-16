import Link from "next/link"

export default function NavBar() {
    return (
        <header>
          <nav className='flex justify-between p-4'>
            <span>
              <Link href="/">printforge</Link>
            </span>
            <div className='flex gap-8'>
              <Link href='/3d-models' className='uppercase' >3d models</Link>
              <Link href="/about" className='text-orange-400 border-b-2 border-b-orange-100 uppercase'>
                about
              </Link>
            </div>
          </nav>
        </header>
    )
}