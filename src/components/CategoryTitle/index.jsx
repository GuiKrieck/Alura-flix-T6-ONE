import styled from "styled-components"

const StyledCategoryTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 290px;
    height: 70px;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 15px;
    background-color: ${(props) => props.$bgColor};
    margin-bottom: 40px;
    @media screen and (min-width: 1024px){
        width: 400px;
        font-size: 2rem;
    }
`

const CategoryTitle = ({color, children}) => {
    return(
        <StyledCategoryTitle $bgColor={color} >
            {children}
        </StyledCategoryTitle>
    )
}

export default CategoryTitle