import React, { Component } from 'react';
import '../App.scss'

class Tabs extends Component {
   
    render() { 

      
        return (
             <div>
        <section id="tabs">
        <div class="wrapper">
  <div class="tabs">
    <div class="tabs__header">
      <div class="tabs__heading" data-tab-index="tab-1"  > 
       
      <div className="innerwrapper" onClick={() => { this.props.tabChange(0) }} style={this.props.current==0? {'background':this.props.data.coloredTab}:null } >
       
                <div className="Logo"></div>
                <div className="title">Vocabulary</div>
                
                </div>
            </div>
      <div class="tabs__heading l" data-tab-index="tab-2" id="Listening" >
                  <div className="innerwrapper" onClick={() => { this.props.tabChange(1) }} style={this.props.current==1? {'background':this.props.data.coloredTab}:null } >
                <div className="Logo"  ></div>
                <div className="title ">Listening & Speaking</div>
                    </div>
      </div>
      <div class="tabs__heading" data-tab-index="tab-3" id="Reading">
               <div className="innerwrapper" onClick={() => { this.props.tabChange(2) }}>
               <div className="Logo"></div>
                <div className="title">Reading</div>
               </div>
               
      </div>
      <div class="tabs__heading" data-tab-index="tab-4"  id="Writing">
                <div className="innerwrapper" onClick={() => { this.props.tabChange(3) }}>
                <div className="Logo" ></div>
                <div className="title">Writing</div>
                </div>
      </div>
       
    </div>
    <div class="tabs__body">
      <div class="tabs__content tab-1 is-active">
 
      </div>
      <div class="tabs__content tab-2">
        
      </div>
      <div class="tabs__content tab-3">
      
      </div>
      
    </div>
  </div>
</div>
        </section>

             </div> 
             );
    }
}
 
export default Tabs;