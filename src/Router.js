import React from 'react';
import { Switch, Route } from 'react-router-dom'

import {Home} from "./view/Home/Home"
import { Login } from './view/Login/Login';
import { Register } from './view/Register/Register';

import { App } from './App';

export const MainRouter = () =>(
    <Switch>
        <Route  path='/\/' component={ Login }   />
        <Route  path='/reg' component={ Register } />
        <Route  path='/app' component={ App } />
    </Switch>  
)

export const  AppRouter = () =>(
        <Switch>   
            <Route path='/app/home' component={Home} />
            <Route path='/app/login' component={Login} />
        </Switch>
)
 
      
    
