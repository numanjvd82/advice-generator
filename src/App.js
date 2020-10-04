import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get(
        `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 100)}`
      )
      .then((res) => {
        const data = JSON.parse(res.data + '}');
        const { advice } = data.slip;
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1>{advice}</h1>
          <button className="btn">
            <span>Generate</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
