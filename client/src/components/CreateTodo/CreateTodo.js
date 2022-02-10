import React, { Component } from "react";
import "../../index.css";
import { Input, Form, Button, Container, Card, CardBody } from "reactstrap";
import axios from "axios";

export default class CreateTodo extends Component {
  state = {
    content: "",
    editing: false,
    id: "",
  };

  // Traer data para editar
  async componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id);
      const res = await axios.get(
        "http://localhost:3001/todos/" + this.props.match.params.id
      );

      this.setState({
        content: res.data.content,
        id: res.data.id,
        editing: true,
      });
    }
  }

  // Updatear
  onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.editing) {
      const updatedTodo = {
        content: this.state.content,
      };
      await axios.put(
        "http://localhost:3001/todos/" + this.state.id,
        updatedTodo
      );
    } else {
      // Sino crear
      const newTodo = {
        content: this.state.content,
      };
      axios.post("http://localhost:3001/todos/", newTodo);
    }
    window.location.href = "/";
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Container className="padding">
        <Card className="sombra">
          <CardBody>
            <Form onSubmit={this.onSubmit}>
              {/* Todo Content */}
              <Input
                maxLength={40}
                type="text"
                className="form-control"
                placeholder="Enter Title"
                name="content"
                onChange={this.onInputChange}
                value={this.state.content}
                required
              ></Input>
              <Container className="centro">
                <Button className="margen__arriba boton">Add</Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
