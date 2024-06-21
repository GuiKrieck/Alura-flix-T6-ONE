import { useState } from "react"
import styled from "styled-components"


const StyledFormTextArea = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    width: 90%;
    background-color: transparent;
`

const StyledLabel = styled.label`
    font-size: 1.25rem;
    font-weight: 600;
    color: #FFFFFF;
    &.invalid{
        color: #AA0000;
    }

`
const StyledTextArea = styled.textarea`
    width: 100%;
    height: 112px;
    font-size: 1.25rem;
    background-color: transparent;
    font-weight: 600;
    color: #FFFFFF;
    border: 3px solid ${(props) => props.$color};
    border-radius: 15px;
    padding-left: 10px;
    outline: none;
    resize: none;
    &.invalid{
        border: 3px solid #AA0000;
    }
`

const FormTextArea = ({color, label,id,value,placeholder,handleChange}) =>{
    const [isValid, setIsValid]= useState(true)
    return(
        <StyledFormTextArea>
            <StyledLabel
                className={isValid ? "" : "invalid"} 
                htmlFor={id}
            >
                {label}:
            </StyledLabel>
            <StyledTextArea 
                className={isValid ? "" : "invalid"}
                $color={color}
                id={id}
                placeholder={placeholder} 
                value={value} 
                required 
                onChange={(event) => handleChange(event.target.value)}
                onBlur={(event) => setIsValid(event.target.validity.valid)} 
            />
        </StyledFormTextArea>
    )
}

export default FormTextArea