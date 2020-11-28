import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/Cardlist'
import Decklist from './components/Decklist'

class App extends Component {
	
	render() {
		return (
      <div>
      <Decklist/>
      <Cardlist/>
      </div>
    );
	}
}

export default App;