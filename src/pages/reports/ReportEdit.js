import React, { Component } from 'react';
import femaleReporter from '../../images/female_reporter2.jpg';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { fetchReport, editReport } from '../../actions';
import ReportForm from './reportForm';
import _ from 'lodash';


class ReportEdit extends Component {
    componentDidMount() {
        this.props.fetchReport(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editReport(this.props.match.params.id, formValues)
    }


    render() {
        // console.log(this.props.report);
        
        if(!this.props.report){
            return <div>Loading...</div>
        } 
        return (
        <div>
            {/* <Header image={femaleReporter} /> */}
                <div>
                    <h3>Edit a Report</h3>  
                    <ReportForm initialValues={_.pick(this.props.report, 'title', 'description')} onSubmit={this.onSubmit} />

                </div>
            </div>
        );
    }
        
}



const mapStateToProps = (state, ownProps) => {
    return {
        report: state.reports[ownProps.match.params.id]
     }
}

export default connect(mapStateToProps, {fetchReport:fetchReport, editReport: editReport})(ReportEdit);