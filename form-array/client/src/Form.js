import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Button, Row, Col } from 'reactstrap';

class Form extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e, val) {
    let formData = new FormData();
    for (var key in val) {
      formData.append(key, val[key])
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
        <Row>
          <Col md="4">
            <AvField name="bank" type="text" placeholder="Nama Bank" />
          </Col>
          <Col md="4">
            <AvField name="account" type="text" placeholder="Nomor Rekening" />
          </Col>
          <Col md="4">
            <AvField name="name" type="text" placeholder="Nama Pemilik" />
          </Col>
        </Row>

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

export default Form;
