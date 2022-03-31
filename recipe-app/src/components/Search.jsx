/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useState } from "react";
import FaSearch from 'react-icons/fa'
function Search(){
    return(
        <FormStyle>
            <input type="text" />
        </FormStyle>
    )
}
const FormStyle = styled.form`
margin:0rem 20rem;
position:relative;
width:100%;
input{
    border:none;
    background: linear-gradient(35deg,#494949,#313131);
    font-size:1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius:1rem;
    outline:none;
}
svg{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(100%,-50%);
    color: white;
}
`
export default Search