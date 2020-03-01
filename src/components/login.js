import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.css';
import light from '../images/light-bulb.svg';
import heroimage from '../images/background_for_e-report.jpg'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
    
import Link from 'react-router-dom/Link';
// mui stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Header from '../components/Header';
import GoogleAuth from './GoogleAuth';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
            
        }
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    

    handleSubmit= (event) => {
        console.log('hi')
        event.preventDefault();
    }

    render(){
        
        
        
        return (
            <div className={classes.wrapper}>
                <Header image={heroimage}/>
                {/* <img className={classes.hero} src={heroimage} /> */}
                <Grid container className={classes.form} style={{position: 'absolute', top: '10rem'}}>
                    <Grid item sm>
                        <button className="ui button">Admin</button>
                    
                    </Grid>
                    <Grid item sm>
                        
                        

                        {/* <h1 className={classes.head}>I-Witness</h1> */}
                        <form noValidate onSubmit={this.handleSubmit} >
                            <div className={classes.inputwrapper}>
                                <EmailOutlinedIcon style={{fontSize: '2rem', display: 'inline', position: 'absolute', top: '1.7rem', }} />
                                <input name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" style={{textIndent: '2rem', background: '#ddd', padding: '1rem', borderRadius: '8px', width: '300px'}}/>
                            </div>
                            
                            <div className={classes.inputwrapper}>
                                <LockOutlinedIcon style={{ fontSize: '2rem', display: 'inline', position: 'absolute', top: '6rem', }} />
                                <input name="password" type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" style={{ textIndent: '2rem', background: '#ddd', padding: '1rem', borderRadius: '8px', width: '300px' }} />
                            </div>
                            

                            <button className="ui button green">Login</button> <br />
                            
                            <Link to='' style={{color: 'white'}}>Forget Password click here</Link> 
                            <Typography style={{ color: 'white' }}>Dont have an account</Typography>
                            <Link to="/signup" style={{ color: '#ddd' }}>Signup</Link>

                        </form>

                        <GoogleAuth />
                        
                    </Grid>
                    <Grid item sm >
                        

                        
                    </Grid>
            
                </Grid>


            </div>
        )
    }
}

// Login.propTypes = {

// }

export default Login; 
