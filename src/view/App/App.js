import React  from 'react';

import {Layout} from 'element-react';

import {Nav} from 'component/Nav/Nav'
import { Head } from 'component/Head/Head';

import { AppRouter } from '@/router/RouterConfig'

import { sliderNav } from '@/sliderNav'
import './App.scss'
import { Dashboard } from 'view/Dashboard/Dashboard';

export class App extends React.Component {

  componentDidMount(){
    console.log(this)
  }
  shouldComponentUpdate(){
    console.log(this)
    return true
  }

  render() {
      let defaultContent;
      if(this.props.location.search==='?Dashboard'){
        defaultContent = (<Dashboard/>) 
      }else{
        defaultContent = (<AppRouter/>) 
      }
    return (
    <Layout.Row className=''>
        <Layout.Col span="3" className='silderContent'>
            <div className="grid-content bg-purple">
                <Nav sliderNav={sliderNav}></Nav>
            </div>
        </Layout.Col>
        <Layout.Col span="21" className='mainContent'>
          <div className="grid-content bg-purple-light">
              <Head/>
              {defaultContent}
          </div>
        </Layout.Col>
  </Layout.Row>
    );
  }
}

 
