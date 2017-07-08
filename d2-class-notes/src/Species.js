// --------------- This is the OLD WAY ---------------- //

// import React, { Component } from 'react';

// class Species extends Component {

//   handleClick() {
//     this.props.action(this.props.name) // ???????******* why could you not put this in the button tag?
//   }

//   render() {
//     return (
//       <div>
//         <h5>{this.props.name}</h5>
//         {/* Props cannot be shared from child to parent, or child to child, only parent to child */}
//         <p>{this.props.status}</p>
//         <button onClick={this.handleClick.bind(this)}>Feed</button>
//       </div>
//     )
//   }
// }

// export default Species;


// ---------- RE-WRITTEN AS A FUNCTIONAL COMPONENT ----- THE NEW WAY ----------- //

import React from 'react';

export default function Species(props) {
  function handleClick() {
    props.action(props.name) // ???????******* why could you not put this in the button tag?
  }
  return (
      <div>
        <h5>{props.name}</h5>
        {/* Props cannot be shared from child to parent, or child to child, only parent to child */}
        <p>{props.status}</p>
        <button onClick={handleClick}>Feed</button>
      </div>
    )

}


