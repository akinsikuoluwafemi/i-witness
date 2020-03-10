import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { fetchReports } from '../../actions'
import list from '../../images/list.jpg';
import Link from 'react-router-dom/Link';


class ReportList extends Component {
    
    componentDidMount() {
        this.props.fetchReports();
    }

    renderAdmin(report){
        if(report.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/reports/edit/${report.id}`}>Edit</Link>

                    <button className="ui button negative">DELETE</button>

                </div>
            )
        }
    }
    
    renderList(){
        return this.props.reports.map(report => {
            return (
                <div className="item" key={report.id} >
                    {this.renderAdmin(report)}
                    
                    <i className="large middle aligned icon paper plane outline" />
                    <div className="content">
                        <div className="header" style={{marginBottom: '.5rem'}}>{report.title}</div>
                        <div className="description">{report.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate(){
        if(this.props.isSignedIn === null){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/reports/new" className="ui button primary">Create Report</Link>
                </div>
            )
        }
    }

    render(){
        console.log(this.props.reports)
        
        
        
        return (
            <div>
                <Header image={list} onClick={this.handleProfile} nav="Create Report" link="/reports/new" />
                <div style={{padding: '2rem'}}>
                    <h2>All Reports</h2>
                    <div className="ui celled list">
                        {this.renderList()}
                    </div>
                    {this.renderCreate()}
                </div>
          
            </div>
        )
    }

}
const mapStateToprops = (state) => {
    console.log(state);
    return {
        reports: Object.values(state.reports),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToprops, {fetchReports: fetchReports})(ReportList);