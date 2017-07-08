import React from 'react';
import {Route, Link} from 'react-router-dom'; // Link is like href but specific for react router

function AboutHistory(props) {
  return (
    <div>
      <p>{`Photography started in the 1800's
        and then collodian took the world by storm.
        You've probably seen this type of Photography
        with old civil war photographs that were
        made using wet plate collodian called tin types`}
      </p>
    </div>
  )
}

function AboutTeam(props) {
  return (
    <div>
      <p>{`Let's talk about some iconic photographers.
        Ansel Adams created the zone system which 
        revolutionized black and white photography
        manipulation`}</p>
    </div>
  )
}

export default function(props) { // When exporting default, the function can be annoynomous (spelling?), otherwise it needs to be named so that you can import it elsewhere
    return (
      <div>
        <h2>About</h2>
        <div>
          {/* below are the links to the nested routes */}
          <Link to='/about/history'>History</Link>
          <Link to='/about/team'>The Team</Link>
        </div>
        <Route path='/about/history' component={AboutHistory}/>
        <Route path='/about/team' component={AboutTeam}/>
      </div>
    )
}