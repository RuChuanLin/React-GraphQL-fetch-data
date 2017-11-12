import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import {
  Grid, Row, Col, Button
} from 'react-bootstrap';

const Input = ({ label, name, component = "input", type = "text", placeholder }) => {
  return (<div>
    <label htmlFor={name}>{label}</label>
    <Field name={name} component={component} type={type} placeholder={placeholder} />
  </div>)
}
class Form extends Component {

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Input label="教師姓名" name="teacherName" placeholder="請輸入教師姓名"></Input>
        <Input label="經歷" name="experience" placeholder="請輸入教師經歷"></Input>
        <Input label="敘述" name="description" placeholder="請輸入教師敘述"></Input>
        <Input label="頭像" name="avaterURI" placeholder="請輸入教師頭像(目前僅支援URL)"></Input>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}


const mutation = gql`
mutation AddTeacher($id:ID!, $teacherName: String, $experience: String, $description: String, $avaterURI: String) {
  addTeacher(id:$id, teacherName: $teacherName, experience: $experience, description: $description, avaterURI: $avaterURI) {
    teacherName
    experience
    description
    avaterURI
  }
}
`

const submit = (variables, dispatch, props) => {
  variables.id = Math.random().toString(36).substr(7);
  console.log(variables);
  props.mutate({ variables })

}
export default graphql(mutation)(reduxForm({
  form: 'teacherAddForm',
  onSubmit: submit
})(Form))
