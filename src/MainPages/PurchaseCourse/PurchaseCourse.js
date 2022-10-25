import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaCartPlus } from 'react-icons/fa';

const PurchaseCourse = () => {
    const purchase = useLoaderData();
    const { title, price, author,category_id } = purchase;
    return (
        <div style={{backgroundColor:"skyblue"}}>
            <Container style={{height:'80vh'}} >
            <Row>

                <h2 className='mt-5' style={{color:"coral"}}> Purchase Detais <FaCartPlus></FaCartPlus></h2>
                    <Card style={{ width: '18rem', color:'#09997D ',fontWeight:'500' }} className='mt-5 mb-5'>
                        <Card.Header>{title}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ color:'#09997D ', fontWeight:'500'}}>Course ID: {category_id}</ListGroup.Item>
                            <ListGroup.Item style={{ color:'#09997D ', fontWeight:'500'}}>Price: {price}$</ListGroup.Item>
                            <ListGroup.Item style={{ color:'#09997D ', fontWeight:'500'}}>Author: {author.name}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                
            </Row>

        </Container>
        </div>
    );
};

export default PurchaseCourse;