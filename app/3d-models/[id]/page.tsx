import { getModelById } from "@/app/lib/models"

export default async function ModelPage({params}:any) {
    const theID = await params.id
    const modelMoreInfo = await getModelById(theID)
    console.log(modelMoreInfo)
    return (
        <main>
            {modelMoreInfo.likes}
        </main>
    )
}