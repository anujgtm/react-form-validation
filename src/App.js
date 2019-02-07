import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
        email: '',
        password: '',
        colour: '',
        animal: [],
        tiger_type: ''

    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);

  }

  handleUserInput (e) {
    
    const name = e.target.name;
    const inputValue = e.target.value;
    
    if (e.target.type === "checkbox") {
      
      // current array of animal
      const animal = this.state.animal
      let index;

      // check if the check box is checked or unchecked
      if (e.target.checked) {
        // add the value of the checkbox to animal array
        animal.push(inputValue);
      } else {
        // or remove the value from the unchecked checkbox from the array
        index = animal.indexOf(inputValue);
        animal.splice(index, 1);
      }
      
      // update the state with the new array of animal
      this.setState({ animal: animal });
    } 
    else 
    {  

      this.setState({[name]: inputValue });

    }
  }

  handleFormSubmit(e) {
     e.preventDefault();
  }

  handleClearForm() {

    // Reset the form
    this.setState({ 
        email: '',
        password: '',
        colour: '',
        animal: [],
        tiger_type: ''
    });

  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>Fill out this awesome form</h1>
        <fieldset>
            <h3>Your details</h3>
            <p>
                <label className='label' htmlFor='email'>
                    Email
                </label>
                <input type='text' id='email' name='email' value={this.state.email} onChange={this.handleUserInput} />
            </p>
            <p>
                <label className='label' htmlFor='password'>
                    Password
                </label>
                <input className='error' type='password' id='password' name='password' value={this.state.password} onChange={this.handleUserInput} />
            </p>
        </fieldset>

        <fieldset>
            <h3>Your animal</h3>
            <p>
                <label className='label' htmlFor='colour'>
                    Colour
                </label>
                <select name='colour' id='colour' value={this.state.colour} onChange={this.handleUserInput}>
                    <option value=''>Choose colour</option>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='red'>Red</option>
                    <option value='black'>Black</option>
                    <option value='brown'>Brown</option>
                </select>
            </p>
            <p>
                <span className="label">
                    Animal
                </span>

                <input type='checkbox' name='animal' value='bear' id='bear' onChange={this.handleUserInput} />
                <label htmlFor='bear'>
                     Bear
                </label>

                <input type='checkbox' name='animal' value='tiger' id='tiger' onChange={this.handleUserInput} />
                <label htmlFor='tiger'>
                    Tiger
                </label>

                <input type='checkbox' name='animal' value='snake' id='snake' onChange={this.handleUserInput} />
                <label htmlFor='snake'>
                     Snake
                </label>

                <input type='checkbox' name='animal' value='donkey' id='donkey' onChange={this.handleUserInput} />
                <label htmlFor='donkey'>
                     Donkey
                </label>

            </p>
            <p>
                <label className='label' htmlFor='tiger_type'>
                    Type of tiger
                </label>
                <input type='text' name='tiger_type' id='tiger_type' value={this.state.tiger_type} onChange={this.handleUserInput} />
            </p>
        </fieldset>
        <fieldset>
            <p>
                <input type='submit' value='Create account'  />
            </p>
        </fieldset>
    </form>
    );
  }
}

export default App;
