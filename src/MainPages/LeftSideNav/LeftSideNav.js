import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LiftSideNav.css';
import Button from 'react-bootstrap/Button';

const LeftSideNav = () => {

     const [categories, setCategories] = useState([]);

     useEffect(() =>{

        fetch('http://localhost:5000/course-categories')
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