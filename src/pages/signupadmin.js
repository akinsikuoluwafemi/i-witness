import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.css';
import light from '../images/light-bulb.svg';
import heroimage from '../images/background_for_e-report.jpg'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
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
            username: '',
            adminId: '',
            loading: false,
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    

    handleSubmit (event) {
        console.log('hi')
    }

    render(){
        
        
        return (
            <div className={classes.wrapper}>
                <img className={classes.hero} src={heroimage} />
                <Grid container className={classes.form} style={{position: 'absolute', top: '0rem'}}>
                    <Grid item sm>
                        <button className={classes.btninfo}>Not Admin</button>
                    
                    </Grid>
                    <Grid item sm >
                        <h1 className={classes.head}>I-Witness</h1>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <div className={classes.inputwrapper}>
                                <EmailOutlinedIcon/>
                                <input className={classes.field} type="email" onChange={this.handleChange} value={this.state.email} placeholder="Your email" name="email"/>
                            </div>
                            <div className={classes.inputwrapper}>
                                <PersonOutlineIcon />
                                <input className={classes.field} type="text" onChange={this.handleChange} value={this.state.username} placeholder="Your username"/>
                            </div>

                            <div className={classes.inputwrapper}>
                                <LockOutlinedIcon />
                                <input className={classes.field} type="password" onChange={this.handleChange} value={this.state.password} placeholder="Your password" name="password"/>
                            </div>
                            <div className={classes.adminwrapper}>
                                <SupervisorAccountIcon/>
                                <input className={classes.field} type="password" onChange={this.handleChange} value={this.state.adminId} placeholder="123000"/>
                            </div>
                            <small className={classes.small}>Forget Password click here</small> <br/>
                            <button className={classes.btninfo}>Login</button>

                        </form>
                    </Grid>
                    <Grid item sm >
                        <Typography>No Account?</Typography>
                        <button className={classes.btninfo}>Signup</button>

                        
                    </Grid>
            
                </Grid>


            </div>
        )
    }
}

// Login.propTypes = {

// }

export default Login; 