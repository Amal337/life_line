import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class EditHospital extends Component {
    state = {}

    onChangeHandler = (e) => {
        //var hospital =jwt_decode(localStorage.token).hospital
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmetHandler = () => {
        var hospital =jwt_decode(localStorage.token).hospital
        axios.put(`http://localhost:7000/hospital/${hospital._id}`, this.state)
            .then(res => { console.log(res)})         
            .catch(err => { console.log(err) })
    }

    render() {
        var hospital =jwt_decode(localStorage.token).hospital
        return (
            <div>
                
                <h1>EditHospital</h1>

                <Form onSubmit={this.onSubmetHandler}>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={this.onChangeHandler} type="text" placeholder={hospital.name} />
                </Form.Group>
                <Form.Group controlId="formGroupLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" onChange={this.onChangeHandler} type="text" placeholder={hospital.location} />
                </Form.Group>

                <Button onClick = {this.onSubmetHandler} >Save</Button>
             </Form>

                

            </div>
        )
    }
}

export default EditHospital;
