import Link from "next/link"

export default function NavBar() {
    return (
        <header>
          <nav className='flex justify-between p-4'>
            <span>
              <Link href="/">printforge</Link>
            </span>
            <div className='flex gap-8 uppercase'>
              <Link href='/3d-models' >3d models</Link>
              <Link href='/3d-models/categories'>categories</Link>
              <Link href="/about" className='text-orange-400 border-b-2 border-b-orange-100'>
                about
              </Link>
            </div>
          </nav>
        </header>
    )
}