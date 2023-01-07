// Karakter bileşeniniz buraya gelecek
import React from "react";
import styled from "styled-components";



const SCDiv = styled.div`
display:flex;
width:400px;
flex-direction:colmn;
justify-content: space-between;
margin: 10px auto;
border:1px solid darkgreen;
background: rgba(0, 0, 0, 0.65);
color:white;
`

const SCName = styled.p`
font-weight: bold;
  letter-spacing: 2px;
  padding-left: 10px;
`

const SCBirthYear = styled.p`
font-weight: bold;
  letter-spacing: 2px;
  marjin-right: 10px;
  border:1px solid white;
  border-radius:5px
  

  
`




export default function Karakter (props){
const {name,birthYear} = props;
return(
<SCDiv>
    <SCName>{name}</SCName>
    <SCBirthYear>{birthYear}</SCBirthYear>
</SCDiv>
   )

}
