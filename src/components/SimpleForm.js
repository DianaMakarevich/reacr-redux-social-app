import React, { Component } from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { Button } from 'semantic-ui-react';

class SimpleForm extends Component {
  submit({ location }, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({ 
        type: 'FETCH_USERS',
        location,
        resolve,
        reject 
      });
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Button fluid type="submit" className="button">Show users</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'simple',
})(SimpleForm)