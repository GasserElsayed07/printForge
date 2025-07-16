import Link from "next/link"

export default function CategoriesCard(props: any) {
    return (
        <Link href={`/3d-models/categories/${props.slug}`}>
            <section className="p-6 w-[400px] ">
                <h2>{props.displayName}</h2>
                <p>{props.slug} </p>
            </section>
        </Link>
    )
}