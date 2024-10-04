export const allmeal = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    if (!res.ok) throw new Error('Failed to fetch data')
    const data = await res.json()
    return data.meals
}

export const mealById = async ({params}) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal_id}`)
    const data = await res.json()
    return data.meals[0]
}