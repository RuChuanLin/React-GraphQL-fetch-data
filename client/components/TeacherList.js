import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchTeachers';

import TeacherAdd from './TeacherAdd';
class TeacherList extends Component {
  renderList() {
    return this.props.data.teachers.map(
      ({ id, teacherName, experience, description, avaterURI }) => {
        return (
          <li key={id} className="list-group-item">
            <h5>{teacherName}</h5>
            <div className="row">
              <div className="col-sm-4">{experience}</div>
              <div className="col-sm-4">{description}</div>
              <div className="col-sm-4">
                <img
                  className="teacher-avater"
                  src={avaterURI}
                  alt={teacherName}
                />
              </div>
            </div>
          </li>
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
        <ul className="list-group">{this.renderList()}</ul>
      </div>
    );
  }
}

export default graphql(query)(TeacherList);
