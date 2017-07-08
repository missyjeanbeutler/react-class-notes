// This component will always be loaded first out of all the components

import React, { Component } from 'react';
import './App.css';
import Species from './Species.js' // order does not matter

class App extends Component {
  //  state- anything that changes based on user input or something that we don't know ahead of time what it is. Every component has state and you keep track of it in each component.
  constructor() { // initializes the object.
    super()

    this.state = {
      species: [
        {name: 'Dog',
         status: 'Hungry'},
        {name: 'Bird',
         status: 'Hungry'},
        {name: 'Giraffe',
         status: 'Hungry'},
        {name: 'Hippo',
         status: 'Hungry'}
      ],
      userInput: ''
    }

    this.updateUserInput = this.updateUserInput.bind(this)
    this.updateSpecies = this.updateSpecies.bind(this) // this could go in the JSX however, putting it in the constructor function is best practice. Anytime you have an event listener, set the context (bind) in the constructor.
    this.feedAnimal = this.feedAnimal.bind(this)

  }

  updateUserInput(event) {
    this.setState({ // 'this' is supposed to refer to it's component
      userInput: event.target.value
    })
  }

  updateSpecies() {
    const newAnimal = {
      name: this.state.userInput,
      status: 'Hungry'
    }
    this.setState({
      species: [...this.state.species, newAnimal],
      userInput: ''
    })
  }

  feedAnimal(name) {
    const animal = this.state.species;

    animal.forEach(e => {
      if (e.name === name) e.status = 'Happy'
    })

    this.setState({
      species: animal
    })
  }

  render() { // every component must have a render method

    const speciesArray = this.state.species.map((e, i) => { // the ng-repeat of react
      return <Species 
              key={i} // a unique key for each item so React doesn't freak. React uses this in it's algorithm to know if it needs to re-render. When it does need to re-render, it knows what node it needs to change instead of changing all of them.
              name={e.name} 
              status={e.status} 
              action={this.feedAnimal}/>
    })

    return ( // ????????????? ********** the parentheses aren't needed, is it really for formating?
      <div className="App">
          <h2>Some Animals yo!</h2>

        {speciesArray}
        
        <div>
          <input onChange={this.updateUserInput} value={this.state.userInput} placeholder='enter an animal...'/>
          <button onClick={this.updateSpecies}>Add an Animal</button>
        </div>
      </div>
    );
  }
}

export default App;


// EXPLAINING BIND

// const user = {
//   name: 'Missy',
//   sayName: function() {
//     return this.name
//   }
// }

// const sayName = user.sayName
// sayName() ---> undefined because 'this' is now referring to the window object and there is no name on the window object.

// IF ...
// const sayName = user.sayName.bind(user) ----> context has now been bound to the user object. The value inside the bind is what is bound to the function as left of the dot
// sayName() ---> 'Missy'