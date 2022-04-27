import React, { Component } from "react";
import ShowAnswers from "./ShowAnswers";

export class Quiz1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      numberOfQues:this.props.numberOfQues ? this.props.numberOfQues:20,
      range:this.props.range ? this.props.range:10,
      operand1: 0,
      operand2: 0,
      operator: null,
      answer: "",
      expression: [],
      answers: [],
      operators:this.props.operators.length ? this.props.operators : ["+", "-", "*", "/"],
      enteredAnswers: [],
    };
  }

  questionHandler = () => {
    let random = Math.floor(Math.random() * this.state.operators.length);
    this.setState(
      {
        count: this.state.count + 1,
        answer: "",
        operand1: Math.trunc(Math.random() * this.state.range) + 1,
        operand2: Math.trunc(Math.random() * this.state.range) + 1,
        operator: this.state.operators[random],
      },
      () => {
        this.setState({
          expression: [
            ...this.state.expression,
            `${this.state.operand1} ${this.state.operator} ${this.state.operand2}`,
          ],
          answers: [
            ...this.state.answers,Math.round(this.getValue(
              this.state.operand1,
              this.state.operand2,
              this.state.operator
            ) * 100) / 100
            ,
          ],
        });
      }
    );
  };
  submitAnswers = () => {
    this.setState(
      {
        enteredAnswers: [...this.state.enteredAnswers, this.state.answer],
      },
      () => {
        this.questionHandler();
      }
    );
  };
  submitQuiz = () => {
    this.setState(
      {
        count: this.state.count + 1,
        enteredAnswers: [...this.state.enteredAnswers, this.state.answer],
      }
    );
  };
  getValue = (value1, value2, operation) => {
    switch (operation) {
      case "+":
        return value1 + value2;
        break;
      case "-":
        return value1 - value2;
        break;
      case "*":
        return value1 * value2;
        break;
      case "/":
        return value1 / value2;
        break;
    }
  };
  handleValueChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Quiz 1</h1>
        <h2>Start Your Quiz Now!!</h2>
        {this.state.count > this.state.numberOfQues ? (
          <ShowAnswers
            questionArr={this.state.expression}
            answerArr={this.state.answers}
            enteredAnsArr={this.state.enteredAnswers}
          />
        ) : this.state.count > 0 ? (
          <>
            <h2>Question {this.state.count}</h2>
            <h3>
              {this.state.operand1} {this.state.operator} {this.state.operand2}{" "}
              = ?{" "}
            </h3>
            <input
              type="Number"
              value={this.state.answer}
              onChange={this.handleValueChange}
            />
            <br />
            <br />
            {this.state.count < this.state.numberOfQues ? (
              <button onClick={() => this.submitAnswers()}>Next</button>
            ) : (
              <button onClick={() => this.submitQuiz()}>Submit</button>
            )}
          </>
        ) : (
          <button onClick={() => this.questionHandler()}>Start Quiz</button>
        )}
      </div>
    );
  }
}

export default Quiz1;
