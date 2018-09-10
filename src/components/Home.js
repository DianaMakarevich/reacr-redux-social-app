import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import User  from './User';

import './main.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  users() {
    const query = this.props.user.results;
    if (query) {
      return (
        query.map((user) =>
        <User 
            key={user.id}
            photo={user.picture.large}
            gender={user.gender}
            location={user.location.street}
            name={user.name.title + ' ' + user.name.first + ' ' + user.name.last}
        />
)
      );
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <SimpleForm/>
        <div className="users">{this.users()}</div>
      </div>
    );
  }
}

export default Home;