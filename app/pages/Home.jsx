'use client';
import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBInputGroup } from 'mdb-react-ui-kit';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

function Home() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [searchTerm, setSearchTerm] = useState('');

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


    // Determine current items to display based on page
    const indexOfLastRecipe = currentPage * itemsPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
    const currentRecipes = data.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const filteredRecipes = currentRecipes.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (currentRecipes.length === 0) {
        return <Loader />;
    }

    return (
        <div className="home py-4"> 
            <h3 style={{color:"#4FA512"}} className='text-center mb-4 text-2xl'>Find Delicious Meals ♥ ...</h3>
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
                                {recipe.instructions.slice(0, recipe.instructions.length / 1.5).join(' ')}
                            </MDBCardText>
                            <MDBBtn href={`/recipe/${recipe.id}`} style={{backgroundColor:'#4FA512'}}>Read more ...</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalItems={data.length}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Home;
