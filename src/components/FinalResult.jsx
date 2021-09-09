import React, { useEffect, useState, useRef } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { REACT_APP_API_URL } from "../constants";
import { FacebookShareButton, EmailShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import { FacebookIcon, EmailIcon, TwitterIcon, WhatsappIcon } from "react-share";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import FinalSlider from "./widgets/FinalSlider";
import iconfile from "../img//icon-file.svg";
import Footer from "./widgets/Footer";

const FinalResult = () => {
    let { id } = useParams();
    const history = useHistory();
    const [copySuccess, setCopySuccess] = useState('');
    const [data, setData] = useState();
    const [person,setPerson] = useState(0);
    const currentURL = window.location.origin+"/feedback-start/"+id;
    const textAreaRef = useRef(null);

        // To get user detail using useEffect
    useEffect(() => {
        const getData = () => {
            let ApiURL = REACT_APP_API_URL+"final_result/"+id;
            axios.get(ApiURL).then(res => {
                const resp = res.data;
                if(resp.status === "success"){
                    setData(feedback(resp.data[0]));
                }else{
                    console.warn("Error:",resp.message);
                }
            }).catch(err =>{
                console.warn("Error:",err);
            });
        }

        // To get the initiator user details api.
        getData();

    }, [id, history]);

    

    const feedback = (fedata) =>{
        const question = fedata.answer.map((iniAns) => {
            iniAns.feedCount = {
                a0: 0,
                a1: 0,
                a2: 0,
                a3: 0,
                a4: 0,
                a5: 0,
                a6: 0,
                a7: 0,
                a8: 0,
                a9: 0,
                b1: 0
            }
            return iniAns;
        })
        let feed = fedata.feedbacks;
        setPerson(feed.length);
        for(let i = 0; i < feed.length; i++){
            var feedAnswer = feed[i].answer;
            
            for(let j = 0; j < feedAnswer.length; j++){
                if(feedAnswer[j].answer === '0'){
                    question[j].feedCount.a0++;
                }else if(feedAnswer[j].answer === '1'){
                    question[j].feedCount.a1++;
                }else if(feedAnswer[j].answer === '2'){
                    question[j].feedCount.a2++;
                }else if(feedAnswer[j].answer === '3'){
                    question[j].feedCount.a3++;
                }else if(feedAnswer[j].answer === '4'){
                    question[j].feedCount.a4++;
                }else if(feedAnswer[j].answer === '5'){
                    question[j].feedCount.a5++;
                }else if(feedAnswer[j].answer === '6'){
                    question[j].feedCount.a6++;
                }else if(feedAnswer[j].answer === '7'){
                    question[j].feedCount.a7++;
                }else if(feedAnswer[j].answer === '8'){
                    question[j].feedCount.a8++;
                }else if(feedAnswer[j].answer === '9'){
                    question[j].feedCount.a9++;
                }else {
                    question[j].feedCount.b1++;
                }
            }
        }

        return question;
    }

    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };
    return (
        <Container className="mt-4">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <p className="text-center mb-5">
                                    <img src={iconfile} alt="iconfile" />
                                </p>
                                <h4 className="text-center fs-28 fSb">
                                    {person} of your friends have completed the test.
                                </h4>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-5">
                                <Form>
                                    <Form.Group>
                                        <Form.Control size="lg" type="text" ref={textAreaRef} readOnly value={currentURL} className="text-center fs-16" />
                                        <br />
                                    </Form.Group>

                                    {document.queryCommandSupported('copy') &&    
                                        <div className="text-center">
                                            <Button variant="primary" size="lg" onClick={copyToClipboard} block>
                                                Copy Link
                                            </Button>
                                            <p className="text-center">{copySuccess}</p>
                                        </div>
                                    }

                                    <Form.Group className="mt-5 text-center">
                                        <TwitterShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} title="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here:" style={{padding:"0px 5px"}} >
                                            <TwitterIcon logofillcolor="white" size={40} round={true} />
                                        </TwitterShareButton>

                                        <WhatsappShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} title="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here: " style={{padding:"0px 5px"}} >
                                            <WhatsappIcon logofillcolor="white" size={40} round={true} />
                                        </WhatsappShareButton>
                                        
                                        <FacebookShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} quote="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here:" style={{padding:"0px 5px"}} >
                                            <FacebookIcon logofillcolor="white" size={40} round={true} />
                                        </FacebookShareButton>

                                        <EmailShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} subject="Sharing a link to provide a feedback" body="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here:" separator=" " style={{padding:"0px 5px"}} >
                                            <EmailIcon logofillcolor="white" size={40} round={true} />
                                        </EmailShareButton>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="border-top border-2"></p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <FinalSlider questionData = {data} ></FinalSlider> 
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <p className="text-center mb-5">
                                    <img src={iconfile} alt="iconfile" />
                                </p>
                                <h4 className="text-center fs-28 fSb">
                                    {person} of your friends have completed the test.
                                </h4>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-5">
                                <Form>
                                    <Form.Group>
                                        <Form.Control size="lg" type="text" ref={textAreaRef} readOnly value={currentURL} className="text-center fs-16" />
                                        <br />
                                    </Form.Group>

                                    {document.queryCommandSupported('copy') &&    
                                        <div className="text-center">
                                            <Button variant="primary" size="lg" onClick={copyToClipboard} block>
                                                Copy Link
                                            </Button>
                                            <p className="text-center">{copySuccess}</p>
                                        </div>
                                    }

                                    <Form.Group className="mt-5 text-center">
                                        <TwitterShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} title="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here:" style={{padding:"0px 5px"}} >
                                            <TwitterIcon logofillcolor="white" size={40} round={true} />
                                        </TwitterShareButton>

                                        <WhatsappShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} title="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here: " style={{padding:"0px 5px"}} >
                                            <WhatsappIcon logofillcolor="white" size={40} round={true} />
                                        </WhatsappShareButton>
                                        
                                        <FacebookShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} quote="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here:" style={{padding:"0px 5px"}} >
                                            <FacebookIcon logofillcolor="white" size={40} round={true} />
                                        </FacebookShareButton>

                                        <EmailShareButton windowWidth={window.screen.availWidth} windowHeight={window.screen.availHeight} className="border-0 bg-transparent" url={currentURL} subject="Sharing a link to provide a feedback" body="Help me become more emotional intelligent by answering 10 questions about me. You could help me a lot by providing honest feedback. Fill-out my honest feedback questionnaire here:" separator=" " style={{padding:"0px 5px"}} >
                                            <EmailIcon logofillcolor="white" size={40} round={true} />
                                        </EmailShareButton>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="border-top border-2"></p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row> 
            <Footer />
        </Container>
    );
};

export default FinalResult;
