import React, { Component } from 'react';

class PersonDetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h5>Hello From my PersonDetails Component</h5>
      </div>
    );
  }
}

export default PersonDetails;
