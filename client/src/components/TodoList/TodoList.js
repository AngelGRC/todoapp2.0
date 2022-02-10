import React, { Component } from "react";
import axios from "axios";
import "../../index.css";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { ImBin, ImPencil } from "react-icons/im";

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    this.getTodos();
  }

  getTodos = async () => {
    const res = await axios.get("http://localhost:3001/todos/");
    this.setState({
      todos: res.data,
    });
  };

  deleteTodos = async (todoId) => {
    await axios.delete("http://localhost:3001/todos/" + todoId);
    this.getTodos();
  };

  render() {
    return (
      <Container className="padding">
        {this.state.todos.map((todo) => (
          <div className="gridTareas" key={todo.id}>
            <div className="gridTareasTexto">
              <p>{todo.content}</p>
            </div>
            <div className="gridTareasItem derecha">
              <Link className="a" to={"/edit/" + todo.id}>
                <ImPencil className="margen__derecha" />
              </Link>

              <ImBin onClick={() => this.deleteTodos(todo.id)}></ImBin>
            </div>
          </div>
        ))}
      </Container>
    );
  }
}
