import { useState } from "react"
import styled from "styled-components"


const StyledFormSelect = styled.fieldset`
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
const StyledSelect = styled.select`
    width: 100%;
    height: 62px;
    font-size: 1.25rem;
    background-color: transparent;
    font-weight: 600;
    color: #FFFFFF;
    border: 3px solid ${(props) => props.$color};
    border-radius: 15px;
    padding-left: 10px;
    outline: none;
    &:invalid{
        color: #a5a5a5;
    }
    &.invalid{
        border: 3px solid #AA0000;
    }
    >option{
        color:#000000;
    }
`


const FormSelect = ({color, label,id,categories,value,handleChange}) =>{
    const [isValid, setIsValid]= useState(true)
    return(
        <StyledFormSelect>
            <StyledLabel
                className={isValid ? "" : "invalid"} 
                htmlFor={id}>{label}:</StyledLabel
            >
            <StyledSelect 
                className={isValid ? "" : "invalid"} 
                $color={color}
                id={id} 
                value={value} 
                required
                onChange={(event) => handleChange(event.target.value)}
                onBlur={(event) => setIsValid(event.target.validity.valid)} 
            >
                <option value='' hidden> Escolha o sistema</option>
                {categories.map((category) => <option key={category.system}>{category.system}</option>)}
            </StyledSelect>
        </StyledFormSelect>
    )
}

export default FormSelect