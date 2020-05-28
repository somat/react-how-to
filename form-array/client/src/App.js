import React, { Component } from 'react';
import FormArray from './FormArray'
import Form from './Form'
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Form Array</h3>
            <FormArray />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Regular Form</h3>
            <Form />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
