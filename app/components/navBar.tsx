'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import NavLink from "./navLink"
export default function NavBar() {

    const pathName = usePathname()
    return (
        <header>
          <nav className='flex justify-between p-4'>
            <span>
              <Link href="/">printforge</Link>
            </span>
            <div className='flex gap-8 uppercase'>
              <NavLink href='/3d-models' children="3d models" isActive={pathName === '/3d-models'}/>
              <NavLink href='/3d-models/categories' children="categories" isActive={pathName === '/3d-models/categories'}/>
              <NavLink href="/about"  children="about" isActive={pathName === "/about"}/>
            </div>
          </nav>
        </header>
    )
}