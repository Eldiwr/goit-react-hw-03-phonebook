import styled from "styled-components";

export const Box = styled.div`
   padding: 40px;
`
export const Form = styled.form`
   display: flex;
   flex-direction: column;  
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 200px;

    margin-top: 10px;
`
export const Input = styled.input`
   margin-top: 10px;
`

export const Button = styled.button`
   width: 100px;
   padding: 5px;
   margin-top: 10px;
   background-color: white;
   border-radius: 4px;
   &:hover{
      background-color: violet;
   }
`