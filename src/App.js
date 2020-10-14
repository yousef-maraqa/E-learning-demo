import React,{Component} from 'react';
import Navbar from './Component/Navbar'
import Quiz from './Component/Quiz'

import Tabs from './Component/Tabs'

 import StepPogress from './Component/StepProgress'

 import Header from './Component/Header'
 import Units from './Component/Units'

 import SubTasks from './Component/SubTasks'

//  import ListenHL from '../src/assets/listenheadicon.png'

import './App.scss';
 
// let titles = ["Listen and Say","Listent and speak","reading","writing"]
  let data =[
    {
      title:"Listen and Say",
      subtitle:'',
      img :require('../src/assets/vocahead.png'),
      color: '#7983FF',
      unitIcon : require('../src/assets/unitvoca.png'),
      coloredTab:require('../src/assets/tabcolors/vocabluetab.svg'),
      section:[
        'Learn new words',
        'Listen and choose',
        'Listen and choose',
      ]
  },
    {
      title:"Watch the video",
      subtitle:'',
      img :require('../src/assets/listenheadicon.png'),
      color: "#F3A000",
      unitIcon : require('../src/assets/unitListen.png'),
      coloredTab:require('../src/assets/tabcolors/listenOrangeTab.svg'),
      section:[
        'Watch and complete',
        'Watch and complete',
        'Watch and complete'
         
      ]
  },
     
    {
      title:"Read and choose the picture that matches.",
      subtitle:'Choose the most suitable word to complete each sentence',
      img :require('../src/assets/readHI.png'),
      color : '#BE6FF7',
      unitIcon : require('../src/assets/unitread.png'),
      coloredTab:require('../src/assets/tabcolors/ReadingOurpleTab.svg'),
      section:[
        'Read and choose',
        'Read and complete'
        
      ]

  },
    {
      title:"Listen then drag and drop the letters to make words.",
      subtitle:'',
      img :require('../src/assets/writingHI.png'),
      color :'#4CA8F7',
      unitIcon : require('../src/assets/unitwrite.png'),
      coloredTab:require('../src/assets/tabcolors/writeblueTab.svg'),
      section:[
        'Let’s review the words',
        'Make sentences'
        
      ]
  }
    
  ];

 
class App extends Component {
    state = {
      current:0,
      currentSection:0
    }

    tabChange = (val) => {
      console.log(val);
      this.setState({
        current:val,
        currentSection:0
      })
    }
    nextSection = (val) => {
      if(data[this.state.current].section.length-1 == this.state.currentSection){
        this.tabChange(this.state.current+1)
      }else{
        this.setState({
          currentSection:this.state.currentSection+1
        })
      }
      
    }
   render() {
    return (
      <div className="App">
        <Navbar/>
        
        <Tabs tabChange={this.tabChange} data={data[this.state.current]}/>
        <Header data={data[this.state.current]} />
        <div className="units-quizWarrpper wrapper">
        <Units data={data[this.state.current]} />
        <SubTasks data={data[this.state.current]} currentTab={this.state.current} currentSection={this.state.currentSection}/>
        <Quiz nextSection={this.nextSection}/>
        </div>
        
        
      </div>
    );
  }

}

export default App;
