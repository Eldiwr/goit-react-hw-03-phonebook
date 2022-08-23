import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0px;
`
export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;

    max-width: 300px;

    margin-top: 10px;
`

export const Button = styled.button`
    background-color: white;
    border-radius: 4px;
    &:hover{
      background-color: violet;
    }
`