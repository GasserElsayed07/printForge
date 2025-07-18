import { getAllCategories } from "../lib/categories"
import Link from "next/link"


export default async function ModelsLayout({ children }: { children: React.ReactNode }) {
    const categories = await getAllCategories()
    const nav = categories.map((cate) => <Link
        href={`/3d-models/categories/${cate.slug}`}
    >
        {cate.displayName}
    </Link>)
    return (

        // <div className="flex">
        //     <nav className="flex flex-col justify-center gap-3 pl-16 uppercase tracking-wide">
        //         <Link href="">All</Link>
        //         
        //     </nav>
        //     {children}
        // </div>\
        <div className="flex">
            <div className="flex flex-col gap-3 pl-16 justify-center uppercase tracking-wide sticky top-[58px]  h-[calc(100vh-64px)]">
                <Link href="">All</Link>
                {nav}
            </div>
            <div className="flex-1 overflow-auto">
                {children}
            </div>
        </div>
    )
}
