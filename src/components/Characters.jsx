import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCharacters } from "../redux/actions";
import CharacterCard from "./CharacterCard";

const Characters = () => {
    const dispatch = useDispatch();
    // const characters = useSelector(state => state.characters)
    const { characters } = useSelector(state => state)

    useEffect(() => {
        dispatch(getAllCharacters())
    }, [])

    return(
        <div>
            {
                characters.map(character => {
                    return <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        species={character.species}
                        image={character.image}
                    />
                })
            }
        </div>
    )
}

export default Characters;