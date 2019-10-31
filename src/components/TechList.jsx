import React, { Component } from "react";
import TechItem from "./TechItem";

export default class TechList extends Component {
  state = {
    tech: "",
    techs: []
  };

  componentDidMount() {
    let techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({
        techs: JSON.parse(techs)
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  handleInputChange = e => {
    this.setState({ tech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ techs: [...this.state.techs, this.state.tech], tech: "" });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <div className="container">
        <h2>To Do App</h2>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map((tech, techId) => (
              <TechItem
                key={techId}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
                value={this.state.tech}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.tech}
            placeholder="Digite sua tarefa"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
