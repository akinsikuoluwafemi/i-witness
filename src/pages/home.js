import React, { Component, Fragment } from 'react'
import classes from './home.module.css';
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
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import  TextField  from '@material-ui/core/TextField';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PanoramaIcon from '@material-ui/icons/Panorama';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import DescriptionIcon from '@material-ui/icons/Description';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'react-router-dom/Link';
import Header from '../components/Header';
import femaleReporter from '../images/female_reporter2.jpg';
// mui stuff





class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            showReport: false,
            open: false,
            close: true,
            openProfile: false
            
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }
    handleClick(event){
        
        console.log(event.target);
        
        this.setState(prevValue => {
            return {
                showReport: !prevValue.showReport
               
            }
        })
        console.log(this.state.showReport);
    }

    handleFile(event) {
        this.setState(prevValue => {
            return {
                open: !prevValue.open,
                close: !prevValue.close
            }
        })
    }

    handleProfile(){
         this.setState(prevValue => {
            return {
                openProfile: !prevValue.openProfile,
                close: !prevValue.close
            }
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        // get the textarea input and the everything in an object, 
        // this is where you send a request
        this.handleClose();
    }

    render() {
        let showMarkup = (
               
                // <textarea width="100vw"/>

                
            <div style={{ zIndex: "100", position: 'absolute', left: '5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '40rem', background: '#F1F1F5' }}>
                    <input type="checkbox" style={{ fontSize: '3rem' }} />
                    <p style={{ fontFamily: 'lato' }}>Turn on Location</p>
                </div>
                                    
                <textarea placeholder="Write your report here" style={{ position: 'absolute', left: '1rem' }} cols="100" rows="30" />
                <Tooltip title="Add file">
                    <AttachFileIcon style={{ position: 'absolute', right: '3rem', top: '25rem', color: '#bbb' }} onClick={this.handleFile}/>
                   
                </Tooltip>
                <div style={{ display: 'flex', alignItems: 'center', background: '#F1F1F5', justifyContent: "space-around", padding: '1rem 0', marginTop: '24.5rem' }}>
                    <button className={classes.btn} >Save</button>
                    <button className={classes.btn}>Edit</button>
                    <button className={classes.btn}>Delete</button>
                    <button className={classes.btn}>Submit</button>

                </div>

            </div>

        )
    
        
        return (
            <div className={classes.first}>
                
                
                <Header image={femaleReporter}/>
              
                
                <section className={classes.buttonsection}>
                    <div className={classes.btncontent}>
                        <button className={classes.btn} onClick={this.handleClick}>Write a report</button>
                        <button className={classes.btn}>Live Reports</button>
                        <button className={classes.btn}>All Reports</button>

                    </div>

                </section>
                {this.state.showReport ? showMarkup : null}

                
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
                        {/* <span>&rarr;</span> */}

                    </div>

                    
                </section>

                <section className={classes.customerservice}>
                    <img style={{width: '500px', objectFit:'cover'}}clasName={classes.cserve} src={cs} alt="customerservice" />
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
                <Dialog
                    open={this.state.open}
                    onClose={this.state.handleClose}
                    maxWidth="sm">
                    <DialogTitle >Add a file</DialogTitle>
                    <DialogContent className={classes.dialog} style={{ borderBottom: 'thin solid #eee', padding: '1rem' }}>
                        <div style={{ display: 'flex' }}>
                            <CameraAltIcon />
                            <Typography style={{marginLeft: '.5rem'}}>Camera</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ borderBottom: 'thin solid #eee', padding: '1rem'}}>
                        <div style={{ display: 'flex' }} >
                            <PanoramaIcon />
                            <Typography style={{ marginLeft: '.5rem' }}>Picture/Video</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ padding: '1rem'}}>
                        <div style={{ display: 'flex' }} >
                            <NoteAddIcon />
                            <Typography style={{ marginLeft: '.5rem' }}>Documents</Typography>
                        </div>
                    </DialogContent>
                    <DialogActions style={{margin: '0 auto'}}>
                        <button onClick={this.handleFile} className={classes.btn}>Cancel</button>
                        <button onClick={this.handleFile} className={classes.btn}>Save</button>

                    </DialogActions>
                </Dialog>

{/* 2 */}

                <Dialog
                    open={this.state.openProfile}
                    onClose={this.state.handleClose}
                    maxWidth="sm">
                    <img style={{height: '4rem', width: '4rem', borderRadius: '50%', objectFit: 'cover', margin: '0 auto', paddingTop: '.5rem'}} src={smiling}/>
                    <DialogTitle style={{textAlign: 'center'}}>My Profile</DialogTitle>
                    <DialogContent className={classes.dialog} style={{ borderBottom: 'thin solid #eee', padding: '1rem' }}>
                        <div style={{ display: 'flex' }}>
                            <PersonIcon />
                            <Typography style={{ marginLeft: '.5rem' }}>Account Details</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ borderBottom: 'thin solid #eee', padding: '1rem' }}>
                        <div style={{ display: 'flex' }} >
                            <NoteAddIcon />
                            <Typography style={{ marginLeft: '.5rem' }}>My Reports</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex' }} >
                            <NotificationsActiveIcon />
                            <Typography style={{ marginLeft: '.5rem' }}>Notifications</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ padding: '1rem', borderBottom: 'thin solid #eee' }}>
                        <div style={{ display: 'flex' }} >
                            <DescriptionIcon />
                            <Typography className={classes.dialog} style={{ marginLeft: '.5rem' }}>T&Cs</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ padding: '1rem', borderBottom: 'thin solid #eee' }}>
                        <div style={{ display: 'flex' }} >
                            <InfoIcon />
                            <Typography className={classes.dialog} style={{ marginLeft: '.5rem' }}>About App</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ padding: '1rem', borderBottom: 'thin solid #eee' }}>
                        <div style={{ display: 'flex' }} >
                            <SettingsIcon />
                            <Typography className={classes.dialog} style={{ marginLeft: '.5rem' }}>Settings</Typography>
                        </div>
                    </DialogContent>
                    <DialogContent className={classes.dialog} style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex' }} >
                            <ExitToAppIcon />
                            <Typography className={classes.dialog} style={{ marginLeft: '.5rem' }}>Sign Out</Typography>
                        </div>
                    </DialogContent>
                    <DialogActions style={{ margin: '0 auto' }}>
                        <button onClick={this.handleProfile} className={classes.btn}>Cancel</button>
                        <button onClick={this.handleProfile} className={classes.btn}>Save</button>

                    </DialogActions>
                </Dialog>



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
                    <h3 className={classes.rev}>Reviews</h3>
                    <div className={classes.reviewswrapper}>
                        <div className={classes.review}>
                            <img className={classes.images} src={guy} alt="" />
                            <p className={classes.comment}>It has helped in saving so many lives including some of my friends and it's exciting how far they've  come.</p>
                            <p className={classes.name}>Alan Jones</p>
                            <p className={classes.work}>Sun Newspaper</p>
                        </div>

                        <div className={classes.review}>
                            <img className={classes.images} src={darkgirl} alt="" />
                            <p className={classes.comment}>It's exciting what this app has done for me.I feel lucky to be alive at such a time to witness this movement</p>
                            <p className={classes.name}>Tania Davis</p>
                            <p className={classes.work}>Punch Newspaper</p>
                        </div>

                        <div className={classes.review}>
                            <img className={classes.images} src={smiling} alt="" />
                            <p className={classes.comment}>I've been part of this from inception and i'm always ecstatic when i tell people I;m part of the I-Witness family</p>
                            <p className={classes.name}>Dave Hades</p>
                            <p className={classes.work}>I-Witness Editor</p>
                        </div>
                    </div>
                
                </section>

                <section className={classes.founder}>
                    <div className={classes.foundimage} src={founder}></div>
                    <div className={classes.bio}>
                        <p className={classes.bioname}>Tolani Ojo</p>
                        <p className={classes.title}>Founder</p>
                        <p className={classes.speech}>Growing up in Nigeria had it's advantages and disadvantages and one of it's disadvantages was the issue of emergencies with no one to report to or stand as a witness even though we had the police and that's where this idea was gotten from. We've been able to use this platform to help millions of ppeople through submitted reports by others and it's been a good ride so far.</p>

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
                                <input type="email" className={classes.email} placeholder="your email"/>
                                <button className={classes.submit}>Submit</button>
                            </div>
                        </div>


                    </div>







                </footer>

                <p className={classes.copy}>Copyright &copy; 2019 I-Witness.All Rights Reserved</p>




            </div>
            
        )
    }
}

export default home;