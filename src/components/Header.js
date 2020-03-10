import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import classes from '../pages/home.module.css';


class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            close: true,
            openProfile: false,
            open: false,

        }
    }
   
      handleProfile =() => {
          this.props.onClick();
          console.log('yes');

         this.setState(prevValue => {
            return {
                openProfile: !prevValue.openProfile,
                close: !prevValue.close
            }
        })
      }
    
    handleSignOut = () => {
        console.log(this);
    }

   
    
    render(){
        
       
    
        return (
            <div className={classes.wraper} >
                <img className={classes.hero} src={this.props.image} />
                <nav className={classes.nav}>
                    <ul className={classes.list}>

                        <Link to={this.props.link}><li className={classes.listitem} onClick={this.handleSignOut}>{this.props.nav}</li></Link>

                        <li className={classes.listitem}>Help</li>

                        <li className={classes.listitem} onClick={this.handleProfile}>My Profile</li>
                    </ul>
                    <ul className={classes.listicon}><li className={classes.listitem}>I-Witness</li></ul>
                </nav>
            </div>
        )
    }
    
    
}


export default Header;



