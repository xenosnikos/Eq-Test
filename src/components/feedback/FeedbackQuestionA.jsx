import React, { useState, useRef } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startFeedbackTest, feedbackAnswers, removeAnswers } from "../../services/actions/feedbackAction";
import { Capitalize, stringReplace } from "../widgets/Common";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import Loader from '../widgets/Loader';
import Footer from "../widgets/Footer";

const FeedbackQuestion = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const target = useRef(null);
    const [data, setData] = useState('5');
    const [tool, setTool] = useState(true);
    // TO get the code from redux-store
    const codeData = useSelector((state) => state.initiatorDetail);
    let code = codeData.code;

    // To get the question data from redux-store
    const select = useSelector((state) => state.feedbackReducer);
    let current = select.currentQuestion;
    let last = select.questionData.length;
    let question = select.questionData[current];
    let progress = (current + 1) * 10;
    

    // To get the initiator detail from the redux-store.
    const selectorData = useSelector((state) => state.initiatorDetail);
    const username = selectorData.data.username;

    const [Load, setLoad] = useState({loading:false});

    const nextStep = () => {
        var answerData = question;
        answerData.answer = data;
        dispatch(feedbackAnswers(answerData));

        if(current === (last-1)){
            setLoad({ loading: true });
            setTimeout(() => {
                history.push("/success");
            }, 3000);
        }else{
            // if(question.knowledege_que_1 !== '' || question.knowledege_que_2 !== '' || question.knowledege_que_3 !== '')
            // {  
                setData('5');
                setTool(true);
                history.push({
                    pathname : "/feedback-test-b",
                    type : "next",
                });
                // history.push("/feedback-test-b");
            // }else{
            //     // dispatch(startFeedbackTest(select.questionData, current + 1));
            //     setData('5');
            //     history.push("/feedback-test-a");
            // }
            
        }
    }

    const goPrevious = () => {
        if(current === 0){
            history.push("/feedback-start/"+code);
        }else{
            // dispatch(removeAnswers(current-1));
            dispatch(startFeedbackTest(select.questionData, current - 1));
            // history.push("/feedback-test-a");
            history.push({
                    pathname : "/feedback-test-b",
                    type : "back",
                });
        }
    }

    const setToolTip = () => {
        setTool(false);
    }
    
    return (
        <div>
            {Load.loading ? <Loader /> : 
            <div>
                <ProgressBar className="topProgressBar" now={progress} />
                <Container  className="mt-4 mb-5">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Container fluid>

                                <Row>
                                    <Col>
                                        <h6 className="text-secondary text-center fs-14 textopacity questionCount">Question {current + 1}/10</h6>
                                    </Col>
                                </Row>

                                <Row className="justify-content-md-center">
                                    <Col md="auto">
                                        <h4 className="text-center">
                                            {typeof question !== "undefined" ? 
                                                <strong>
                                                    {stringReplace(question.feedback_que, Capitalize(username))}
                                                </strong> 
                                                :
                                                <Redirect to={"/feedback-start/"+(code)} />
                                            }
                                        </h4>
                                    </Col>
                                </Row>

                                <Row className="mt-5 mb-1">
                                    <Col>
                                        <Form>
                                            <ListGroup horizontal className="barSlider">

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '0' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "100px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '1' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "85px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '2' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "70px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '3' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "55px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '4' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "45px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '5' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "40px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '6' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "45px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '7' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "55px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '8' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "70px", margin: "auto" }} ></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '9' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "80px", margin: "auto" }}></span>
                                                </ListGroup.Item>

                                                <ListGroup.Item className={"flex1 text-center border-0 p-0 align-self-end " + (data === '10' ? 'active' : '')}>
                                                    <span className="horizentalBar" style={{ height: "100px", margin: "auto" }} ></span>
                                                </ListGroup.Item>

                                            </ListGroup>

                                            <Form.Group controlId="formBasicRangeCustom">
                                                <OverlayTrigger key="top" placement="top" target={target.current}   show={tool} overlay={ <Tooltip id="tooltip-top"> Drag slider </Tooltip> }>
                                                    <Form.Control type="range" min="0" max="10" onClick={setToolTip} onTouchStart={setToolTip} step="1" value={data} onChange={e => setData(e.target.value)} custom />
                                                </OverlayTrigger>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={6} md={6}>
                                        <p className="text-black fs-14 letter-spacing-0 lh-20">
                                            {typeof question !== "undefined" ? 
                                                <strong>
                                                    {stringReplace(question.feedback_resLeft, Capitalize(username))}
                                                </strong>
                                                :
                                                <Redirect to={"/feedback-start/"+(code)} />
                                            }
                                        </p>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <p className="text-right text-black fs-14 letter-spacing-0 lh-20">
                                            {typeof question !== "undefined" ?
                                                <strong>
                                                    {stringReplace(question.feedback_resRight, Capitalize(username))}
                                                </strong>
                                                :
                                                <Redirect to={"/feedback-start/"+(code)} />
                                            }
                                        </p>
                                    </Col>
                                </Row>

                                <Row className="mt-5">
                                    <Col xs={6} className="pr-2" >
                                        <Button className="w-100" variant="outline-primary" onClick={goPrevious} >
                                            Go back
                                        </Button>
                                    </Col>
                                    <Col xs={6} className="pl-2">
                                        <Button className="w-100" variant="primary" onClick={nextStep}>
                                            Continue
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </div>
            }
        </div>
    );
};

export default FeedbackQuestion;
