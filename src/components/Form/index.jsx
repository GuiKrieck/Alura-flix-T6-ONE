import styled from "styled-components"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import FormTextArea from "./FormTextArea"
import { useGamesContext } from "../../context/Games"
import { useEffect, useState } from "react"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width:575px;
    margin: 0 auto;
`

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    max-width: 525px;
    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const StyledFormButton = styled.button`
    width: 180px;
    height: 54px;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: 900;
    color:#FFFFFF;
    border: 3px solid #2271D1;
    border-radius: 15px;
    &.white{
        border: 3px solid #FFFFFF;
    }
`

const Form = ({method, game}) =>{
    const gameContext = useGamesContext()
    const [gameTitle, setGameTitle] = useState('')
    const [gameSystem, setGameSystem] = useState('')
    const [gameCover, setGameCover] = useState('')
    const [gameVideo, setGameVideo] = useState('')
    const [gameDescription, setGameDescription] = useState('')

    useEffect(() =>{
        if(game){
            setGameTitle(game.title)
            setGameSystem(game.system)
            setGameCover(game.cover)
            setGameVideo(game.link)
            setGameDescription(game.description)
        }
    },([]))

    function formSubmit(event){
        event.preventDefault()
        gameContext.editCard(null)
        const newGame = {
            "title":gameTitle,
            "cover":gameCover,
            "link":gameVideo,
            "system":gameSystem,
            "description":gameDescription
        }
        
        if (game){
            newGame.id = game.id
            gameContext.updateGame(newGame)
        }else{
            gameContext.addGame(newGame)

        }
        clearFields()
    }

    function clearFields(){
        setGameTitle("")
        setGameSystem("")
        setGameCover("")
        setGameVideo("")
        setGameDescription("")
    }

    return(
        <StyledForm onSubmit={(event)=>formSubmit(event)}>
            <FormInput 
                color={method ? '#6BD1FF' : '#696969'}
                label="Título"
                id="title"
                type="text"
                value={gameTitle ? gameTitle : ""}
                placeholder="Insira o Titulo do jogo"
                handleChange={(value) => setGameTitle(value)}
            />
            <FormSelect 
                color={method ? '#6BD1FF' : '#696969'}
                label="Sistema"
                id="system"
                categories={gameContext.categories}
                value={gameSystem ? gameSystem : ""}
                handleChange={(value) => setGameSystem(value)}
            />
            <FormInput
                color={method ? '#6BD1FF' : '#696969'}
                label="Capa"
                id="cover"
                type="url"
                value={gameCover ? gameCover : ""}
                placeholder="Insira o link da imagem com a capa do jogo"
                handleChange={(value) => setGameCover(value)}
            />
            <FormInput 
                color={method ? '#6BD1FF' : '#696969'}
                label="Vídeo"
                id="video"
                type="url"
                value={gameVideo ? gameVideo : ""}
                placeholder="Insira o link da gameplay do jogo"
                handleChange={(value) => setGameVideo(value)}
            />
            <FormTextArea  
                color={method ? '#6BD1FF' : '#696969'}
                label="Descrição"
                id="description"
                value={gameDescription ? gameDescription : ""}
                placeholder="Insira a descrição do jogo"
                handleChange={(value) => setGameDescription(value)}
            />
            <StyledButtonContainer>
                <StyledFormButton type="submit">
                    Gravar
                </StyledFormButton>
                <StyledFormButton className="white" type="reset" onClick={()=>clearFields()}>
                    Limpar
                </StyledFormButton>
            </StyledButtonContainer>
        </StyledForm>
    )
}

export default Form