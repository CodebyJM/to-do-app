import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap";


class Tools extends Component {
  render() {
    return (
      <div class="container">
    <div class="row mt-5">
      <div class="col-md-4">
     <Card>
       <CardBody>
         <CardTitle tag="h5">Card title</CardTitle>
         <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
         <label className="p-2" for="date">Choose a Date</label>
          <input className="form-control" type="date" />
          <hr></hr>
          <label className="p-2" for="date">Name of task</label>
          <input className="form-control" type="text" />
        <hr></hr>
          <label className="p-2" for="details">Details</label>
          <input className="form-control" name="details" type="text"></input>
          <hr></hr>
         <Button>Add Task</Button>
       </CardBody>
     </Card>
    </div>
    </div>
  </div>
  
    );
  }
}


export default Tools;
