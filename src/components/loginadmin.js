import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.css';
import light from '../images/light-bulb.svg';
import heroimage from '../images/background_for_e-report.jpg'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';

    
import Link from 'react-router-dom';
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
            adminid: '',
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
            <div className={classes.wrapper}>
                <img className={classes.hero} src={heroimage} />
                <Grid container className={classes.form} style={{position: 'absolute', top: '0rem'}}>
                    <Grid item sm>
                        <button>Admin</button>
                    
                    </Grid>
                    <Grid item sm>
                        <h1 className={classes.head}>I-Witness</h1>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <div className={classes.inputwrapper}>
                                <PersonOutlineIcon/>
                                <input type="email" onChange={this.handleChange} value={this.state.email} />
                            </div>

                            <div className={classes.inputwrapper}>
                                <LockOutlinedIcon />
                                <input type="email" onChange={this.handleChange} value={this.state.email} />
                            </div>
                            <div className={classes.inputwrapper}>
                                <Typography>Adminid</Typography>
                                <input type="email" onChange={this.handleChange} value={this.state.adminid} />
                            </div>
                            <small>Forget Password click here</small> <br/>
                            <button>Login</button>

                        </form>
                    </Grid>
                    <Grid item sm />
            
                </Grid>


            </div>
        )
    }
}

// Login.propTypes = {

// }

export default Login; 