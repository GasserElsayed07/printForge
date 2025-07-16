import { getDisplayNameFromSlug } from "@/app/lib/categories"

export default function CategoriePage({ params }: any) {
    console.log(params)
    return (
        <h1>{getDisplayNameFromSlug(params.categoryName)} </h1>
    )
}