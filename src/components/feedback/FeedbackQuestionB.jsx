import React, { useState} from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startFeedbackTest, removeAnswers } from "../../services/actions/feedbackAction";
import axios from 'axios';
import { REACT_APP_API_URL } from "../../constants";
import parse from 'html-react-parser';

import Footer from "../widgets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import iconquestion from "../../img/icon-question.svg";
import Loader from '../widgets/Loader';

const FeedbackQuestion = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    // TO get the code from redux-store
    const codeData = useSelector((state) => state.initiatorDetail);
    let code = codeData.code;

    // To get the question data from redux-store
    const select = useSelector((state) => state.feedbackReducer);
    let current = select.currentQuestion;
    let last = select.questionData.length;
    let question = select.questionData[current];
    let progress = (current + 1) * 10;

    if(question.knowledege_que_1 === '' && question.knowledege_que_2 === '' && question.knowledege_que_3 === '')
    {
        // dispatch(startFeedbackTest(select.questionData, current + 1));
        // history.push('/feedback-test-a');

        if(props.location.type === 'next'){
            dispatch(startFeedbackTest(select.questionData, current + 1));
            history.push('/feedback-test-a');
        }else{            
            dispatch(removeAnswers(current));
            history.push('/feedback-test-a');
        }    
    }
    

    // To get the initiator detail from the redux-store.
    const selectorData = useSelector((state) => state.initiatorDetail);

    const [Load, setLoad] = useState({loading:false});

    const nextStep = () => {
        if(current === (last-1)){
            setLoad({ loading: true });
            let answerData = select.answerData;

            const formData = {
                user_id: selectorData.data._id,
                code: code,
                answer: answerData
            };
            let ApiURL = REACT_APP_API_URL+"feedback_store/";

            axios.post(ApiURL, formData).then(res => {
                const resp = res.data;
                if(resp.status === 'success'){
                    setTimeout(() => {
                        setLoad({ loading: false });
                        history.push("/success");
                    }, 2000);

                }else{
                    history.push("/feedback-start/"+code);
                }
            }).catch(err =>{
                history.push("/feedback-start/"+code);
            });
        }else{
            dispatch(startFeedbackTest(select.questionData, current + 1));
            history.push("/feedback-test-a");
        }
    }

    const goPrevious = () => {
        dispatch(removeAnswers(current));
        history.push("/feedback-test-a");
    }

    
    return (
        <div>
            <ProgressBar className="topProgressBar" now={progress} />
            <div>
                {Load.loading ? <Loader /> : 
                <Container  className="mt-4 mb-5">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <h6 className="text-secondary text-center fs-14 textopacity questionCount">Question {current + 1}/10</h6>
                                    </Col>
                                </Row>

                                {typeof question !== 'undefined' ?
                                    <Card className="mt-5 border-0" style={{ width: "100%", background:'#F6F7F8' }}>
                                        <Card.Body style={{ padding: "2.625rem 1.2rem 1.25rem 2.625rem" }} >
                                            <Card.Title className="fs-22 fSb mb-4">
                                                {typeof question.knowledege_label !== 'undefined' ?
                                                    <strong>
                                                        <img src={iconquestion} alt="iconquestion" style={{ margin: "-7px 1rem 0 0" }} />
                                                        {question.knowledege_label}
                                                    </strong>
                                                    :
                                                    ''
                                                }
                                            </Card.Title>

                                            {typeof question.knowledege_que_1 !== 'undefined' ?
                                                <Card.Text className="textopacity letter-spacing-0 fs-18">
                                                    {parse(question.knowledege_que_1)}
                                                </Card.Text>
                                            :
                                                ''
                                            }

                                            {typeof question.knowledege_que_2 !== 'undefined' ?
                                                <Card.Text className="textopacity letter-spacing-0 fs-18">
                                                    {parse(question.knowledege_que_2)}
                                                </Card.Text>
                                            :
                                                ''
                                            }

                                            {typeof question.knowledege_que_3 !== 'undefined' ?
                                                <Card.Text className="textopacity letter-spacing-0 fs-18">
                                                    {parse(question.knowledege_que_3)}
                                                </Card.Text>
                                            :
                                                ''
                                            }
                                            
                                            <p className="border-top border-2 mt-4"></p>
                                            {typeof question.knowledege_que_src !== 'undefined' ?
                                                <Card.Link className="text-secondary-666666" href="#">
                                                    {parse(question.knowledege_que_src)}
                                                </Card.Link>
                                            :
                                                ''
                                            }
                                        </Card.Body>
                                    </Card>
                                    :
                                    <Redirect to={"/feedback-start/"+(code)} />
                                }

                                <Row className="mt-5 justify-content-center">
                                    <Col>
                                        <Container fluid className="pl-4 pr-4">
                                            <Row>
                                                <Col xs={6} className="pr-2 mt-2">
                                                    <Button className="w-100" variant="outline-primary" onClick={goPrevious} >
                                                        Go back
                                                    </Button>
                                                </Col>
                                                <Col xs={6} className="pl-2 mt-2">
                                                    <Button className="w-100" variant="primary" onClick={nextStep}>
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
                }
            </div>
        </div>
    );
};

export default FeedbackQuestion;
