import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from 'html-react-parser';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import iconquestion from "../../img/icon-question.svg";

const QuestionSlider= (props) =>{
    const myselector = useSelector((state) => state.initiatorReducer);

    let question = myselector.answerData;


    return (
        <Container className="mt-4 mb-5">
            <Row className="justify-content-md-center">
                {typeof question !== "undefined" ? 
                <Col xs={12} md={6}>
                    {question.map((dat, index) => (
                        <Container fluid key={"question"+index}>
                            <Row>
                                <Col>
                                    <h6 className="text-a2a2a2 text-center fs-14 questionCount mb-3">Question {index + 1}/10</h6>
                                </Col>
                            </Row>

                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <h4 className="text-center fs-28 fSb text-black">
                                        {dat.ques}
                                    </h4>
                                </Col>
                            </Row>

                            <Row className="mt-5 mb-5 justify-content-center">
                                <Col xs={12} md={10}>
                                    <Container fluid>
                                        <Row>
                                            <Col xs={12}>
                                            <ListGroup horizontal className="dot_slider">
                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '0' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '0' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>0</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '1' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span> 
                                            {dat.answer === '1' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>1</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '2' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '2' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>2</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '3' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '3' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>3</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '4' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '4' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>4</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '5' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                           {dat.answer === '5' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>5</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '6' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '6' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>6</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '7' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '7' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>7</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '8' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '8' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>8</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '9' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '9' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>9</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item className={"rounded-circle text-center " + (dat.answer === '10' ? 'active' : '')}>
                                            <span className="horizentalBar rounded-circle" style={{height:'8px', width:'8px', margin:'auto'}}></span>
                                            {dat.answer === '10' ? 
                                                <strong>You</strong>
                                                :
                                                <span className="customTooltip">
                                                    <strong>10</strong>
                                                </span>
                                            }
                                        </ListGroup.Item>
                                    </ListGroup>
                                            </Col>
                                            <Col xs={6} md={6}>
                                    <p className="text-a2a2a2 fs-14 fSb letter-spacing-0 mt-4">
                                        <strong>{dat.resLeft}</strong>
                                    </p> 
                                </Col>
                                <Col xs={6}  md={6}>
                                    <p className="text-right text-a2a2a2 fs-14 fSb letter-spacing-0 mt-4">
                                        <strong>{dat.resRight}</strong>
                                    </p>
                                </Col>

                                        </Row>
                                    </Container>
                                
                                   
                                </Col>
                            </Row>

                            

                            <Card className="mt-5 border-0" style={{ width: "100%", background: "#F6F7F8" }} >
                                <Card.Body style={{ padding: "2.625rem 1.2rem 1.25rem 2.625rem" }}>
                                    <Card.Title className="fs-22 fSb mb-4">
                                        <strong>
                                            <img src={iconquestion} alt="iconquestion" style={{ margin: "-7px 1rem 0 0" }} />
                                            {parse(dat.knowledege_result_lbl)}
                                        </strong>
                                    </Card.Title>

                                    <Card.Text className="fs-14 text-secondary-666666 fR">
                                        {parse(dat.knowledege_result)}
                                    </Card.Text>

                                    
                                    <p className="border-top border-2"></p>
                                    
                                    
                                    
                                    <Card.Link className="text-secondary-666666" href="#">
                                        {parse(dat.knowledege_que_src)}
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            {index === 9 ?
                            ''
                            :
                            <p className="border-top border-2 mb-5 mt-6"></p>
                            }
                        </Container>
                    ))}
                </Col>
                :
                <Redirect to="/" />
                }
            </Row>
        </Container>
    );
}

export default QuestionSlider;