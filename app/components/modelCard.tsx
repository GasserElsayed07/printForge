import Link from "next/link"

export default function ModelCard(props: any) {
    return (
        <Link href={`/3d-models/${props.id}`}>
            <section className="p-6 w-[400px] ">
                <h2>{props.name}</h2>
                <p>{props.description} </p>
                <p>{props.category} </p>
            </section>
        </Link>
    )
}