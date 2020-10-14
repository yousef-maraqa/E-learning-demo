import React, { Component } from 'react';
import '../App.scss'

class Units extends Component {

    render() {
        return (
            <div>
                <section id="units">
                    <div className="wrapper">
                        <div className="unit active">UNIT 1</div>
                        <div className="unit">UNIT 2</div>
                        <div className="unit">UNIT 3</div>
                        <div className="unit">UNIT 4</div>
                        <div className="unit">UNIT 5</div>
                        <div className="unit">UNIT 6</div>
                        <div className="unit">UNIT 7</div>
                        <div className="unit">UNIT 8</div>
                        <div className="tasks" id=" tasks">

                            <div className="task">
                                <div className="taskIcon"> <img src={this.props.data.unitIcon}></img></div>
                                <div className="tasktext">Learn new words</div>
                                <div className="checkbox activecheck">  </div>
                            </div>

                            <div className="task">
                                <div className="taskIcon"> <img src={this.props.data.unitIcon}></img></div>
                                <div className="tasktext">Listen and choose </div>
                                <div className="checkbox ">  </div>
                            </div>

                            <div className="task">
                                <div className="taskIcon"> <img src={this.props.data.unitIcon}></img></div>
                                <div className="tasktext">Listen and choose </div>
                                <div className="checkbox">  </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        );
    }
}

export default Units;