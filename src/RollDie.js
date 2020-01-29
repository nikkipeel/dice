import React, { Component } from "react";
import Die from "./Die";
import "./RollDie.css";

class RollDie extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDie">
        <div clasName="RollDie-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDie;
