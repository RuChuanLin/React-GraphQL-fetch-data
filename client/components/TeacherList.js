import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchTeachers';

class TeacherList extends Component {
  renderList() {
    return this.props.data.teachers.map(teacher => {
      return (
        <li key={teacher.id} className="collection-item">
          {teacher.teacherName}
        </li>
      );
    });
  }
  render() {
    console.log(this.props);
    if (!this.props.data.teachers) {
      return <div>loading..</div>;
    }
    return (
      <div>
        <h3>教師名單</h3>
        <ul className="collection">{this.renderList()}</ul>
      </div>
    );
  }
}

export default graphql(query)(TeacherList);
