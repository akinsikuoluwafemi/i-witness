import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from '../components/login';
import Signup from '../components/signup';

import Landingpage from '../pages/landingpage';
import Home from './home';
import ReportCreate from '../pages/reports/ReportCreate'
import ReportDelete from '../pages/reports/ReportDelete'
import ReportEdit from '../pages/reports/ReportEdit'
import ReportList from '../pages/reports/ReportList'
import ReportShow from '../pages/reports/ReportShow'




const Navigation = () => {
    return (
        <div>


        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landingpage} />
                <Route path="/home" exact component={Home} />
                
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />

                <Route path="/reports/new" exact component={ReportCreate} />
                <Route path="/reports/edit" exact component={ReportEdit} />
                <Route path="/reports/delete" exact component={ReportDelete} />
                <Route path="/reports/list" exact component={ReportList} />
                <Route path="/reports/show" exact component={ReportShow} />


            </Switch>
            </BrowserRouter>
        </div>
            
    )
    
}

export default Navigation;