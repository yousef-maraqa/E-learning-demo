import React, { Component } from 'react';

import '../App.scss'

class SubTasks extends Component {
    
    render() { 
        return (
             <div>
 <div className="tasks" id="tasks">
{this.props.data.section.map((task ,index)=>(

    <div className="task">
    <div className="taskIcon"> <img src={this.props.data.unitIcon}></img></div>
      <div className="tasktext">{this.props.data.section[index]}</div>
     <div className={this.props.currentSection < index?"checkbox":"checkbox activecheck"}>  </div>
     </div>


))}

 

 
</div>

        </div> 
        );
    }
}
 
export default SubTasks;