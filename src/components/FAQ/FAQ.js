import React from 'react';
import { Container, Row } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <Container>
                <Row>

                    <h1 style={{ color: 'tomato', textAlign: 'center', marginTop: '40px' }}>Frequently Asked Questions</h1>

                    <div>

                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q1. Who we are ?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong> Our tutors are teachers, professors, adjuncts, PhD students, and industry professionals who are all passionate about their areas of expertise and eager to help students learn.
                                We help learners of all ages and stages—from kindergarten through college, continuing education, and career. Our tutors provide empowering, encouraging support to help students complete their assignments, improve their grades, and persist in their studies. Every day, thousands of students share positive feedback about their online tutoring experiences.
                                Our online tutoring platform makes connecting with students (and earning extra income!) simple, convenient, and flexible. </p>
                        </div>
                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }} > Q2. Why You choose our Course ?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong> </p>
                        </div>
                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q3. Our Speciality ?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong>  </p>
                        </div>
                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q4.  We Have Best Lecture?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong> </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default FAQ;