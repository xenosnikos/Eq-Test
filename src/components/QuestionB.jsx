import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startTest, removeAnswers } from "../services/actions/initiatorAction";
import parse from 'html-react-parser';

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import iconquestion from "../img/icon-question.svg";
import Footer from "./widgets/Footer";

const Question = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const myselector = useSelector((state) => state.initiatorReducer);

    let current = myselector.currentQuestion;
    let question = myselector.questionData[current];
    let last = myselector.questionData.length;
    let progress = (current + 1) * 10;

    if(question.knowledege_que_1 === '' && question.knowledege_que_2 === '' && question.knowledege_que_3 === '')
    {
        if(props.location.type === 'next'){
            dispatch(startTest(myselector.questionData, current + 1));
            history.push('/question-a');
        }else{            
            dispatch(removeAnswers(current));
            history.push('/question-a');
        }        
    }

    

    const nextStep = () => {
        if(current === (last-1)){
            setTimeout(() => {
                history.push("/signup");
            }, 2000);
        }else{
            dispatch(startTest(myselector.questionData, current + 1));
            history.push("/question-a");
        }
        
    }
    const goPrevious = () => {
        dispatch(removeAnswers(current));
        history.push("/question-a");
    }

    return (
        <div>
            <ProgressBar now={progress} className="topProgressBar" />
            <Container className="mt-4 mb-5">
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h6 className="text-secondary text-center fs-14 textopacity questionCount">
                                        Question {current+1}/10
                                    </h6>
                                </Col>
                            </Row>
                            
                            <Card className="mt-5 border-0" style={{ width: "100%", background: "#F6F7F8" }} >
                                <Card.Body style={{ padding: "2.625rem 1.2rem 1.25rem 2.625rem" }}>
                                    <Card.Title className="fs-22 fSb mb-4">
                                        {typeof question !== "undefined" ?
                                            <strong>
                                                <img src={iconquestion} alt="iconquestion" style={{ margin: "-7px 1rem 0 0" }} />
                                                {question.knowledege_label}
                                            </strong>
                                            :
                                            <Redirect to="/" />
                                        }
                                    </Card.Title>

                                    {typeof question !== "undefined" ?
                                        <Card.Text className="textopacity letter-spacing-0 fs-18">
                                        {parse(question.knowledege_que_1)}
                                        </Card.Text>
                                        :
                                        <Redirect to="/" />
                                    }

                                    {typeof question !== "undefined" ?
                                        <Card.Text className="textopacity letter-spacing-0 fs-18">
                                            {parse(question.knowledege_que_2)}
                                        </Card.Text>
                                        :
                                        <Redirect to="/" />
                                    }

                                    {typeof question !== "undefined" ?
                                        <Card.Text className="textopacity letter-spacing-0 fs-18">
                                            {parse(question.knowledege_que_3)}
                                        </Card.Text>
                                        :
                                        <Redirect to="/" />
                                    }

                                    <p className="border-top border-2 mt-4"></p>

                                    {typeof question !== "undefined" ?
                                        <Card.Link className="text-secondary-666666" href="#">
                                            {parse(question.knowledege_que_src)}
                                        </Card.Link>
                                        :
                                        <Redirect to="/" />
                                    }
                                </Card.Body>
                            </Card>

                            <Row className="mt-5 justify-content-center">

                                <Col>
                                <Container fluid className="pl-4 pr-4">
                                    <Row>
                                    <Col xs={6} className="pr-2 mt-2">
                                    <Button className="w-100" onClick={goPrevious} variant="outline-primary" >
                                        Go back
                                    </Button>
                                </Col>
                                <Col xs={6} className="pl-2 mt-2">
                                    <Button className="w-100" variant="primary" onClick={nextStep} >
                                        Continue
                                    </Button>
                                </Col>
                                    </Row>
                                    </Container>
                                </Col>
                                
                                
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    );
};

export default Question;
