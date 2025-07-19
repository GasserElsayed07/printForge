import Link from "next/link"
type navLink = {
    children: string,
    href: string,
    isActive: boolean
}
export default function NavLink({ children, href, isActive }: navLink) {

    
    return (
        <Link href={href} className={`px-4 py-2 transition-colors cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-700 border-b" : "text-gray-700"}`} >
            {children}
        </Link>
    )
}