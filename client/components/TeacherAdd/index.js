import React, { Component } from 'react';

import { Button, Accordion, Panel } from 'react-bootstrap';
import Form from './Form';
class TeacherAdd extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          新增教師
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <Form />
        </Panel>
      </div>
    );
  }
}

export default TeacherAdd;
