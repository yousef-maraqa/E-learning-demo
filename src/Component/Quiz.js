import React from 'react';
import MultipleChoice from './MultipleChoice';
import { jsonData } from '../assets/data.js';
import '../App.scss'


class Quiz extends React.Component {
    state = {
        current: 0,
        currentSection: 0,
        dataItems: jsonData,
        index: 0,
        audioPlayer: ""

    }


    render() {
        return (


            <section id="quiz">
                {/* <div className="question">QUESTION 1/{this.state.dataItems.listenpicture.length}</div> */}
                <div className="main-wrapper">
                    <MultipleChoice />
                    {/* 
                        <img onClick={()=>{this.props.nextSection(1)}} src='https://picsum.photos/200/300'></img> */}
                </div>
            </section>

        );
    }
}

export default Quiz;