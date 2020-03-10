import React, { Component } from 'react';
import femaleReporter from '../../images/female_reporter2.jpg';
import Header from '../../components/Header';

class ReportShow extends Component {
    render(){
        return (
            <div>
                <Header image={femaleReporter} onClick={this.handleProfile} />

                ReportShow
            </div>
        )
    }

}

export default ReportShow;