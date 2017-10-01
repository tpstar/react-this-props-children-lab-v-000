// Code Invitation Component Here
import React from 'react';

class Invitation extends React.Component {
  render() {
    return <div>
      <h1>You've been invited!</h1>
      <div className="Invitation-p">{this.props.children}</div>
    </div>
  }

};

export default Invitation;
