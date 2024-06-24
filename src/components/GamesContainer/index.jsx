import styled from "styled-components"
import { useGamesContext } from "../../context/Games"
import CategoryContainer from "../CategoryContainer"


const StyledGamesContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 40px 0;
    padding: 0 10px;
`

const GamesContainer = () =>{
    const categories = useGamesContext().categories
    const games = useGamesContext().games

    if (games.length === 0 || categories.length === 0) {
        return null; 
    }

    return(
        <StyledGamesContainer>
            {categories.map((category) => (
                <CategoryContainer 
                    key={category.system} 
                    categories={category} 
                    games={games.filter((game) => game.system === category.system)}
                />)
            )}
        </StyledGamesContainer>
    )
}

export default GamesContainer