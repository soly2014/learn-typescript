import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  color?: string;
}

const Functional = ({ color }: AppProps): JSX.Element => <p>{color}</p>;

class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and color {this.props.color}
          </a>
          <Functional />
        </header>
      </div>
    );
  }
}

export default App;
