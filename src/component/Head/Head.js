import React from 'react'

import { Menu } from 'element-react';



export class Head extends React.Component{

    onSelect(){

    }
     render(){
         return(
            <Menu className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
            <Menu.Item index="1"></Menu.Item>
            <Menu.Item index="3"></Menu.Item>
          </Menu>
         )
     }
}