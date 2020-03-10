import React, { Component } from 'react';
import femaleReporter from '../../images/female_reporter2.jpg';
import Header from '../../components/Header';

class ReportDelete extends Component {
    render(){
        return (
            <div>
                <Header image={femaleReporter} onClick={this.handleProfile} />

                ReportDelete
            </div>
        )
    }

}

export default ReportDelete;