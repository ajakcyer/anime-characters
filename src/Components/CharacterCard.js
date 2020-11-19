
function Character (props) {

    // console.log(props.character)

    let {name , img, show} = props.character
    // console.log(name)
    return (
        <div className="character-flex-card">
            <h2>{name}</h2>
            <p>{show}</p>
            <div className="image-div">
            <img src={img} alt={name}/>
            </div>
        </div>
    )
}

export default Character