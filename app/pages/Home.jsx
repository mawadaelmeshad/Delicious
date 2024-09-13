'use client';
import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBInputGroup } from 'mdb-react-ui-kit';
import Loader from '../components/Loader';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(data => {
                setData(data.recipes); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecipes = data.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(filteredRecipes.length==0){
        return <Loader />
    }

    return (
        <div className="home py-4"> 
            <h3 style={{color:"#4FA512"}} className='text-center mb-4'>Find Delicious Meals ♥ ...</h3>
            <MDBInputGroup tag="form" className='flex w-auto mb-3 mx-16'>
                <input className='form-control' placeholder="Search By Recipe name" aria-label="Search" type='Search' onChange={e => setSearchTerm(e.target.value)} />
            </MDBInputGroup>
            <div className="card-container"> 
                {filteredRecipes.map((recipe) => (
                        <MDBCard key={recipe.id} style={{width:'20rem'}}>
                            <MDBCardImage 
                                src={recipe.image} 
                                position='center' 
                                alt='Card Image' 
                                style={{width:'400px'}}
                            />
                            <MDBCardBody>
                                <MDBCardTitle className='text-black font-bold'>{recipe.name}</MDBCardTitle>
                                <MDBCardText>
                                    {recipe.instructions.slice(0,recipe.instructions.length/1.5)}
                                </MDBCardText>
                                <MDBBtn href={`/recipe/${recipe.id}`} style={{backgroundColor:'#4FA512'}}>Read more ...</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        ))}
            </div>
        </div>
    );
}

export default Home;
