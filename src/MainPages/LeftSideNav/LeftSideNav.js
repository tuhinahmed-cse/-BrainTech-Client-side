import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './LiftSideNav.css';
import Button from 'react-bootstrap/Button';

const LeftSideNav = () => {
    

     const [categories, setCategories] = useState([]);

     useEffect(() =>{

        fetch('https://b610-lerning-platform-server-side-nine.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='mt-5'>
            <h4 style={{color:'goldenrod'}}> All Course Categories Found :: {categories.length}</h4>
            {
                categories.map(category => <p key={category.id}>
                     <Button variant="outline-success"><Link to={`/category/${category.id}`} className='link' >{category.name}</Link></Button>

                    
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;