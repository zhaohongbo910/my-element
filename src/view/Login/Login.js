import React from 'react';

import './Login.scss'
import { Carousel } from 'element-react';

import img1 from 'staticFile/img/backgrounds/1.jpg'
import img2 from 'staticFile/img/backgrounds/2.jpg'
import img3 from 'staticFile/img/backgrounds/3.jpg'
import { Link } from 'react-router-dom';



export class Login extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          labelPosition: 'right',
          form: {
            name: '',
            region: '',
            type: ''
          }
        };
      }
      
      
      sendPostLogin(){
          console.log('11111111111');
           
      }


      
      render() {
        return (
          <div>

             <Carousel interval="5000" arrow="never" indicator-position='none' className='sliderBox'>
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
          <h1>Login</h1>
          <form  method="post">
              <input type="text" name="username" className="username" placeholder="Username" />
              <input type="password" name="password" className="password" placeholder="Password" />
              <button type="button" onClick={()=>{this.sendPostLogin()}}>Sign me Login</button>
              {/* <button type="button" onClick={this.sendPostLogin.bind(this)}>Sign me in</button> */}
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