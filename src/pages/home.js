import React, { Component, Fragment } from 'react'
import classes from './home.module.css';
import reporter from '../images/female_reporter2.jpg';
import road from '../images/road_em_.jpg';
import photofire from '../images/photo-fire.jpg'
import lasema from '../images/lasema_emergency.jpg';
import emergency1 from '../images/emergency.jpg';
import emergency2 from '../images/emergency_2.jpg';
import darkgirl from '../images/dark_girl.jpg';
import cs from '../images/customer-service.jpg';
import smiling from '../images/smiling_man_720.png';
import accident from '../images/Road-accidents.jpg';
import guy from '../images/guy.jpg';
import founder from '../images/founder.jpg';

class home extends Component {
    render() {
        
        return (
            <div className={classes.first}>
                <div className={classes.wraper}>
                    <img className={classes.hero} src={reporter} />
                    <nav className={classes.nav}>
                        <ul className={classes.list}>
                            <li className={classes.listitem}>Home</li>
                            <li className={classes.listitem}>Help</li>
                            <li className={classes.listitem}>My Profile</li>
                        </ul>
                        <ul className={classes.listicon}><li className={classes.listitem}>I-Witness</li></ul>
                    </nav>
                </div>

                <section className={classes.buttonsection}>
                    <div className={classes.btncontent}>
                        <button className={classes.btn}>Write a report</button>
                        <button className={classes.btn}>Live Report</button>
                        <button className={classes.btn}>My Documents</button>
                        <button className={classes.btn}>More...</button>

                    </div>

                </section>
                
                <section className={classes.recent}>
                    <h3 className={classes.recenthead}>Your recent reports</h3>
                    <div className={classes.content}>
                        <div className={classes.imageswrapper}>
                            <img className={classes.images} src={accident} alt="" />
                            <p className={classes.date}>Jan 17th,2019</p>
                        </div>
                        <div className={classes.imageswrapper}>
                            <img className={classes.images} src={road} alt="" />
                            <p className={classes.date}>Apr 8th,2019</p>

                        </div>
                        <div className={classes.imageswrapper}>
                            <img className={classes.images} src={photofire} alt="" />
                            <p className={classes.date}>Sep 15th,2019</p>
                        </div>
                        <span>&rarr;</span>

                    </div>

                    
                </section>

                <section className={classes.customerservice}>
                    <img style={{width: '400px', objectFit:'cover'}}clasName={classes.cserve} src={cs} alt="customerservice" />
                    <div className={classes.operation}>
                        <div className={classes.intro}>
                            <h3 className={classes.here}>Here to help</h3>
                            <p className={classes.hello}>Hello there, i'm Linda</p>
                            <p className={classes.value}>Your help is incredibly valuable inassisting the community and society as a whole. Your reports go a long way and I'm here to help you in every way from writing, to proof-reading and every other way you might need our help.</p>
                        </div>
                        <div className={classes.btnwrapper}>
                            <button className={classes.btnn}>Call</button>
                            <button className={classes.btnn}>Direct message</button>
                        </div>
                        
                    </div>
                </section>

                <section className={classes.aboutus}>
                    <h2 className={classes.ab}>About Us</h2>
                    <p className={classes.aboutustext}><span>I-Witness</span> is an E-report app focused on curbing issues of unattended emergencies happening in its environs. We are building, supporting and growing a collaborative ecosystem between government officials and the
                    nigerian citizens by charting a course to enable the communication of incident reports, <span>Seamless.</span>
                        Our help center kick started officially on the 15th of June 2014 in other to  accelerate communication(with feedback) of incident reports between our team and our users.
                    </p>
                </section>

                <section className={classes.aroundyousection}>
                    <h2 className={classes.aroundyou}>Recent reports around you</h2>
                    <div className={classes.aroundcontent}>
                        <div className={classes.imageswrapper}>
                            <img className={classes.images} src={emergency1} alt="emergency image" />
                            <button className={classes.read}>Read story</button>
                        </div>
                        <div className={classes.imageswrapper}>
                            <img className={classes.images} src={emergency2} alt="emergency image" />
                            <button className={classes.read}>Read story</button>

                        </div>
                        <div className={classes.imageswrapper}>
                            <img className={classes.images} src={lasema} alt="" />
                            <button className={classes.read}>Read story</button>

                        </div>
                    </div>

                </section>

                <section className={classes.reviews}>
                    <div className={classes.review}>
                        <img src={guy} alt="" />
                        <p className={classes.comment}>It has helped in saving so many lives including some of my friends and it's exciting how far they've  come.</p>
                        <p className={classes.name}>Alan Jones</p>
                        <p className={classes.work}>Sun Newspaper</p>
                    </div>

                    <div className={classes.review}>
                        <img src={darkgirl} alt="" />
                        <p className={classes.comment}>It's exciting what this app has done for me.I feel lucky to be alive at such a time to witness this movement</p>
                        <p className={classes.name}>Tania Davis</p>
                        <p className={classes.work}>Punch Newspaper</p>
                    </div>

                    <div className={classes.review}>
                        <img src={smiling} alt="" />
                        <p className={classes.comment}>I've been part of this from inception and i'm always ecstatic when i tell people I;m part of the I-Witness family</p>
                        <p className={classes.name}>Dave Hades</p>
                        <p className={classes.work}>I-Witness Editor</p>
                    </div>
                </section>

                <section className={classes.founder}>
                    <img src={founder} alt="" />
                    <div className={classes.bio}>
                        <p className={classes.bioname}>Tolani Ojo</p>
                        <p className={classes.title}>Founder</p>
                        <p className={classes.speech}>Growing upmin Nigeria had it's advantages and disadvantages and one of it's disadvantages was the issue of emergencies with no one to report to or stand as a witness even though we had the police and that's where this idea was gotten from. We've been able to use this platform to help millions of ppeople through submitted reports by others and it's been a good ride so far.</p>

                    </div>
                </section>

                <footer className={classes.footer}>
                    <div className={classes.socialwrapper}>
                        <p className={classes.logoname}>I-Witness</p>
                        <p className={classes.social}>Social</p>
                        <div className={classes.icons}>
                            <div className={classes.icon}><i style={{ marginLeft: '1.3rem', marginTop: '1rem' }} className="fab fa-facebook-f "></i></div>
                            <div className={classes.icon}><i style={{ marginLeft: '1.2rem', marginTop: '1rem' }} class="fab fa-twitter "></i></div>



                            <div className={classes.icon}><i style={{ marginLeft: '1.1rem', marginTop: '1rem' }} class="fab fa-instagram "></i></div>
                        </div>


                    </div>

                    <div className={classes.contactus}>
                        <p className={classes.con}>Contact Us</p>
                        <div className={classes.find}>
                            <i className="fas fa-map-marker-alt"></i>
                            <p className={classes.where}>15 Mobolaji Bank Anthony, Lagos Nigeria</p>
                        </div>

                        <div className={classes.find}>
                            <i class="fas fa-phone"></i>
                            <p className={classes.where}>Support: 08098765432, 09087897668</p>
                        </div>

                        <div className={classes.find}>
                            <i class="fas fa-envelope-square"></i>
                            <p className={classes.where}>Email: I-Witness@gmail.com </p>
                        </div>

                        <div className={classes.sub}>
                            <p className={classes.newsletter}>Subscribe to our Newsletter</p>
                            <div className={classes.input}>
                                <input type="email" className={classes.email}/>
                                <button className={classes.submit}>Submit</button>
                            </div>
                        </div>


                    </div>

                    <p className={classes.copy}>Copyright &copy; 2019 I-Witness.All Rights Reserved</p>






                </footer>




            </div>
            
        )
    }
}

export default home;