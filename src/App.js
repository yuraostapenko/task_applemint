import React, { Component } from 'react';
import List from './List/List';

import './App.css';

import axios from 'axios';

class App extends Component {
state ={
  cities: [],
  inputValue: '',
};

inputChange = (event) => {
  let inputText = event.target.value;
  this.setState({
    inputValue: inputText,
  })
};

addCity = (event) => {
  event.preventDefault();
let city = {
  name: this.state.inputValue,
  id: Date.now(), 
}

this.setState(
  prev => ({
   cities: [city, ...prev.cities], 
   inputValue: '', 
  })
)
}

deleteCity = (event) =>{
let delet = event.target.id;
  this.setState(
    prev => ({cities: prev.cities.filter(el => el.id !== +delet)})
  )

}

  componentDidMount() {
    let configuration = {
      method: 'get',
      headers: {
            'Authorization': 'Basic YXBwbGVtaW50OmFwcGxlbWludA==',
        },
    };
    axios.get("https://lenovo-shop.applemint.eu/api/cities", configuration)
        // .then(data => console.log(data))
        .then(data => {
          this.setState({
            cities: data.data.data,
          })
        })
        .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.cities);
    return (
      <div className="App">
      <form onSubmit={this.addCity}>
          <input className='input' type="text" onChange = {this.inputChange} value = {this.state.inputValue}/>
          <button>add city</button>
        </form>
<List state={this.state.cities} del={this.deleteCity}/>
      </div>
    );
  }
}


export default App;
