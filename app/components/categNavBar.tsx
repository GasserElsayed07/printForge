'use client'
import { getAllCategories } from "../lib/categories"
import { usePathname } from "next/navigation"
import NavLink from "./navLink"

const categories = await getAllCategories()
export default function CategNavBar() {
    const nav = categories.map((cate) => <NavLink
        href={`/3d-models/categories/${cate.slug}`}
        children={cate.displayName}
        isActive={`/3d-models/categories/${cate.slug}` === usePathname()}
    /> 
    )
    return (
        <div className="flex flex-col gap-3 pl-16 justify-center uppercase tracking-wide sticky top-[58px]  h-[calc(100vh-64px)]">
            <NavLink href="/3d-models" children="All" isActive={usePathname() === "/3d-models"}/>
            {nav}
        </div>
    )
}