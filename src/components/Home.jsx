import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { startTest } from "../services/actions/initiatorAction";
import { REACT_APP_API_URL } from "../constants";
import { toast } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import bannerhome from '../img/bannerhome.svg';

import logo from '../img/Logo.svg';
import circle1home from '../img/circle_icon1.svg';
import circle2home from '../img/circle_icon2.svg';
import circle3home from '../img/circle_icon3.svg';
import homeowel from '../img/home_owel.svg';
import iconfooter from '../img/Footer.svg';


const Home = () => {
    const dispatch = useDispatch();
    
    const history = useHistory();
    
    const getData = () =>{
        let ApiURL = REACT_APP_API_URL+"get_questions/initiator";
        axios.get(ApiURL).then(res => {
            const resp = res.data;
            if(resp.status === 'success'){
                dispatch(startTest(resp.data, 0));
                history.push("/question-a")
            }else{
                setTimeout(() => {
                    toast.error(resp.message);
                }, 200);
                history.push("/");
            }
        }).catch(err =>{
            setTimeout(() => {
                toast.error("err");
            }, 200);
            history.push("/");
        });
    }

    return(
        <Container fluid className="mb-4">
        
            
        
            <Row className="justify-content-md-center text-center text-md-left" style={{background:'#EEEAFD'}}>
                <Col xs={12} md={12}>
                    <Container className="theme-width homePageIntro">
                        <Row>
                        
                            <Col xs={12} md={12}>
                                <Container fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <img src={logo} alt="ahead" className="mt-6"/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            
                            <Col xs={12} md={6}>
                                <Container fluid className="introSection">
                                    <Row>
                                        <Col xs={12}>
                                    
                                            <h1 className="mt-6">
                                                Ever wondered what others think of you?
                                            </h1>

                                            <h4 className="text-secondary mt-3 textopacity fs-22 fM">Let's get cracking with your personal growth. Rate your own social skills, then let your friends, family and co-workers (anonymously) rate you. </h4>

                                            <Button className="btn-primary d-none d-md-block btn-lg w-75 mt-5 h-84" onClick={getData}>
                                                <span className="text-white d-block">Start Test</span>
                                                <small style={{color:'rgba(255, 255, 255, 0.7)'}}>Takes 5 minutes</small>
                                            </Button>
                                
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>

                            <Col xs={12} md={6}>
                                <Container fluid className="p-0">
                                    <Row>
                                        <Col xs={12} className="p-0">
                                            <img src={bannerhome} alt="bannerhomeImg" className="homeBanner" width="560"/>
                                        </Col>
                                    </Row>
                                    
                                    
                                </Container>
                            </Col>
                                
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row className="d-block d-md-none bg-white" style={{marginTop:'-65px', position:'relative'}}>
                <Col xs={12}>
                    <Button className="btn-primary mt-5 btn-lg w-75 h-84" style={{height:'84px'}} onClick={getData}>
                        <span className="text-white d-block">Start Test</span>
                        <small style={{color:'rgba(255, 255, 255, 0.7)'}}>Takes 5 minutes</small>
                    </Button>
                </Col>
            </Row>

            <Row style={{background:'#ffffff'}} className="justify-content-center">
                <Col md={12}>
                    <Container fluid className="contentSection theme-width">
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h2 className="sectionHeader text-center mt-5 mb-5 fs-40"><strong>How it works</strong></h2>
                            </Col>

                            <Col xs={12} md={4} className="text-center mt-5">
                                <span className="d-flex rounded-circle m-auto justify-content-center align-items-center" style={{width:'124px', height:'124px', background:'#F6F7F8'}}>
                                    <img src={circle1home} alt="Step1" width="40" height="40" />
                                </span>
                                <span className="d-block mt-2 subheading">Step 1</span>
                                <span className="mt-2 d-block textopacity fs-18">Answer questions on <br/>your social capabilities</span>
                            </Col>

                            <Col xs={12} md={4} className="text-center mt-5">
                                <span className="d-flex rounded-circle m-auto justify-content-center align-items-center" style={{width:'124px', height:'124px', background:'#F6F7F8'}}>
                                    <img src={circle2home} alt="Step2" width="40" height="40" />
                                </span>
                                <span className="d-block mt-2 subheading">Step 2</span>
                                <span className="mt-2 d-block textopacity fs-18">Share a link to friends to anonymously rate you on the same set of questions</span>
                            </Col>

                            <Col xs={12} md={4} className="text-center mt-5">
                                <span className="d-flex rounded-circle m-auto justify-content-center align-items-center" style={{width:'124px', height:'124px', background:'#F6F7F8'}}>
                                    <img src={circle3home} alt="Step3" width="40" height="40" />
                                </span>
                                <span className="d-block mt-2 subheading">Step 3</span>
                                <span className="mt-2 d-block textopacity fs-18">Compare your own response to your friends’ honest, 100% anonymous responses</span>
                            </Col>

                            <Col xs="12" className="text-center mt-5 mb-5">
                                <Button className="btn-primary d-block btn-lg w-50 m-auto" onClick={getData}>
                                    <span className="text-white d-block">Start Test</span>
                                    <small style={{color:'rgba(255, 255, 255, 0.7)'}}>Takes 5 minutes</small>
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="mt-5 text-center theme-width">
                        <Row>
                            <Col xs={12} md={6}>
                                <img src={homeowel} alt="homeowel" className="img-fluid mt-5"/>
                            </Col>
                                
                            <Col md={6} className="pl-0 pr-0">
                                <h2 className="text-center fs-40 fSb mt-5"><strong>Before you get started</strong></h2>
                                <h6 className="text-secondary text-center mt-5 textopacity fs-18 fM letter-spacing-0">We take your privacy seriously, 
                                and won't share your info (or responses) with anyone else—even those you 
                                invite to take the test. Friends, family, coworkers, neighbors, pets, 
                                strangers at the bus stop... anyone can share their perceptions! Ready?</h6>

                                <h6 className="text-secondary text-center mt-5 fs-18">– With love, team ahead</h6>
                            </Col>
                        </Row>
                    </Container>
                </Col>   
            </Row>
            <p className="fs-14 bg-white mb-0 footer text-center text-secondary letter-spacing-0 textopacity mt-6">
            <span>
                <img src={iconfooter} alt="iconfooter" style={{margin:'-7px 0 0 0'}}/>
            </span>
        </p>
        </Container>
    );
}

export default Home;