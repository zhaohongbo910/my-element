import React from 'react';

import './Login.scss'



import { Slider } from 'component/Slider/Slider';
import img1 from 'staticFile/img/backgrounds/1.jpg'
import img2 from 'staticFile/img/backgrounds/2.jpg'
import img3 from 'staticFile/img/backgrounds/3.jpg'
import { Link } from 'react-router-dom';



export class Login extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
            labelPosition: 'right',     
            username: '',
            password: '',
            imgList:[img1,img2,img3]
        };
      }
      

      
  
      
      componentWillMount(){
        
      }
   
      

      //  组件被更新时
      shouldComponentUpdate(extProps,nextState){
        console.log(extProps,nextState)
        return true
      }

      componentDidMount(){
        this._isMount = true
      }
      
         
      componentWillUnmount(){
        this._isMount = false
      }



      sendPostLogin() {

       if(this.state.username==='admin'){
          this.props.history.push('/app?Dashboard')
       }
         
     }
    
      changeInpVlaue(inKey,event){  
        event.persist()   //  取消合并时间
        if(inKey==='username'){ 
          this.setState({
            username:event.target.value
          })
        }else if(inKey==='password'){
          this.setState({
            password:event.target.value
          })
        } 
      }

      render() {
        return (
          <div>
            <Slider imgList={this.state.imgList}/>
          <div className="page-container">
          <h1>Login</h1>
          <form  method="post">
              <input type="text" name="username" className="username"  value={this.state.username} placeholder="Username" onChange={this.changeInpVlaue.bind(this,'username')} />

              <input type="password" name="password" className="password" value={this.state.password} placeholder="Password" onChange={this.changeInpVlaue.bind(this,'password')} />

              <button type="button" onClick={()=>{this.sendPostLogin()}}>Sign me Login</button>
              <Link to='/reg' style={{color:'#fff',textDecoration:'none'}}><h2>Register</h2></Link>
              <div className="error"><span>+</span></div>
           </form>
          <div className="connect">
              {/* <p>Or connect with</p> */}
              <p>
                  <a className="facebook"> </a>
                  <a className="twitter" > </a>
              </p>
          </div>
      </div>  
          
      </div>          
        )
      }
}