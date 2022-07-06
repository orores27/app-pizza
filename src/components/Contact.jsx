import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={6}>
                        <h1>Pizza Delicious</h1>
                        
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius delectus dolore ratione, earum quam eligendi sequi. Nam facilis eveniet earum, magnam quod officia libero odit provident maiores doloribus ratione, itaque vero fuga assumenda dolorem illo accusamus? Eum rem ea recusandae consequatur illo voluptatum inventore doloribus voluptates, adipisci nihil numquam distinctio, commodi, aliquam suscipit magnam! Aperiam aliquam necessitatibus repudiandae inventore rerum reiciendis animi. Ut, iusto totam architecto quibusdam ducimus, obcaecati dolor laboriosam fugiat quia a nesciunt distinctio dolore, possimus corrupti culpa cumque nisi amet. Quo quaerat amet explicabo. Assumenda saepe voluptatem provident? Repellendus nobis qui voluptate exercitationem. Quia, odio reprehenderit.</p>

                        <Table className='text-center' striped bordered hover>
                            <thead>
                                <tr className='bg-warning'>
                                <th colSpan={3}>-- Nos coordonnées --</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><FiPhoneCall/></td>
                                    <td>Téléphone</td>
                                    <td>01 23 45 67 89</td>
                                    
                                </tr>
                                <tr>
                                    <td><ImMobile/></td>
                                    <td>Portable</td>
                                    <td>01 98 76 54 32</td>
                                    
                                </tr>
                                <tr>
                                    <td><AiOutlineMail/></td>
                                    <td >Email</td>
                                    <td>contact@delicious.com</td> 
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                    <img src="images/Black_pizza-logo.jpg" alt="farmhouse" className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;