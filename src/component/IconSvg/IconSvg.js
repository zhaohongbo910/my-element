import  React  from 'react';



export class IconSvg extends React.Component{
    constructor(props){
      super()

      this.state={
          href:'',
          xlink:"",
      }
    }
    
    componentDidMount(){
        console.log(this)
    }


    shouldComponentUpdate(){
        console.log(this)
        return true
    }
    render(){
        return(
            <svg >
              <use xlinkHref={this.state.href}/>
            </svg>
        )
    }

}

