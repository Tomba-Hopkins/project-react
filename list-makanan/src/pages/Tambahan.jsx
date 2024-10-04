import { useEffect, useState } from 'react'

function Tambahan() {
    const [meals,  setMeal] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
            const data = await res.json()
            // console.log(data)
            setMeal(data.meals)
        }
        fetchData()
    }, [])


    // const [searchNew, useSearchNew] = useState("")

    return (
        <>
            <h2>Extra menu</h2>
            <input type="text" />
            {
                meals.map((meal, index) => {
                    return (
                        <div key={index}>
                            <h2>{meal.strMeal}</h2>
                            <p>{meal.strArea}</p>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                        
                    )
                } )
            }
        </>
    )
}

export default Tambahan