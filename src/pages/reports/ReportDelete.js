import React, { Component, Fragment } from 'react';
import femaleReporter from '../../images/female_reporter2.jpg';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import history from '../../history';
import { connect }from 'react-redux';
import { fetchReport , deleteReport} from '../../actions';
import {Link} from 'react-router-dom';

class ReportDelete extends Component {
    
    componentDidMount(){
        this.props.fetchReport(this.props.match.params.id);
        
    }
    
    renderActions () {
        const {id} = this.props.match.params;
        
        return (
            <Fragment>
                <button onClick={() => this.props.deleteReport(id)} className="ui button negative">Delete</button>
                <Link to ="/reports/list" className="ui button">Cancel</Link>
            </Fragment>
        )
    }

    renderContent(){
        if(!this.props.report){
            return 'Are you sure you want to delete this report?'
        }
        return `Are you sure you want to delete the report with title: ${this.props.report.title} `
    }

    
    render(){

        return (
            <div>
                <Header image={femaleReporter} onClick={this.handleProfile} />
                <Modal
                    title="Delete Report"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/reports/list')}
                    
            />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        report: state.reports[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {fetchReport: fetchReport, deleteReport: deleteReport})(ReportDelete);