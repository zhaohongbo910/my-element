import  React  from 'react';
import { Layout } from 'element-react';

import './Dashboard.scss'
import { IconSvg } from 'component/IconSvg/IconSvg';
export class Dashboard extends React.Component{
    constructor(props){
     super()
    }

    render(){
        return(
            <div className='Dashboard'>
                  <Layout.Row gutter="20">
                    <Layout.Col span="6"><div className="grid-content bg-purple">
                      <div className='titleBox'>
                          <IconSvg href={'icon-user'}/>
                      </div>
                    </div></Layout.Col>
                    <Layout.Col span="6"><div className="grid-content bg-purple">
                    <div className='titleBox'>54646465465</div>
                    </div></Layout.Col>
                    <Layout.Col span="6"><div className="grid-content bg-purple">
                    <div className='titleBox'>4544444</div>
                    </div></Layout.Col>
                    <Layout.Col span="6"><div className="grid-content bg-purple">
                    <div className='titleBox'>54545454</div>
                    </div></Layout.Col>
                  </Layout.Row>           
            </div>
        )
    }
}