import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Success from "./components/Success";
import Signup from "./components/Signup";
import FinalResult from "./components/FinalResult";
import QuestionA from "./components/QuestionA";
import QuestionB from "./components/QuestionB";
import Share from "./components/Share";
import FeedbackStart from "./components/feedback/FeedbackStart";
import FeedbackQuestionA from "./components/feedback/FeedbackQuestionA";
import FeedbackQuestionB from "./components/feedback/FeedbackQuestionB";

require('dotenv').config();

const App = ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/question-a" exact component={QuestionA} />
                <Route path="/question-b" exact component={QuestionB} />

                <Route path="/signup" exact component={Signup} />
                <Route path="/share" exact component={Share} />

                <Route path="/feedback-start/:id" exact component={FeedbackStart} />
                <Route path="/feedback-test-a" exact component={FeedbackQuestionA} />
                <Route path="/feedback-test-b" exact component={FeedbackQuestionB} />
                <Route path="/success" exact component={Success} />
                <Route path="/final-result/:id" exact component={FinalResult} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
