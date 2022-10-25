import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNave/RightSideNav';

const Course = () => {

    const allCourse = useLoaderData();

    return (
        <Container  >
            <Row>
                <Col lg='4'>
                    <LeftSideNav></LeftSideNav>
                </Col>

                <Col lg='8'>

                    <h3 className='mt-5' style={{ color: 'goldenrod' }}> Here is Our All Programming Courses </h3>
                    <Row lg="2">
                    {
                        allCourse.map(course => <RightSideNav key={course.id} course={course} ></RightSideNav> )
                    }

                    </Row>


                </Col>
            </Row>
        </Container>
    );
};

export default Course;