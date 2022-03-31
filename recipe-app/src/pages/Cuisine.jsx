/* eslint-disable no-unused-vars */
import React from 'react'
import Category from '../components/Category'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7a907c7d1867444eb15805d0ffb9b287&cuisine=${name}`)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }
  useEffect(() => {
    getCuisine(params.type)
    console.log(params.type);
  }, [params.type])
  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )

      })
      }
    </Grid>
  )
}
const Grid = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;
`
const Card = styled.div`
img{
  widht:100%;
  border-radius:2rem;

}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}`
export default Cuisine