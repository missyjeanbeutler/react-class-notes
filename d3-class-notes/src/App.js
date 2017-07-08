import React, { Component } from 'react';
import './styles/App.css';
import {getEnemies} from './services/enemies.js';
import {getTroops} from './services/troops.js';
import {addTroop} from './services/troops.js';


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      enemies: [],
      troops: [],
      newRecruit: ''
    }

    this.seeEnemies = this.seeEnemies.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.callTroops = this.callTroops.bind(this)
    this.recruitTroop = this.recruitTroop.bind(this)
    
  }

  componentDidMount() { // we want this to load on page load so we put the function in this lifecycle hook as oppose to seeEnemies, that's load on button click so it doesn't have to be with a lifecycle hook
    getTroops().then(res => {
      this.setState({
        troops: res
      })
    })
  }

  // BIND, BIND, BIND! ALWAYS BIND!

  seeEnemies() {
    getEnemies().then(res => {
      this.setState({
        enemies: res
      })
    })
  }

  callTroops() {
    getTroops().then(res => {
      this.setState({
        troops: res
      })
    })
  }

  recruitTroop(event) {
    event.preventDefault()
    if (this.state.newRecruit) {
      addTroop(this.state.newRecruit).then(res => this.callTroops())
    }
  }


  transformMinion() {
  }

  slayLeader() {
  }

  handleChange(e) {
    this.setState({
      newRecruit: e.target.value
    })
  }


  render() {

    const troops = this.state.troops.map((t, i) => {
      if (t.recruit) {
        return <li className='troop' key={i}>{t.recruit}</li>
      }
    })

    const enemies = this.state.enemies.map((e, i) => ( // use parentheses instead of curly braces so you don't have to use the word return. Easier and cleaner when using JSX
      <ul className='army' key={i}>
        <h3>Enemy Army #{e.id}: {e.name}</h3>
        <div className='leader'>
          {e.leader}
        </div>
        <ul className='minions'>
          {e.minions.map((m, i) => (<li className='minion' key={i}>{m.type}</li>))}
        </ul>
      </ul>
    ))

    const message = this.state && this.state.enemies.length < 1 ? "ALL CLEAR" : "";

    return (
      <div className="App">

        {/* Main Defenses */}
        <div className="App-header">
          <h1>Enemies at our gate!</h1>
          <h2>Prepare our defenses!</h2>
          <div className="defenses">
            <div className="defense" id="sentry" onClick={this.seeEnemies}>Sentry<span className="instructions">Click here to see approaching enemies!</span></div>
            <div className="defense" id="captain">Captain<span className="instructions">Fill out Request Form below to recruit new troop!</span></div>
            <div className="defense" id="wizard">Wizard<span className="instructions">Click directly on a minion to cast a spell!</span></div>
            <div className="defense" id="ballista">Ballista<span className="instructions">Blast enemy leader to disperse army!</span></div>
          </div>
        </div>


        {/* Reinforcements */}
        <div className="reinforcements">
          <form type="submit">
            New Recruit Request Form:
            <input id="paperwork" placeholder="Please indicate requested recruit" value={this.state.newRecruit} onChange={this.handleChange}/>
            <button onClick={this.recruitTroop}>Enlist!</button>
          </form>

          <div id="wall">
            <span></span><span id="gate"></span><span></span>
          </div>
        </div>

        <ul className="troops">
          {troops}
        </ul>

        <h1 id="message">{message}</h1>

        {/* Enemy Armies */}
        <div className="enemies">
          {enemies}
        </div>
      </div>
    );
  }
}

export default App;
