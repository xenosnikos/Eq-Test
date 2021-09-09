import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Footer from "./widgets/Footer";
import star from "../img/star.svg";
import { FacebookShareButton, EmailShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import { FacebookIcon, EmailIcon, TwitterIcon, WhatsappIcon } from "react-share";


const Share = () => {
    const history = useHistory();
    const myselector = useSelector((state) => state.initiatorDetail);

    let code = myselector.code;

    const currentURL = window.location.origin+"/feedback-start/"+code;
 
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
        setTimeout(() => {
            history.push("/final-result/"+code);
        }, 500);
    };

    return (
        <Container className="mt-4 mb-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={5}>
                    <Container fluid>
                        <Row>
                            <Col className="p-0">
                                <p className="text-center mb-5">
                                    <img src={star} alt="star"/>
                                </p>
                                <h4 className="text-center fs-28 fSb">
                                   Last step: Ask for feedback
                                </h4>
                                <h6 className="mt-4 text-center fs-18 lh-30 letter-spacing-0 text-a2a2a2">
                                    Share this link with people in your life, and ask for their (brutal but loving) honesty. The more opinions you gather, the stronger you'll activate your cool self-growth superpowers.
                                </h6>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="mt-5">
                                <Form>
                                    <Form.Group>
                                        <Form.Control size="lg" type="text" ref={textAreaRef} readOnly value={currentURL} className="text-center border-0 fM"/>
                                        <br />
                                    </Form.Group>
                                    {document.queryCommandSupported('copy') &&    
                                    <div className="text-center">
                                    {/* Copy and share Link */}
                                        <Button variant="primary" size="lg" block onClick={copyToClipboard}>
                                            Copy Link & See My Results
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
                                <br/>
                                <p className="border-top border-2 w-50 m-auto"></p>
                            
                                <br/>
                                <p className="text-center w-75 m-auto fs-14 fR lh-22 text-666">"We all need people to give us feedback. That's how we improve" – Bill Gates</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
};

export default Share;
