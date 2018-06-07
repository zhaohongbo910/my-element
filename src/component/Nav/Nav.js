import React from 'react';

import { Menu } from 'element-react'
import { Link } from 'react-router-dom'



import './Nav.scss'

export class Nav extends React.Component{
    constructor(props){
        super()
        this.state= {
            defaultActive:"0",
        }
    }
    onOpen() {
       console.log(this)  
    }
    
    onClose() {
    
    }

    render(){
        return(
              <Menu defaultActive={this.state.defaultActive} className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme='dark'>
                {
                    this.props.sliderNav.map((item,index)=>{
                        if(item.isSubMenu!==true){
                           return(
                            <Link to={item.linkTo} style={{display:item.isShow?'block':'none'}} key={index
                            }><Menu.Item index={String(index)} className='text_left'><i className={item.icon}></i>{item.title}</Menu.Item></Link>
                           )
                        }else{
                            
                            return(
                                <Menu.SubMenu ref='#Menu' index={String(index)} key={index}   title={<span ><i className={item.icon}></i>{item.title}  </span>}>
                                {
                                    item.subMenu.map((itemSub,itemIndex)=>{
                                            return(
                                                <Link to={itemSub.linkTo} key={index+'-'+itemIndex}>
                                                    <Menu.Item index={String(index+"-"+itemIndex)}>{itemSub.title}</Menu.Item>
                                                </Link>
                                        )
                                    })      
                                }
                                
                                </Menu.SubMenu>
          
                            )
                        }
                    }) 
                }
              </Menu>
        )
    }
}