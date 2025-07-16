import categories from "../data/categories.json"
import { Category } from "../types/types"
export function getAllCategories():Category[] {
    return categories
}

export function getCategoryBySlug(slug:string) {
    const category = categories.find((cate) => cate.slug === slug)
    if(category)
        return category
    throw new Error(`the slug ${slug} was not found`)
}

export function getDisplayNameFromSlug(slug:string) {
    const category:Category = getCategoryBySlug(slug)
    return category.displayName
}