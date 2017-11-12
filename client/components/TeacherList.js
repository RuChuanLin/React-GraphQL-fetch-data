import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchTeachers';
import { ListGroup, ListGroupItem, Grid, Row, Col, Clearfix } from 'react-bootstrap'


import TeacherAdd from './TeacherAdd';
class TeacherList extends Component {
  renderList() {
    return this.props.data.teachers.map(
      ({ id, teacherName, experience, description, avaterURI }) => {
        return (
          <ListGroupItem key={id}>
            <h5>{teacherName}</h5>
            <Grid>
              <Row>
                <Col sm={4}>{experience}</Col>
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

export default graphql(query)(TeacherList);
