import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { initiator_code } from "../services/actions/initiatorDetail";
import validator from 'validator'

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import icontrangel from "../img//icon-trangel.svg";
import Loader from './widgets/Loader';
import Footer from "./widgets/Footer";
import { REACT_APP_API_URL } from "../constants";

const Signup = () => {
    const history = useHistory();
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        username: "",
    });
    const [Load, setLoad] = useState({loading:false});
    const myselector = useSelector((state) => state.initiatorReducer);

    let question = myselector.answerData;
    if(question.length === 0){
        history.push("/");
    }

    



    const inputElement = (event) => {
        event.persist();

        setData(data => ({ ...data,
            [event.target.name]: event.target.value
        }));
    }

    const validateForm = (values) => {
        let isValid = true;
        if (!values.email) {
            isValid = false;
            setError({email:'Email address is required'});
        } else if (!validator.isEmail(values.email)) {
            isValid = false;
            setError({email:'Email address is invalid'});
        }

        if (!values.username) {
            isValid = false;
            setError({email:'Username is required'});
        } 

        return isValid;
    }

    

    const submitForm = (event) => {
        let ApiURL = REACT_APP_API_URL+"signup";
        event.preventDefault()
        if(validateForm(data)){
            setLoad({ loading: true });
            const newUser = {
                email: data.email,
                username: data.username,
                answer: question
            };

            axios.post(ApiURL, newUser).then(res => {
                const resp = res.data;
                if(resp.status === 'success'){
                    setTimeout(() => {
                        setLoad({ loading: true });
                        dispatch(initiator_code(resp.data));
                        history.push("/share");
                    }, 2000);

                }else{
                    history.push("/");
                }
            }).catch(err =>{
                history.push("/");
            });
        }
    }
    
    return (
        <Container>
            {Load.loading ? (
                <Loader />
            ) : (
                <Container className="mt-4 mb-5">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Container fluid>
                            <Form onSubmit = {submitForm}>
                                <Row>
                                    <Col>
                                        <p className="text-center mb-5"><img src={icontrangel} alt="icontrangel" /></p>
                                        <h4 className="text-center fs-28 fSb lh-38">
                                            
                                                Get a personalized report in your inbox once 3 of your
                                                friends fill out their feedback.
                                            
                                        </h4>
                                    </Col>
                                </Row>
                                
                                <Row className="justify-content-md-center">
                                    <Col className="mt-5" xs={12} md={11}>
                                        
                                            <Form.Group className="w-75 m-auto">
                                                <Form.Control className="fR" type="text" required name="username" onChange={inputElement} placeholder="Your Name"/>
                                                <span className="text-danger">{error.username}</span>
                                                <br />
                                                <Form.Control className="fR" type="email" required name="email" onChange={inputElement} placeholder="Email address"/>
                                                <span className="text-danger">{error.email}</span>
                                                <br />
                                                <br />
                                            </Form.Group>

                                                {/* onClick={()=>{history.push("/share");}} */}
                                            <Button type="submit" variant="primary" block style={{height:'58px'}}>
                                                Submit
                                            </Button>

                                            
                                        
                                    </Col>
                                </Row>

                                <Row className="justify-content-md-center">
                                    <Col xs={12} md={9}>
                                    <Form.Group controlId="formBasicCheckbox" className="mt-5 text-secondary">
                                                <Form.Check type="checkbox" required label="We are aware of the deeply personal information you are sharing with us. We won't share your data to others but treat them like our own. By leaving your email you agree to our Terms of Service and Privacy Policy." />
                                            </Form.Group>
                                    </Col>
                                </Row>
                                </Form>
                            </Container>
                           
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            )}
        </Container>
    );
};

export default Signup;
