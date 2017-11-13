import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchTeachers';
import {
  ListGroup,
  ListGroupItem,
  Grid,
  Row,
  Col,
  Clearfix,
  Button
} from 'react-bootstrap';

import TeacherAdd from './TeacherAdd';
class TeacherList extends Component {
  onDeleteTeacher(id) {
    console.log(id);
    this.props
      .mutate({
        variables: { id }
      })
      .then(() => this.props.data.refetch())
      .catch(err => {
        console.log(err);
        console.log(this.props);
      });
  }
  renderList() {
    console.log(this.props);
    return this.props.data.teachers.map(
      ({ id, teacherName, experience, description, avaterURI, domain }) => {
        return (
          <ListGroupItem key={id}>
            <h5>{teacherName}</h5>
            <Button bsStyle="danger" onClick={() => this.onDeleteTeacher(id)}>
              刪除
            </Button>
            <Grid>
              <Row>
                <Col sm={4}>
                  <p>經歷：{experience}</p>
                  <p>主修：{domain}</p>
                </Col>
                <Col sm={4}>{description}</Col>
                <Col sm={4}>
                  <img
                    className="teacher-avater"
                    src={avaterURI}
                    alt={teacherName}
                  />
                </Col>
              </Row>
            </Grid>
          </ListGroupItem>
        );
      }
    );
  }
  render() {
    if (!this.props.data.teachers) {
      return <div>loading..</div>;
    }
    return (
      <div>
        <h3>教師名單</h3>
        <TeacherAdd />
        <ListGroup>{this.renderList()}</ListGroup>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteTeacher($id: ID!) {
    deleteTeacher(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(TeacherList));
