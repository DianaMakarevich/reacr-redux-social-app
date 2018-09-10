import React, { Component } from 'react';

import  './styles.css';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user">
        <div className="userPhoto"><img src={this.props.photo} /></div>
        <div className="userName">
            {this.props.name}
        </div>
        <div className="userGender">
            {this.props.gender}
        </div>
        <div className="userLocation">
            {this.props.location}
        </div>
      </div>
    );
  }
}

export default User;