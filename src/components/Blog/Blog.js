import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row>

                    <h1 style={{ color: 'tomato', textAlign: 'center', marginTop: '40px' }}>Question Answer Part</h1>

                    <div>

                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q1. What is Cors ?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong> Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari.Everything starts on the client side, before sending the main request. The client sends a CORS preflight request to a service for resources with parameters in HTTP headers (CORS headers). The service responses using the same headers with different or the same values. The client decides, based on a CORS preflight response, if he can or cannot send the main request to the service. The web browser (client) will throw an error if the response does not meet the requirements of CORS preflight. </p>
                        </div>
                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }} > Q2. Why are you using firebase? What other options do you have to implement authentication? ?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong> Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. Founded in 2011 as a chat API and acquired by Google in 2014, Google Firebase is a platform that now offers active backend as a service (BaaS) for building dynamic web and mobile apps.Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.The list below reviews some common authentication methods used to secure modern systems. 1. Password-based authentication 2. Multi-factor authentication 3. Certificate-based authentication 4. Biometric authentication 5. Token-based authentication </p>
                        </div>
                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q3.  How does the private route work ?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route . So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application. When there is a logged in user, the Home component does not run into the if-else condition's block and renders the actual content of the Home component instead. However, if there is no logged in user, the Home component renders React Router's Navigate component and therefore redirects a user to the Landing page. In the case of a user being on the Home page and logging out by clicking the button, the user will experience a redirect from the protected page. </p>
                        </div>
                        <div >
                            <h2 style={{ color: 'goldenrod', textAlign: 'center', marginTop: '40px' }}> Q4.  What is Node? How does Node work?</h2>
                            <p style={{ color: '#043D1D' }}><strong>Ans:</strong> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user. Node.js being designed without threads doesn't mean you can't take advantage of multiple cores in your environment. Child processes can be spawned by using our child_process.fork() API, and are designed to be easy to communicate with. Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores. </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;