import styled from "styled-components"
import GameCard from "../GameCard"
import CategoryTitle from "../CategoryTitle"


const StyledGameCardContainer = styled.div`
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    gap: 20px;
    overflow-y: auto;
    overflow-x: auto;
    scrollbar-width:thin;
    scrollbar-color: #2271D1 #2271D12B;
    &::-webkit-scrollbar{
        height: 10px;
    }
    &::-webkit-scrollbar{
        background-color: #2271D12B;
        border: 5px;
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #2271D1;
        border-radius: 20px;
    }
`

const CategoryContainer = ({categories, games}) =>{
    const hasGames = games.length > 0
    return(
        hasGames 
            &&<>
                <CategoryTitle color={categories.color} >
                    {categories.system}
                </CategoryTitle>
                <StyledGameCardContainer>
                    {games.map((game) => <GameCard key={game.title} color={categories.color} game={game} />)}
                </StyledGameCardContainer>
            </> 
    )
}

export default CategoryContainer