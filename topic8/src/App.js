import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: []
    };
  }

  onAddItem() {
    let newArray = this.state.result;
    if (this.state.result.length === 0) {
      newArray = [1];
    } else {
      newArray.push(this.state.result[this.state.result.length - 1] + 1);
    }
    this.setState(
      {
        result: newArray
      },
      () => {
        console.log('this.state.result', this.state.result);
      }
    );
  }

  loadArray() {
    if (this.state.result.length === 0) return 'nothing';
    return this.state.result.map((item, i) => {
      return (
        <tr key={i}>
          <td>
            5x{item}={item * 5}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          React Handson Topic 8 - Component API
        </header>
        <button className='button' onClick={() => this.onAddItem()}>
          click me
        </button>
        <h4>Multiplications of 5: </h4>
        <table>
          <tbody>{this.loadArray()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
