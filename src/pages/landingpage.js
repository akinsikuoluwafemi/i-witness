import React from 'react';
import classes from './landing.module.css'; 
import heroimage from '../images/background_for_e-report.jpg'
import Link from 'react-router-dom/Link';
 function landingpage() {
    return (
        <div>
            <div className={classes.wrapper}>
                <img className={classes.hero} src={heroimage} />
                <div className={classes.textsection}>
                    <h1 className={classes.heroheading}>I-Witness</h1>
                    <p className={classes.text}>Connecting you to the world around you <br/> one report at a time</p>
                    <Link to="/signup"><button className={classes.button}>Explore <span>&rarr;</span></button></Link>
                </div>
               
            </div>

            <section className={classes.section}>
                <div className={classes.quotecontainer}>
                    <p className={classes.quote}><span className={classes.quo}>&quot;</span><span className={classes.citizen}>Citizens show patriotism by aiding the government take care of the nation </span><br /> via sent in reports and it has been of immense help, kudos to The I-Witness app.<span className={classes.quo}>&quot;</span></p>
                    <small className={classes.owner}>Dele Momodu - Ovasion magazine</small>
                </div>
                <div className={classes.socialwrapper}>
                    <p className={classes.social}>Social</p>
                    <div className={classes.icons}>
                        <div className={classes.icon}><i style={{marginLeft:'1.3rem',marginTop: '1rem'}}className="fab fa-facebook-f "></i></div>
                        <div className={classes.icon}><i style={{ marginLeft: '1.2rem', marginTop: '1rem' }}class="fab fa-twitter "></i></div>
                        
                        

                        <div className={classes.icon}><i style={{ marginLeft: '1.1rem', marginTop: '1rem' }}class="fab fa-instagram "></i></div>
                    </div>
                    

                </div>
                
            </section>
        </div>
    )
}

export default landingpage;