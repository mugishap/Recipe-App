/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


function Recipe() {
  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/645147/information?apiKey=5e79fd42e3204367a69b566ee1114b6d`)
    const detailData = await data.json()
    setDetails(detailData)
    console.log(details);
  }
  useEffect(() => {
    fetchDetails()
  }, [params.name])
  return (
    <DetailWrapper>
      <div>
        <h2>
          {details.title}
        </h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? 'active' : ''} onClick={() => { setActiveTab('instructions') }}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? 'active' : ''} onClick={() => { setActiveTab('ingredients') }}>Ingredients</Button>
        {activeTab === "instructions" && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}

      </Info>
    </DetailWrapper>
  )
}
const DetailWrapper = styled.div`

  margin:10rem 0rem 5rem;
  display:flex;
  .active{
    background:linear-gradient(35deg,#414141,#313131);
    color:white;
  }
  h2{
    margin-bottom: 2rem;
    }
  li{
    font-size: 1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top:2rem;
  }
    `
const Button = styled.button`
    padding:1rem;
    color:#313131;
    background:white;
    border:2px solid black;
    margin-right:2rem;
    font-weight: 600;
    `
const Info = styled.div`
    margin-left:10rem;
    `
export default Recipe