import ModelCard from "@/app/components/modelCard"
import { getDisplayNameFromSlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"

import { ReactNode } from "react"

export default async function CategoriePage({ params }: any) {
    let filteredModels
    let filteredMap
    filteredModels = await getModels(params.categoryName)
    filteredMap = filteredModels.map(model => <ModelCard
        key={model.id}
        zeft={model.id}
        name={model.name}
        description={model.description}
        category={model.category}/>)
    
    console.log('Last segment:', params.slug)
    return (
        <section className="flex flex-col items-center" >
            {filteredMap}
        </section>
    )
}