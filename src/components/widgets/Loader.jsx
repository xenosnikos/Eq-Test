import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import bannerDesktop from '../../img/desktop/Banner_desktop.svg';
import bannerMobile from '../../img/mobile/Banner_mobile.svg';

const Loader = () =>{
    return(
        <Container className="mt-4">
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <Container fluid>
                        <Row>
                            <Col><h4 className="text-center fSb fs-24">Submitting the result...</h4></Col>
                        </Row>

                        <Row>
                            <Col className="text-center mt-5"><Spinner animation="border" variant="primary" size="lg" /></Col>
                        </Row>

                        <Row>
                            <Col className="text-center d-none d-md-block">
                            <img src={bannerDesktop} alt="bannerDesktop" className="mt-5"/> 
                            </Col>
                            <Col className="text-center d-md-none d-sm-block"> 
                            <img src={bannerMobile} alt="bannerMobile" className="mt-5" />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Loader;