import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Capitalize } from "./widgets/Common";
import axios from 'axios';
import { REACT_APP_API_URL } from "../constants";

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import star from '../img/star.svg';
import iconcloud from '../img/icon-cloud.svg';
import iconhourse from '../img/icon-hourse.svg';
import Footer from "./widgets/Footer";

const Test = () =>{
    const history = useHistory();
    const codeData = useSelector((state) => state.initiatorDetail);
    let code = codeData.code;

    const selectorData = useSelector((state) => state.initiatorDetail);

    const select = useSelector((state) => state.feedbackReducer);
    let ansData = select.answerData;

    useEffect(() => {
        const getData = () => {
            const formData = {
                user_id: selectorData.data._id,
                code: code,
                answer: ansData
            };
            let ApiURL = REACT_APP_API_URL+"feedback_store/";

            axios.post(ApiURL, formData).then(res => {
                const resp = res.data;
                if(resp.status === 'success'){
                    console.warn("Submitted successfully");
                }else{
                    console.warn("Error:",resp.message);
                }
            }).catch(err =>{
                console.warn("Error:",err);
            });
        }

        // To get the initiator user details api.
        getData();

    }, [ansData,selectorData, code]);

    const username = selectorData.data.username;
    localStorage.setItem('username',username);
    return(
        <Container className="mt-4">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Container fluid className="p-0">
                        <Row>
                            <Col xs={12} md={12} className="text-center">
                                <Container fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <p className="text-center mb-5"><img src={star} alt="star" /></p>
                                            <h3 className="fs-28 fSb">Extra karma points for you today!</h3>
                                            <h6 className="text-secondary mt-3 textopacity fs-18">Thanks for taking the time to provide your honest feedback—it'll make a huge difference. </h6>
                                            <h6 className="text-secondary mt-3 textopacity fs-18">Curious about your own emotional intelligence? Take the quiz and start your journey!"</h6>

                                            <Button className="btn-primary d-block btn-lg w-100 mt-5" onClick={()=>{history.push('/')}} style={{height:'84px'}}>
                                                <span className="text-white d-block">Start My EQ Test</span>
                                                <small style={{color:'rgba(255, 255, 255, 0.7)'}}>Takes 5 minutes</small>
                                            </Button>
                                        </Col>

                                        <Col xs={6} className="text-center border-right mt-5">
                                            <span className="d-flex rounded-circle m-auto justify-content-center align-items-center" style={{width:'124px', height:'124px', background:'#D7EAFD'}}>
                                                <img src={iconcloud} alt="iconcloud" width="40" height="40" />
                                            </span>
                                            <span className="mt-2 d-block textopacity fs-14">Your answers are 100% anonymous </span>
                                        </Col>

                                        <Col xs={6} className="text-center mt-5">
                                            <span className="d-flex rounded-circle m-auto justify-content-center align-items-center" style={{width:'124px', height:'124px', background:'#E6D9EC'}}>
                                                <img src={iconhourse} alt="iconhourse" width="40" height="40" />
                                            </span>
                                            <span className="mt-2 d-block textopacity fs-14">Results will be sent to 
                                                <strong>
                                                    {typeof username === 'undefined' ? 
                                                        <span> [INITIATOR NAME]</span> 
                                                        :
                                                        <span> {Capitalize(username)} </span>
                                                    }
                                                </strong>
                                                once 3 participants complete the questionnaire
                                            </span>
                                        </Col>

                                    </Row>
                                </Container>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-5">
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Footer />  
        </Container>
    );
}

export default Test;