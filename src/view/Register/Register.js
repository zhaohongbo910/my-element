import React from 'react';

import './Register.scss'
import { Carousel } from 'element-react';

import img1 from 'staticFile/img/backgrounds/1.jpg'
import img2 from 'staticFile/img/backgrounds/2.jpg'
import img3 from 'staticFile/img/backgrounds/3.jpg'

import { Link,PropTypes} from 'react-router-dom';
// import { PropTypes } from 'react-router'





export class Register extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          labelPosition: 'right',

            username:'',
            password:'',
            ConfirmPassword:'',

        };
      }
      

      sendPostRegister(){
         if(this.state.username!==""&&this.state.password!==""&&this.state.ConfirmPassword!==""){
           console.log('1111')
           console.log(this.history)
           this.context.history.pushState(null, '/some/path')
         } 
           
      }
      
      changeVlaue(inKey,event){  
        event.persist()
        if(inKey==='username'){ 
          this.setState({
            username:event.target.value
          })
        }else if(inKey==='password'){
          this.setState({
            password:event.target.value
          })
        }else if(inKey==='ConfirmPassword'){
          this.setState({
            ConfirmPassword:event.target.value
          }) 
        }  
      }
      render() {
        
        return (
          <div>
             <Carousel interval="3000" arrow="never" indicator-position='none' className='sliderBox' >
                {
                  [img1,img2,img3].map((item, index) => {
                    return (
                      <Carousel.Item key={index} >
                        <img className='sliderImg' src={item} alt=''/>
                      </Carousel.Item>
                    )
                  })
                }
            </Carousel>  
          <div className="page-container">
          <h1>Register</h1>
          <form  method="post">
              <input type="text" className="username" placeholder="Username" value={this.state.username}  onChange={this.changeVlaue.bind(this,'username')}/>
              <input type="password" className="password" placeholder="Password" value={this.state.password} onChange={this.changeVlaue.bind(this,'password')} />
              <input type="password" className="password" placeholder="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.changeVlaue.bind(this,'ConfirmPassword')} />
              <button type="button" onClick={this.sendPostRegister.bind(this)}>Sign me Register</button>
              {/* <button type="button" onClick={this.sendPostLogin.bind(this)}>Sign me in</button> */}
              <Link to='/' style={{color:'#ffffff',textDecoration:'none'}}><h2>Login</h2></Link>
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


Register.contextTypes = {history:PropTypes.history}