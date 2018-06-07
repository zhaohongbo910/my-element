import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default';
import { BrowserRouter } from 'react-router-dom'

import './index.css';

import { MainRouter } from '@/router/RouterConfig';


ReactDOM.render( 
      ( <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      ),document.getElementById('root'));
registerServiceWorker();
