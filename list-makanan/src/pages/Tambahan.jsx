import {Link, useLoaderData} from 'react-router-dom'

function Tambahan() {
    // const [meals,  setMeal] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    //         const data = await res.json()
    //         console.log(data)
    //         setMeal(data.meals)
    //     }
    //     fetchData()
    // }, [])


    const meals = useLoaderData()

    return (
        <>
            <h2>Extra menu</h2>
            <input type="text" />
            {
                meals.map((meal, index) => {
                    return (
                        <div key={index}>
                            <Link to={meal.idMeal}><h2>{meal.strMeal}</h2></Link>
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