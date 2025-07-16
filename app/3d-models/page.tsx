import { getAllModels } from "../lib/models"
import {Model} from '../types/types'
import ModelCard from "../components/modelCard"
import {JSX} from 'react'
const modelsNames: Model[] = await getAllModels()

export default function ModelsListPage() {
    const modelsNamesMap: JSX.Element[] = modelsNames.map(model => <ModelCard 
        key={model.id}
        id = {model.id}
        name={model.name}
        description = {model.description}
        category = {model.category}
        />)
    return (
        <main className="flex flex-col items-center">
            {modelsNamesMap}
        </main>
    )
}