import React  from 'react';

import {Layout} from 'element-react';
import {Nav} from './component/Nav/Nav'
import { Head } from './component/Head/Head';

import {AppRouter} from './Router'
export class App extends React.Component {

  onSelect() {

  }
  render() {
    return (
    
      <Layout.Row gutter="10">
        <Layout.Col span="24">
          <div className="grid-content bg-purple-dark"> 
              <Head></Head>
          </div>
        </Layout.Col>
        <Layout.Col xs="4" sm="6" md="4" lg="3">
          <div className="grid-content bg-purple">
          <Nav></Nav>
          </div>
        </Layout.Col>
        <Layout.Col xs="8" sm="6" md="8" lg="9">
          <div className="grid-content bg-purple-light">
            <AppRouter/>
          </div>
        </Layout.Col>
    </Layout.Row>

    );
  }
}

 
