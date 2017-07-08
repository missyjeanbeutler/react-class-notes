import React, { Component } from 'react'

import calculatorImg from './calculator.png'

class Calculator extends Component {

  // STATE -------- the data representing what's going on in the application. Current posts listed on a facebook post... that would be state. It helps prevent loss of data when a component re-renders
  // data state --- data
  // presentational state --- what we're showing and how

  constructor() { // this is the ES6 constructor function ???? the setup for our component
    super(); // tells component to set itself up ?????????? **************////////// understand this more
    this.state = {
      header: 'Calculator',
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false
    }
  }

  // ????????????????????? **********  //////////////// when something changes in the component and it needs to re-render, does it re-render the entire component? Or just that piece that changed in the component? I think it's the whole component but I'm not positive **************

  updateHeader(newVal) { // this is the prototype function which is why the word function isn't used
   this.setState({ // this will update your state and force a re-render. If you don't use this, React won't recognize there was an update and it won't show on your view
      header: newVal
   })
  }

  setDisplay(num) {
    var newNum = this.state.display === '0' ? num : this.state.display + num;
    this.setState({
      display: this.state.display.length < 13 ? newNum : this.state.display
    })
  }

  setOperator(operator) {
    if ( !this.state.operator ) {
      this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0' });
    }
  }

  calculate() {
    if ( this.state.operator === '' ) { return; }
    var result;

    switch ( this.state.operator ) {
      case '+':
        result = this.state.temp + parseInt(this.state.display, 10);
        break;
      case '-':
        result = this.state.temp - parseInt(this.state.display, 10);
        break;
      case '*':
        result = this.state.temp * parseInt(this.state.display, 10);
        break;
      case '/':
        result = this.state.temp / parseInt(this.state.display, 10);
        break;
      default:
        break;
    }

    this.setState({ display: String(result) });
  }

  clearDisplay() {
    this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
  }

  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={(e) => this.updateHeader(e.target.value)}/>
        {/*anytime there is a change or a DOM listener, use the curly braces to invoke a function, etc...onChange is a react hook. Everything else is vanilla javascript.... ??????????????? ************** /////////// I don't get why there had to be another function inside the curly brackets*/}
        <h1 id="header"> { this.state.header } </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div> 

          <div className="btn clear" onClick={() => this.clearDisplay()}></div>

          <div className="btn zero"  onClick={() => this.setDisplay('0')}></div>
          <div className="btn one"   onClick={() => this.setDisplay('1')}></div>
          <div className="btn two"   onClick={() => this.setDisplay('2')}></div>
          <div className="btn three" onClick={() => this.setDisplay('3')}></div>
          <div className="btn four"  onClick={() => this.setDisplay('4')}></div>
          <div className="btn five"  onClick={() => this.setDisplay('5')}></div>
          <div className="btn six"   onClick={() => this.setDisplay('6')}></div>
          <div className="btn seven" onClick={() => this.setDisplay('7')}></div>
          <div className="btn eight" onClick={() => this.setDisplay('8')}></div>
          <div className="btn nine"  onClick={() => this.setDisplay('9')}></div> 

          <div className="btn equal"    onClick={() => this.calculate()}></div>
          <div className="btn multiply" onClick={ () => { this.setOperator('*'); } }></div>
          <div className="btn divide"   onClick={ () => { this.setOperator('/'); } }></div>
          <div className="btn subtract" onClick={ () => { this.setOperator('-'); } }></div>
          <div className="btn add"      onClick={ () => { this.setOperator('+'); } }></div>
        </div>
      </div>
    )
  }

}

export default Calculator;