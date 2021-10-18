import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
/*
const App = () => {
    return (
        <h1>This is my React app!</h1>
    );
    //return <h1>This is my React app!</h1>;

}
*/
class App extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = { ctr: 0 };
    }*/
    state = {
        ctr:0
    }
    increment= () =>{
        /*this.setState( state => ({
            ctr: state.ctr +1
        }));*/
        this.setState({ctr: this.state.ctr+1})
        console.log('clicked');
    }
    render() {
      return (
        <div className="App">
          <h1>React Counter</h1>
          <h2>count: <span> {this.state.ctr}</span> </h2> 
          
          <button onClick={this.increment}> + </button>
        </div>
      )
    }
  }
ReactDOM.render(<App />, document.getElementById('app'));
/*
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ctr: 0 };
    }

    increment() {
        this.setState( state => ({
            ctr: state.ctr +1
        }));
    }

    render() {
        return (
            <div>
                <h2> Counter: {this.state.ctr} </h2>
                <button onClick={this.increment()}>
                    click
                </button>
            </div>
        );
    }
} 

ReactDOM.render(<Counter />,document.getElementById('counter'));
/*
const Hello = () => {
  return <button> Click Me</button>
};

ReactDOM.render(<Hello />, document.getElementById('hello'));
*/
/*
class App2 extends React.Component {
    render() {
      return <h1>Hello world!</h1>
    }
  }
ReactDOM.render(<App2 />, document.getElementById('root'));*/