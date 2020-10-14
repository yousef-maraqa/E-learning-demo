import React, { Component } from 'react';
import '../App.scss'
class Header extends Component {
    
    render() { 
        let colorTest=this.props.data.color;
        return ( 
        <div>
            <section id="header" style={ {backgroundColor : this.props.data.color  }}>
            <div className="stage">English Language for Stage 1</div>
            
        <div className="title">{this.props.data.title}  </div>
         
            <div className="logo" id="">
                <img src={this.props.data.img}/>
            </div>
            </section>


        </div>
         );
    }
}
 
export default Header;