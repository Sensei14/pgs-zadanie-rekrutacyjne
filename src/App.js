import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    searchPhrase: "",
    results: {},
    currentFirst: 0,
    currentLast: 9
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = e => {
    e.preventDefault();

    //Dodano, aby uniknąć błędu na gh-pages. Przy zapytaniu CORS nie działały małe literki 'a', 'd', pusty string.
    let searchPhrase = this.state.searchPhrase.toUpperCase();
    if (searchPhrase === "") searchPhrase = " ";

    let url = `https://itunes.apple.com/search?term=${searchPhrase}&entity=song&limit=200`;

    fetch(url)
      .then(response => response.json())
      .then(response =>
        this.setState({
          results: response,
          currentFirst: 0,
          currentLast: 9
        })
      );

    this.setState({
      searchPhrase: ""
    });
  };

  prev = () => {
    let currentFirst = this.state.currentFirst - 9;
    let currentLast = this.state.currentLast - 9;

    if (currentFirst < 0) {
      currentFirst = 0;
      currentLast = 9;
    }
    this.setState({
      currentFirst,
      currentLast
    });
  };

  next = () => {
    let currentFirst = this.state.currentFirst + 9;
    let currentLast = this.state.currentLast + 9;

    if (currentFirst >= this.state.results.results.length) {
      currentFirst = this.state.currentFirst;
      currentLast = this.state.currentLast;
    }

    this.setState({
      currentFirst,
      currentLast
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          searchPhrase={this.state.searchPhrase}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <Content
          songs={this.state.results}
          start={this.state.currentFirst}
          end={this.state.currentLast}
          prev={this.prev}
          next={this.next}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
