import React from 'react';



export class Slider extends React.Component{
    constructor(props){
        super(props)
        this.imgList = this.props.Slider.imgList
    }

    componentDidMount(){
       setInterval(()=>{

       },this.props.Slider) 
    }

    render(){
        return(
            <ul>
              
            </ul>
        )
    }




}