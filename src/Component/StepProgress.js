import React, { Component } from 'react';
import '../App.scss'
class StepPogress extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <section id="StepPogress">
            <ol class="steps">
                <li class="step is-complete" data-step="1">
                    
                </li>
                <li class="step is-active" data-step="2">
                   
                </li>
                <li class="step" data-step="3">
                   
                </li>
                <li class="step" data-step="4">
                   
                </li>
                </ol>
            </section>
        </div> 
        );
    }
}
 
export default StepPogress;