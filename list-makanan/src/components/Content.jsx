/* eslint-disable react/prop-types */
function Content(props){

    return (
        <>
            <h2>{props.name}</h2>
            <img className="fot" src={props.img} alt={props.name} />
            <p>Price: {props.price} | {props.tag.map((t, index) => <span key={index}> {t}  </span> )} </p>
        </>
    )
}


export default Content