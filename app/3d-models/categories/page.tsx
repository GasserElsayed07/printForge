import { getAllCategories, getCategoryBySlug, getDisplayNameFromSlug } from "@/app/lib/categories"
import CategoriesCard from "@/app/components/categoryCard" 
export default async function CategoriesPage() {

    const categories = await getAllCategories()
    const categoriesCards = categories.map((cate) => <CategoriesCard
        key = {cate.slug}
        slug = {cate.slug}
        displayName = {cate.displayName}
        />   
    )
    return <main>
        {categoriesCards}
    </main>
}