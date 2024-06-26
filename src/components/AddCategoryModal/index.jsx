import styled from "styled-components";
import xButton from "/images/x-button.png"
import { useState } from "react";
import { useGamesContext } from "../../context/Games";
import NewCategoryForm from "../NewCategoryForm";


const Overlay = styled.div`
    background-color: #000000b2;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 0px;
    left: 0%;
    width: 374px;
    background-color: #03122F;
    padding: 70px 0 60px 0;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    @media screen and (min-width: 1024px){
        width: 865px;
    }
`
const StyledMoldalTitle = styled.h2`
    width: 100%;
    margin-bottom: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 2rem;
    color: #2271D1;
    text-align: center;
    @media screen and (min-width: 1024px){
        font-size: 3.75rem;
        text-align: left;
        max-width: 575px;
        margin: 0 auto 40px;
    }
`
const StyledModalButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const AddCategoryModal = () => {
    const gameContext = useGamesContext()
    
    return (
        gameContext.isCategoryModalOpen &&
        <>
            <Overlay onClick={() => gameContext.categoryModal(false)} />
            <StyledDialog onClose={() => gameContext.categoryModal(false)} open={!!open}>
                <StyledMoldalTitle>Adicionar Sistema :</StyledMoldalTitle>
                <NewCategoryForm />
                <StyledModalButton onClick={() => gameContext.categoryModal(false)}>
                    <img src={xButton} alt="botão fechar" />
                </StyledModalButton>
            </StyledDialog>
        </>
    )
}

export default AddCategoryModal