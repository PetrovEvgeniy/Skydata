import React, { Component } from 'react';
import '../CreateAircraftForm/CreateAircraftForm.css';
//import FormErrors from '../FormErrors/FormErrors';

class CreateAircraftForm extends Component {
    handleUserInput(){

    }

    submitFormHandler(){

    }

    render() {
        return (
            <div className="login">
                <form>
                    <h1>Create aircraft .. to be continued</h1>
                
                    <hr />
                    <p>Name</p>
                    <input placeholder="Enter name" name="name" type="text" onChange={this.handleUserInput} />
                    <p>Image URL</p>
                    <input placeholder="Enter image URL" name="name" type="text" onChange={this.handleUserInput} />
                    <p>Top speed</p>
                    <input type="number" placeholder="Enter top speed" name="topSpeed" onChange={this.handleUserInput} />
                    <p>Range</p>
                    <input type="number" placeholder="Enter range" name="range" onChange={this.handleUserInput} />
                    <p>Price</p>
                    <input type="number" placeholder="Enter price" name="price" onChange={this.handleUserInput} />
                    <hr />
                    <button type="submit" className="registerbtn" onClick={this.submitFormHandler}>Take off</button>

                </form>
            </div>
        );
    }
}

export default CreateAircraftForm;