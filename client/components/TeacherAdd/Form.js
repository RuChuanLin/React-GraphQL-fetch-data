import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../../queries/fetchTeachers';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const Input = ({
  label,
  name,
  component = 'input',
  type = 'text',
  placeholder
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Input label="教師姓名" name="teacherName" placeholder="請輸入教師姓名" />
        <Input label="經歷" name="experience" placeholder="請輸入教師經歷" />
        <Input label="敘述" name="description" placeholder="請輸入教師敘述" />
        <Input label="頭像" name="avaterURI" placeholder="請輸入教師頭像(目前僅支援URL)" />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

const mutation = gql`
  mutation AddTeacher(
    $id: ID!
    $teacherName: String
    $experience: String
    $description: String
    $avaterURI: String
  ) {
    addTeacher(
      id: $id
      teacherName: $teacherName
      experience: $experience
      description: $description
      avaterURI: $avaterURI
    ) {
      id
      teacherName
      experience
      description
      avaterURI
    }
  }
`;

const submit = (variables, dispatch, props) => {
  variables.id = Math.random()
    .toString(36)
    .substr(7);
  if (!variables.avaterURI) {
    variables.avaterURI = 'http://cw1.tw/CC/images/article/J1436238026352.jpg';
  }
  props.mutate({ variables, refetchQueries: [{ query }] }).then(() => {
    props.reset();
  });
};
export default graphql(mutation)(
  reduxForm({
    form: 'teacherAddForm',
    onSubmit: submit
  })(Form)
);
