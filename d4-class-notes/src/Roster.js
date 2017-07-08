import React from 'react';
import {getRoster, getPlayer} from './RosterService.js';
import {Link} from 'react-router-dom';
import './Roster.css'


export function Player(props) { // DON'T FORGET TO EXPORT THESE IF YOU'RE USING THEM ELSEWHERE... ug haha
  const player = getPlayer(props.match.params.id)
  return (
    <div>
      <h1>{player.name}</h1>
      <p>{player.description}</p>
      <div>
        <img src={player.image} alt='the photographer'/>
      </div>
    </div>
  )
}

function Squad(props) {
  const players = getRoster().map((player, i) => (
    <div key={i}>
      <Link to={`/roster/${player.id}`}>
        {player.name}
      </Link>
    </div>
  )) // Make sure to use parentheses otherwise it will return nothing
  return (
    <div>
      {players}
    </div>
  )
}

export default function(props) {
  return (
    <div>
      <h1>Team Roster</h1>
      {/*{props.match.isExact ? <Squad/> : <Route path='/roster/:id' component={Player}/>} */}
      {/* props.match.isExact shows if the url exactly matches the path so that it knows what view to return and inject */}
      <Squad/>
    </div>
  )
}
