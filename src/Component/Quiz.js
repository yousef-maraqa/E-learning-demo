import React from 'react';
import '../App.scss'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Quiz extends React.Component {
  
    render() { 
         


        return ( 
             <div>

            <section id="quiz">
                   <div className="main-wrapper">
                        <img onClick={()=>{this.props.nextSection(1)}} src='https://picsum.photos/200/300'></img>
                    </div>
            </section>
             </div>
             );
    }
}
 
export default Quiz;