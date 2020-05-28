import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Button, Row, Container, Col } from 'reactstrap';

class FormArray extends Component {
  constructor() {
    super()
    this.state = {
      fieldCount: [0]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.rmInput = this.rmInput.bind(this)
    this.addInput = this.addInput.bind(this)
  }

  addInput() {
    this.setState(({ fieldCount }) => ({ fieldCount: fieldCount.concat((parseInt(fieldCount.length) - 1) + 1) }))
  }

  rmInput() {
    this.setState(({ fieldCount }) => {
      const newCount = fieldCount.slice()
      newCount.pop()
      return ({ fieldCount: newCount })
    })
  }

  handleSubmit(e, val) {
    let formData = new FormData();
    for (var key in val) {
      formData.append(key, JSON.stringify(val[key]))
    }

    const config = {
      method: 'POST',
      body: formData
    }

    fetch('http://localhost:9000/form', config)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <AvForm
        onValidSubmit={this.handleSubmit} >

        {this.state.fieldCount.map((c, i) => {
          return (
            <Row>
              <Col md="4">
                <AvField name={"bank[" + c + "]"} type="text" placeholder="Nama Bank" key={i} />
              </Col>
              <Col md="4">
                <AvField name={"account[" + c + "]"} type="text" placeholder="Nomor Rekening" key={i} />
              </Col>
              <Col md="4">
                <AvField name={"name[" + c + "]"} type="text" placeholder="Nama Pemilik" key={i} />
              </Col>
            </Row>
          )
        })}

        <Row>
          <Col>
            <Button onClick={this.addInput}>+</Button>{' '}
            {this.state.fieldCount.length > 1 &&
              <Button onClick={this.rmInput}>-</Button>
            }
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <Button type="submit" size="md" color="primary" className="mr-2">
              <i className="fa fa-save mr-2"></i> Simpan
          </Button>
          </Col>
        </Row>
      </AvForm>
    )
  }
}

export default FormArray;
