import React from 'react';
import { jsonData } from '../assets/data.js';
import '../App.scss'


class MultipleChoice extends React.Component {
    state = {
        current: 0,
        currentSection: 0,
        dataItems: jsonData,
        index: 0,
        audioPlayer: "",
        selectedImage: "",
        questionNumber: 1
    }

    click(index) {

        this.setState({ selectedImage: index });
    }
    playAudio() {
        // this.state.audioPlayer = this.state.dataItems.listenpicture[this.state.index].audio;
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play();
        console.log(audioEl);
    }
    // componentDidMount() {
    //     this.renderImages();
    // }
    renderImages() {
        let imgs = this.state.dataItems.listenpicture[this.state.index].answers;
        let list = [];
        imgs.forEach((imgs, index) => {

            list.push(<img src={imgs} onClick={() => this.click(index)} className={this.state.selectedImage == `${index}` ? 'imageQuestion' : 'active'} />)
        })
        return (
            <div className="img-wrapper">
                {list}
            </div>
        )
    }

    indexNext = () => {
        this.setState({ index: this.state.index + 1 });
        this.setState({ questionNumber: this.state.questionNumber + 1 });
    }

    render() {

        return (
            <div>

                <section id="multiple">
                    <div className="question">QUESTION {this.state.questionNumber}/{this.state.dataItems.listenpicture.length}</div>
                    <div className="main-wrapper">
                        <div className="top">
                            <div className="top-sound">
                                <audio className="audio-element">
                                    <source src={this.state.dataItems.listenpicture[this.state.index].audio}></source>
                                </audio>
                                <button id="play" onClick={this.playAudio}>
                                    <img src={require("../assets/image/audio.png")} />
                                </button>
                            </div>
                            <div className="top-title">{this.state.dataItems.listenpicture[this.state.index].title}</div>
                        </div>
                        <div className="middle">

                            <div className="img">
                                {/* <img src={this.state.dataItems.listenpicture[this.state.index].answers} /> */}
                                {this.renderImages()}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="check" onClick={this.indexNext}><p>CHECK</p></div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default MultipleChoice;