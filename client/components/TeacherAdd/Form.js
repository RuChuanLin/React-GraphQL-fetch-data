import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';

class Form extends Component {
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'teacherAddForm'
})(Form);
