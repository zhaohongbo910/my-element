import React from 'react';
import { Carousel } from 'element-react';


export class Slider extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
    }

    render(){

        return(
            <Carousel interval="3000" arrow="never" indicator-position='none' className='sliderBox' >
            {
              this.props.imgList.map((item, index) => {
                return (
                  <Carousel.Item key={index} >
                    <img className='sliderImg' src={item} alt={item}/>
                  </Carousel.Item>
                )
              })
            }
        </Carousel>  
        )
    }
}