import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DetailMeal(){

    const [meals,  setMeal] = useState([])
    const params = useParams()

    useEffect(() => {
        
        const fetchData = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal_id}`)
            const data = await res.json()
            // console.log(data)
            setMeal(data.meals)
        }
        fetchData()
    }, [params.meal_id])


    return (
        <>
            {
                meals.map((meal, index) => {
                    return (
                        <div key={index}>
                            <h2>{meal.strMeal}</h2>
                            <h4>({meal.strArea})</h4>
                            <img src={meal.strMealThumb} alt={meal.strMea} />
                            <br />
                            <p>{meal.strInstructions}</p>
                        </div>
                    )
                })
            }
        </>
    )

}


export default DetailMeal