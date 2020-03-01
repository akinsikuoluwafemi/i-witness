import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import classes from '../pages/home.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import reporter from '../images/female_reporter2.jpg';


class Header extends Component{
    state = {
        close: true,
        openProfile: false,
        open: false,

    }
      handleProfile =() => {
         this.setState(prevValue => {
            return {
                openProfile: !prevValue.openProfile,
                close: !prevValue.close
            }
        })
    }

    
    render(){
        
       
    
        return (
            <div className={classes.wraper}>
                <img className={classes.hero} src={this.props.image} />
                <nav className={classes.nav}>
                    <ul className={classes.list}>
                        <Tooltip title="Home">

                            <Link to="/"><li className={classes.listitem}>Home</li></Link>
                        </Tooltip>
                        <Tooltip title="Help">

                            <li className={classes.listitem}>Help</li>
                        </Tooltip>
                        <Tooltip title="My Profile">

                            <li className={classes.listitem} onClick={this.handleProfile}>My Profile</li>
                        </Tooltip>
                    </ul>
                    <ul className={classes.listicon}><li className={classes.listitem}>I-Witness</li></ul>
                </nav>
            </div>
        )
    }
    
    
}


export default Header;



