import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaClock, FaMoneyCheck, FaStar, FaTeeth } from 'react-icons/fa';

const RightSideNav = ({course}) => {
    // console.log(course);
    const {id, title, price, author, details, rating, image_url,lecture, hour}= course;
    return (
        <div>
            <div className='mt-5'>
            <Card className="mb-2">
            <Card.Header className='d-flex justify-content-between align-items-center'>

<div className='d-flex text-center text-success'>
<Card.Title>{title}</Card.Title>
</div>
</Card.Header>
      
      <Card.Body>
        
        <Card.Img variant="top" src={image_url} style={{height:'200px'}} />
        <Card.Text className='mt-3'>
          {
            details.length > 250 ?
            <p className='text-success'>{details.slice(0, 250) + '...'} <Link to={`/course/${id}`} style={{textDecoration:'none', color:'coral', fontWeight:'600'}}>Read More</Link> </p>
            :
            <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Header className='d-flex justify-content-between align-items-center'>

        <div className='d-flex'>
        <Image src={author?.img} style={{height:'60px'}} roundedCircle className='me-3'>
        </Image>
        <div>
            <p className='mb-0'><small style={{color:'#48C9B0',fontWeight:'600'}}> By {author?.name}</small></p>
            <p><small style={{color:'#48C9B0',fontWeight:'600'}}>Start : {author?.start_date}</small></p>
        </div>
        </div>
        <div>
            <p style={{color:'#48C9B0',fontWeight:'600'}}><FaTeeth></FaTeeth> {lecture} Lectures</p>
            <p style={{color:'#48C9B0',fontWeight:'600'}}><FaClock></FaClock> {hour} hrs</p>
            
        </div>
      </Card.Header>
      <Card.Footer className="d-flex justify-content-between">
        <div className=''>
            <FaStar className=' me-2'style={{color:'#48C9B0',fontWeight:'600'}}></FaStar>
            <span style={{color:'#48C9B0',fontWeight:'600'}}>{rating.number}</span>
        </div>
        <div style={{color:'#48C9B0',fontWeight:'600'}}>
         <FaMoneyCheck></FaMoneyCheck> 
          <span > Buy : {price}$</span>
        </div>
      </Card.Footer>
    </Card>
        </div>
        </div>
    );
};

export default RightSideNav;