import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    }, [])
    const getPopular = async () => {

        const check = localStorage.getItem("popular")
        if (check != null) {
            setPopular(JSON.parse(check))
        }
        else {

            const api = await fetch(
                "https://api.spoonacular.com/recipes/random?apiKey=5e79fd42e3204367a69b566ee1114b6d&number=9"
            )
            const data = await api.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }
    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
min-height:15rem;
border-radius:2rem;
overflow:hidden;
position:relative;
width:100%;
img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width: 100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index: 10;
    left:50%,
    bottom: 0%;
    transform: translate(0%,70%);
    color:white;
    width:100%;
    text-align:center;
    font-weight: 600;
    font-size: 1rem;
    height: 100%;
    display: flex:
    justify-content:center;
    align-items: center;
}
`
const Gradient = styled.div`
position:absolute;
z-index:3;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7));
`
export default Popular