import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.css';
import light from '../images/light-bulb.svg';

// mui stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';





class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    

    handleSubmit= (event) => {
        console.log('hi')
    }

    render(){
        
        
        return (
            <div>
                
               
                <i className="fab fa-facebook-f"></i>
                   
            </div>
        )
    }
}

// Login.propTypes = {

// }

export default Login; 