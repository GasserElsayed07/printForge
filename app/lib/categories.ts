import categories from "../data/categories.json"
import { Category } from "../types/types"
export async function getAllCategories():Promise<Category[]> {
    return categories
}

export async function  getCategoryBySlug(slug:string):Promise<Category> {
    const category = await categories.find((cate) => cate.slug === slug)
    if(category)
        return category
    throw new Error(`the slug ${slug} was not found`)
}

export async function getDisplayNameFromSlug(slug:string):Promise<string> {
    const category:Category = await getCategoryBySlug(slug)
    return category.displayName
}