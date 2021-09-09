import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { startFeedbackTest } from "../../services/actions/feedbackAction";
import { get_initiator_detail } from "../../services/actions/initiatorDetail";
import { initiator_code } from "../../services/actions/initiatorDetail";
import { Capitalize } from "../widgets/Common";
import { REACT_APP_API_URL } from "../../constants";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import heroImgDesktop from '../../img/desktop/Hero image.svg';
import heroImgMobile from '../../img/mobile/Hero image.svg';
import iconcloud from '../../img/icon-cloud.svg';
import iconhourse from '../../img/icon-hourse.svg';
import iconfooter from '../../img/Footer.svg';



const FeedbackStart = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams();
    const currentURL = "/feedback-start/"+id;

    // To get user detail using useEffect
    useEffect(() => {
        const getUserName = () => {
            let ApiURL = REACT_APP_API_URL+"userdetail/"+id;
            axios.get(ApiURL).then(res => {
                const resp = res.data;
                if(resp.status === "success"){
                    dispatch(get_initiator_detail(resp.data));
                    dispatch(initiator_code(id));
                }else{
                    history.push("/");
                }
            }).catch(err =>{
                history.push("/");
            });
        }

        // To get the initiator user details api.
        getUserName();

    }, [id, dispatch, history]);

    const selectorData = useSelector((state) => state.initiatorDetail);
    const username = selectorData.data.username;
    localStorage.setItem('username',username);

    // To get the feedback questions for the initiator user api.
    const getData = () =>{
        let ApiURL = REACT_APP_API_URL+"get_questions/feedback";
        axios.get(ApiURL).then(res => {
            const resp = res.data;
            if(resp.status === 'success'){
                dispatch(startFeedbackTest(resp.data, 0));
                history.push("/feedback-test-a");
            }else{
                history.push(currentURL);
            }
        }).catch(err =>{
            history.push(currentURL);
        });
    }
    
    return(
        <Container className="mt-4" fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} md={12}>
                    <Container fluid className="p-0 theme-body-width">
                        <Row>
                            <Col xs={12} md={6} className="text-center d-block d-md-none mb-5">
                                <Container fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <img src={heroImgMobile} alt="heroImgMobile" width="100%"/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>

                            <Col xs={12} md={6} className="text-center">
                                <Container fluid className="pr-0 pl-0 pt-5">
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={10} className="pr-3 pl-3">
                                            <h3 className="fSb fs-40">
                                                {typeof username === 'undefined' ? 
                                                    <span>[INITIATOR NAME]</span> 
                                                    :
                                                    <span>{Capitalize(username)} </span>
                                                }
                                                 is working on emotional intelligence and needs your help
                                            </h3>

                                            <h6 className="text-a2a2a2 lh-30 mt-3 fs-18">Take a quick 5 minute survey to help 
                                            {typeof username !== 'undefined' &&
                                                <span> {Capitalize(username)} </span>
                                            }
                                             with honest feedback on their social skills.</h6>
                                            <Container fluid>
                                                <Row className="justify-content-center">
                                                    <Col md={12}>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col xs={12}>
                                                                <Button className="btn-primary d-block btn-lg w-100" style={{margin:'3rem auto 0', height:'84px'}} onClick={getData}>
                                                
                                                    
                                                                        {typeof username === 'undefined' ? 
                                                                            <span className="text-white d-block">Fill out answers for [Initiator name]</span>
                                                                            :
                                                                            <span className="text-white d-block">Fill out answers for {username}</span>
                                                                        }
                                                                    
                                                                    <small style={{color:'rgba(255, 255, 255, 0.7)'}}>Takes 5 minutes</small>
                                                                </Button>
                                                                </Col>

                                                                
                                                            </Row>

                                                            <Row className="justify-content-center">
                                                            <Col xs={6} md={5} className="text-center border-right mt-5">
                                                                <span className="d-flex rounded-circle m-auto justify-content-center align-items-center" style={{width:'124px', height:'124px', background:'#D7EAFD'}}>
                                                                    <img src={iconcloud} alt="iconcloud" width="40" height="40" />
                                                                </span>
                                                                <span className="mt-2 d-block textopacity fM fs-14" style={{lineHeight:"22px"}}>Your answers are 100% anonymous </span>
                                                            </Col>

                                                            <Col xs={6} md={5} className="text-center mt-5">
                                                                <span className="d-flex rounded-circle m-auto justify-content-center align-items-center" style={{width:'124px', height:'124px', background:'#E6D9EC'}}>
                                                                    <img src={iconhourse} alt="iconhourse" width="40" height="40" />
                                                                </span>
                                                                <span className="mt-2 d-block textopacity fM fs-14" style={{lineHeight:"22px"}}>Results will be sent to  
                                                                    <strong>
                                                                        {typeof username === 'undefined' ? 
                                                                            <span> [INITIATOR NAME]</span> 
                                                                            :
                                                                            <span> {Capitalize(username)} </span>
                                                                        }
                                                                    </strong> once 3 participants complete the questionnaire
                                                                </span>
                                                            </Col>
                                                            </Row>
                                                        </Container>
                                                    
                                                    </Col>
                                                </Row>
                                            </Container>
                                            
                    
                                        </Col>

                                       

                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <p className="fs-14 bg-white mb-0 footer mt-6 text-center text-secondary letter-spacing-0 textopacity">
                                                <span>
                                                    <img src={iconfooter} alt="iconfooter" style={{margin:'-7px 0 0 0'}}/>
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>

                            <Col xs={12} md={6} className="text-center d-none d-md-block">
                                <Container fluid className="pr-0 pl-0">
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={10} className="pl-0">
                                            <img src={heroImgDesktop} alt="heroImgDesktop" className="img-fluid"/>
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
        </Container>
        
    );
}

export default FeedbackStart;