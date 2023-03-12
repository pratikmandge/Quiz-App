import React from "react";
import questionsData from "./Data/questionsData";
import Results from "./Data/Results";
import Button from "./components/UI/Button/Button.js";
import Card from "./components/UI/Card/Card.js";
import Banner from "./components/UI/Banner/Banner";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswers: [],
      disabledQuestions: [],
      showResults: false,
      showQuestions: false,
      questionsCorrect: 0,
      afterAnswerSubmit: false,
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleShowResults = this.handleShowResults.bind(this);
    this.handleResetQuiz = this.handleResetQuiz.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handleAnswerSelected(questionIndex, answerIndex) {
    const updatedSelectedAnswers = [...this.state.selectedAnswers];
    updatedSelectedAnswers[questionIndex] = answerIndex;
    this.setState({
      selectedAnswers: updatedSelectedAnswers,
    });
    const updatedDisabledQuestions = [...this.state.disabledQuestions];
    updatedDisabledQuestions[questionIndex] = true;
    this.setState({
      disabledQuestions: updatedDisabledQuestions,
    });
  }

  handleShowResults() {
    const res = this.calculateScore();
    this.setState({
      showResults: true,
      showQuestions: false,
      afterAnswerSubmit: true,
      questionsCorrect: res,
    });
  }

  handleResetQuiz() {
    this.setState({
      selectedAnswers: [],
      disabledQuestions: [],
      showResults: false,
      showQuestions: true,
      questionsCorrect: 0,
      afterAnswerSubmit: false,
    });
  }

  calculateScore() {
    let score = 0;
    for (let i = 0; i < questionsData.length; i++) {
      if (this.state.selectedAnswers[i] === questionsData[i].correctAnswer) {
        score++;
      }
    }
    return score;
  }

  renderResults() {
    const score = this.calculateScore();
    return (
      <Results
        score={score}
        numQuestions={questionsData.length}
        onResetQuiz={this.handleResetQuiz}
      />
    );
  }

  handleStartQuiz() {
    this.setState({
      showQuestions: true,
      afterAnswerSubmit: false,
    });
  }

  render() {
    const allQuestionsAnswered =
      this.state.selectedAnswers.length === questionsData.length;

    return (
      <div className="App wrapper">
        {!this.state.afterAnswerSubmit && <h1>Quizz App</h1>}
        {!this.state.showQuestions && !this.state.afterAnswerSubmit && (
          <div className="startbutton">
            <Button onClick={this.handleStartQuiz}>Start Quiz</Button>
          </div>
        )}
        {this.state.showQuestions &&
          questionsData.map((question, index) => (
            <Card
              key={index}
              question={question.question}
              options={question.answers}
              questionIndex={index}
              selectedAnswer={this.state.selectedAnswers[index]}
              onAnswerSelected={(answer) =>
                this.handleAnswerSelected(index, answer)
              }
              disabled={this.state.disabledQuestions[index]}
            />
          ))}
        {this.state.showQuestions &&
          allQuestionsAnswered &&
          !this.state.showResults && (
            <div className="show_result">
              <Button
                onClick={this.handleShowResults}
                disabled={!allQuestionsAnswered}
              >
                Show Results
              </Button>
            </div>
          )}
        {this.state.showResults && (
          <>
            <Banner
              questionsCorrect={this.state.questionsCorrect}
              numQuestions={questionsData.length}
            />
            {this.renderResults()}
          </>
        )}
      </div>
    );
  }
}

export default App;
