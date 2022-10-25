import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Course = () => {
    return (
       <Container style={{height:'100vh'}} >
        <Row>
            <Col lg='4'>
                <LeftSideNav></LeftSideNav>
            </Col>

            <Col lg='8'>
                <h4> Right Side</h4>

            </Col>
        </Row>
       </Container>
    );
};

export default Course;