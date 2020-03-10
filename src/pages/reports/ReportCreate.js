import React, { Component } from 'react';
import Header from '../../components/Header';
import writing from '../../images/writing.jpg';
import { connect } from 'react-redux';
import { createReport, getLocation, signIn, signOut } from '../../actions';
import ReportForm from './reportForm';

class ReportCreate extends Component {
    constructor(props){
        super(props);

    }

    onSubmit = (formValues) => {
        this.props.createReport(formValues)
    }

    handleLocation = () => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
             this.props.getLocation( coords )
             console.log(coords);
        }, (err) => {
            console.log('You have to turn on your location', err)
        })
    }

   
    
    render(){
        
        return (
            <div>
                {/* <Header image={writing} link="/reports/list" nav="All Reports"/> */}

                {/* <div> */}
                <h3>Create a Report</h3>
                <ReportForm onSubmit={this.onSubmit} />
                
               {/* </div> */}
               
            </div>
        )
    }

}



// const formWrapped =  reduxForm({
//     form: 'reportCreate',
//     validate: validate
// })(ReportCreate);

const mapStateToProps = (state) => {
    console.log(state)
    return {
        location: state.auth.location,
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId

    }
}


export default connect(mapStateToProps, {createReport: createReport, getLocation: getLocation, signIn: signIn, signOut:signOut})(ReportCreate)
