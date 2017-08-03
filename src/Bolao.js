import React, { Component } from 'react';

import './css/background.css';
import 'bootstrap/dist/css/bootstrap.css';

import Menu from './component/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bolao: undefined
    }
  }

  componentDidMount(){
    return fetch('http://localhost:8080/bolao')
            .then((response) => {
              if(response.status === 200) {
                this.setState({
                  bolao: response.json()
                });
              } else {
                throw response.status;
              }
            })
            .catch((error) => {
              this.setState({
                bolao: null
              });
            });  
  }

  render() {
    return (
      <div className="container">
        <Menu />
      </div>
    );
  }
}

export default App;