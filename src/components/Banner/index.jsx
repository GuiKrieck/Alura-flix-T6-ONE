import styled from "styled-components";
import { useGamesContext } from "../../context/Games";
import CategoryTitle from "../CategoryTitle";
import { Link } from "react-router-dom";

const StyledBanner = styled.div`
    display: none;
    @media screen and (min-width: 1024px){ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        width: 100%;
        height: 500px;
        margin: 20px 0;
        padding: 0 40px;
        background:linear-gradient(#0012338F,#0012338F),url(${(props) => props.$cover});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: 4px solid #6BD1FF;
        cursor: pointer;
        div{
            display: flex;
            flex-direction: column;
            width: 100%;

        }
        h3{
            font-family: "Roboto", sans-serif;
            font-size: 3rem;
            margin: 20px 0;
        }
        p{
            font-family: "Roboto", sans-serif;
            font-size: 1.125rem;
            font-weight: 300;
            color: #F5F5F5;
            text-align: justify;
        }
        img{
            width: 100%;
            max-width: 300px;
            align-self: center;
        }
    }
`

const Banner = () =>{
    const games = useGamesContext().games
    const categories = useGamesContext().categories

    if (games.length === 0 || categories.length === 0) {
        return null; 
    }

    const randomNumber = Math.floor(Math.random() * (games.length))
    const bannerGame = games[randomNumber]
    const bannerGameCategory = categories.filter((category) => category.system === bannerGame.system)
    const categoryColor = bannerGameCategory[0].color
    
    return(
        <Link to={`/${bannerGame.id}`}>
            <StyledBanner $cover={bannerGame.cover}>
                <div>
                        <CategoryTitle color={categoryColor}>{bannerGame.system}</CategoryTitle>
                        <h3>{bannerGame.title}</h3>
                        <p>{bannerGame.description}</p>
                </div>
                <div>
                    <img src={bannerGame.cover} alt={bannerGame.title} />
                </div>
            </StyledBanner>
        </Link>
    )
}



export default Banner