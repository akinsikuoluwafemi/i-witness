import React, { Component } from 'react';
import Header from '../../components/Header';
import writing from '../../images/writing.jpg';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getLocation, signIn, signOut } from '../../actions';

class ReportForm extends Component {
    constructor(props){
        super(props);

        
    }
    
   

    renderError =({error, touched})=> {
         if(touched && error){
             return (
                 <div className="ui error message ">
                     <div className="header">{error}</div>
                 </div> 
            );
         }
    }
    
    renderInput = ({input, label, meta}) =>{
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
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
                <Header image={writing} link="/reports/list" nav="All Reports"/>

                <div className="ui container">
                    <label for="loc" style={{ marginRight: '10px'}}>Turn On Location</label>
                    <input id="loc" type="checkbox" onClick={this.handleLocation} />
                    <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Field name="title" component={this.renderInput} label="Enter Title" />
                        <Field name="description" component={this.renderInput} label="Enter Description" />

                        <button className="ui button primary">Submit</button> 
                    </form>
                </div>
               
            </div>
        )
    }

}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a title of the report';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description of the report'
    }
    return errors;
}


const formWrapped =  reduxForm({
    form: 'reportForm',
    validate: validate
})(ReportForm);

const mapStateToProps = (state) => {
    console.log(state)
    return {
        location: state.auth.location,
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId

    }
}


export default connect(mapStateToProps, {getLocation: getLocation, signIn: signIn, signOut:signOut})(formWrapped)
