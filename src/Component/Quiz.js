import React from 'react';
import '../App.scss'


class Quiz extends React.Component {
    state = {
        current: 0,
        currentSection: 0
    }

    click = () => {
        console.log("test");
    }
    render() {



        return (
            <div>

                <section id="quiz">
                    <div className="question">QUESTION 1/12</div>
                    <div className="main-wrapper">
                        <div className="top">
                            <div className="top-sound"></div>
                            <div className="top-title"></div>
                        </div>
                        <div className="middle">
                            <div className="">
                                <img src="" />
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="check">CHECK</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Quiz;