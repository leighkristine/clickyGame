import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cardtraits from "./cardtraits.json";
import "./App.css";

class App extends Component {
  // set initial values
  state = {
    cardtraits,
    score : 0,
    highScore : 0,
  };

  // // handle input change
  // handleInputChange = event => {
  //   // get name and value of input
  //   const { name, value } = event.target;
  //   // update input state
  //   this.setState({
  //     [name]: value
  //   });

  shuffleCards = id => {
    // randomize cards
    const cardtraits = this.state.cardtraits.filter(cardtrait => Math.random()*cardtraits.length);
    this.setState({ cardtraits });
  }



 

  render() {
    return (
      <Wrapper>
      {this.state.cardtraits.map(cardtrait => (
        <Cards
          shuffleCards={this.shuffleCards}
          clicked={this.clicked}
          id={cardtrait.id}
          key={cardtrait.id}
          image={cardtrait.image}
          />
          ))}
      </Wrapper>
      );
  }

}



export default App;
