import React from 'react';
import { Switch, Route,Redirect} from 'react-router-dom'

import {Home} from "view/Home/Home"
import { Login } from 'view/Login/Login';
import { Register } from 'view/Register/Register';

import { App } from 'view/App/App';

import { Dashboard } from 'view/Dashboard/Dashboard';




export const MainRouter = () =>(
        <Switch>
            <Route  path='/\/'  component={ Login }   />
            <Route  path='/reg' component={ Register } />
            <Route  path='/app' component={ App }/>
        </Switch>
)





export const  AppRouter = (props) =>(
        <Switch >
              
            <Route  path='/app/dashboard' component={Dashboard}/>

        </Switch>
)
 