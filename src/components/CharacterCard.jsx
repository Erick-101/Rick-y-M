const CharacterCard = ({ id, name, species, image }) => {
    return(
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <span>{species}</span>
        </div>
    )
}

export default CharacterCard;