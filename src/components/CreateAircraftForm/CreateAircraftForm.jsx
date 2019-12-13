import React, { Component } from 'react';
import '../CreateAircraftForm/CreateAircraftForm.css';
import FormErrors from '../FormErrors/FormErrors';
import aircraftService from '../../services/aircraft-service';

class CreateAircraftForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Set default values of all form imput values
            name: '',
            description: '',
            type: 'Airliner',
            countryOfOrigin: 'USA',
            topSpeed: 0,
            capacity: 0,
            price: 0,
            imageURL: '',
            //Set all field errors to an empty string
            formErrors: { name: '', description: '', topSpeed: '', price: '', imageURL: '' },

            //Set default isValid values
            nameValid: false,
            descriptionValid: false,
            topSpeedValid: false,
            priceValid: false,
            capacityValid: false,
            imageURLValid: false,
            formValid: false,
        }

        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        },
            () => { this.validateField(name, value) });
    }


    //Validation
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let descriptionValid = this.state.descriptionValid;
        let topSpeedValid = this.state.topSpeedValid;
        let capacityValid = this.state.capacityValid;
        let priceValid = this.state.priceValid;
        let imageURLValid = this.state.imageURLValid;

        switch (fieldName) {
            case 'name':
                nameValid = value.length >= 5;
                fieldValidationErrors.name = nameValid ? '' : ' should be at least 5 characters long.';
                break;
            case 'description':
                descriptionValid = value.length >= 5 && value.length <= 120;
                fieldValidationErrors.description = descriptionValid ? '' : ' should be between 5 and 120 characters long.';
                break;
            case 'topSpeed':
                topSpeedValid = value >= 10 && value <= 3000;
                fieldValidationErrors.topSpeed = topSpeedValid ? '' : ' should be between 10 km/h and 3000 km/h.';
                break;
            case 'capacity':
                capacityValid = value >= 1 && value <= 1000;
                fieldValidationErrors.capacity = capacityValid ? '' : ' should be between 1 and 1000.';
                break;
            case 'price':
                priceValid = value >= 1 && value <= 5000000000;
                fieldValidationErrors.price = priceValid ? '' : ' should be a positive number less than 5 bilion.';
                break;
            case 'imageURL':
                imageURLValid = value.startsWith('http://') || value.startsWith('https://');
                fieldValidationErrors.imageURL = imageURLValid ? '' : ' should be a valid link.';
                break;

            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            descriptionValid: descriptionValid,
            topSpeedValid: topSpeedValid,
            capacityValid: capacityValid,
            priceValid: priceValid,
            imageURLValid: imageURLValid,

        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid:
                this.state.nameValid &&
                this.state.descriptionValid &&
                this.state.topSpeedValid &&
                this.state.capacityValid &&
                this.state.priceValid &&
                this.state.imageURLValid
        });
    }

    submitFormHandler(event) {
        event.preventDefault();
        const aircraftData = {
            name: this.state.name,
            imageURL: this.state.imageURL,
            type: this.state.type,
            description: this.state.description,
            countryOfOrigin: this.state.countryOfOrigin,
            topSpeed: this.state.topSpeed,
            capacity: this.state.capacity,
            price: this.state.price
        }

        //create aircraft
        aircraftService.create(aircraftData)
            .then(this.props.history.push('/aircraft/all'))
            .then(window.location.reload(false))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="create">
                <form>
                    <h3>Create aircraft</h3>
                    <FormErrors formErrors={this.state.formErrors} />
                    <hr />
                    <p>Aircraft name</p>
                    <input placeholder="ex. MiG-21" name="name" type="text" onChange={this.handleChange} />

                    <p>Short description</p>
                    <input placeholder="ex. This is one of the fastest planes in the world." onChange={this.handleChange} name="description" type="text" />
                    <p>Aircraft type</p>
                    <select id="type" name="type" onChange={this.handleChange}>
                        <option value="Airliner">Airliner</option>
                        <option value="Airship">Airship</option>
                        <option value="Balloon">Balloon</option>
                        <option value="Biplane">Biplane</option>
                        <option value="Business jet">Business jet</option>
                        <option value="Business helicopter">Business helicopter</option>
                        <option value="Combat helicopter">Combat helicopter</option>
                        <option value="Fighter jet">Fighter jet</option>
                        <option value="Para-glider">Para-glider</option>
                        <option value="Delta-glider">Delta-glider</option>
                        <option value="Drone">Drone</option>
                        <option value="Propeller plane">Propeller plane</option>
                        <option value="Seaplane">Seaplane</option>
                    </select>
                    <p>Country of origin</p>

                    <select id="countryOfOrigin" name="countryOfOrigin" onChange={this.handleChange}>
                        <option value="USA">USA</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                        <option value="Russia">Russia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="France">France</option>
                        <option value="India">India</option>
                        <option value="Bulgaria">Bulgaria</option>
                    </select>
                    <p>Top speed (km/h)</p>
                    <input placeholder="ex. 969 km/h" name="topSpeed" min="10" max="3000" type="number" onChange={this.handleChange} />

                    <p>Capacity</p>
                    <input placeholder="ex. 140" name="capacity" min="1" type="number" onChange={this.handleChange} />

                    <p>Price(€)</p>
                    <input placeholder="ex. 500000€" name="price" min="1" type="number" onChange={this.handleChange} />

                    <p>Image URL</p>
                    <input placeholder="ex. https://hd.plane.picture.png" name="imageURL" type="text" onChange={this.handleChange} />

                    <hr />
                    <button type="submit" disabled={!this.state.formValid} className="registerbtn" onClick={this.submitFormHandler.bind(this)}>Take off</button>
                </form>
            </div>
        );
    }
}

export default CreateAircraftForm;