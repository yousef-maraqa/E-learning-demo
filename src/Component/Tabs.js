import React, { Component } from 'react';
import '../App.scss'

class Tabs extends Component {

  render() {


    return (
      <div>
        <section id="tabs">
          <div className="wrapper">
            <div className="tabs">
              <div className="tabs__header">
                <div className={this.props.currentTab == 0 ? 'tabs__heading dark-blue' : 'tabs__heading'} data-tab-index="tab-1" onClick={() => {
                  this.props.tabChange(0)

                }} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="322.897" height="76.774" viewBox="0 0 322.897 76.774">
                    <path id="Path_2335" data-name="Path 2335" d="M1689.078,841.386s-15.038-6.83-21.374-41.367c-6.317-34.538-26.5-35.408-33.347-35.408H1420.9c-6.847,0-27.029.87-33.347,35.408-6.336,34.537-21.374,41.367-21.374,41.367Z" transform="translate(-1366.181 -764.611)" fill="#BDC1D6" />
                  </svg>
                  <div className="innerwrapper">

                    <div className="Logo"></div>
                    <div className="title">Vocabulary</div>

                  </div>
                </div>
                <div className={this.props.currentTab == 1 ? 'tabs__heading yellow' : 'tabs__heading'} data-tab-index="tab-2" id="Listening" onClick={() => { this.props.tabChange(1) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="322.897" height="76.774" viewBox="0 0 322.897 76.774">
                    <path id="Path_2335" data-name="Path 2335" d="M1689.078,841.386s-15.038-6.83-21.374-41.367c-6.317-34.538-26.5-35.408-33.347-35.408H1420.9c-6.847,0-27.029.87-33.347,35.408-6.336,34.537-21.374,41.367-21.374,41.367Z" transform="translate(-1366.181 -764.611)" fill="#BDC1D6" />
                  </svg>

                  <div className="innerwrapper" >
                    <div className="Logo"  ></div>
                    <div className="title ">Listening & Speaking</div>
                  </div>
                </div>
                <div className={this.props.currentTab == 2 ? 'tabs__heading purple' : 'tabs__heading'} data-tab-index="tab-3" id="Reading" onClick={() => { this.props.tabChange(2) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="322.897" height="76.774" viewBox="0 0 322.897 76.774">
                    <path id="Path_2335" data-name="Path 2335" d="M1689.078,841.386s-15.038-6.83-21.374-41.367c-6.317-34.538-26.5-35.408-33.347-35.408H1420.9c-6.847,0-27.029.87-33.347,35.408-6.336,34.537-21.374,41.367-21.374,41.367Z" transform="translate(-1366.181 -764.611)" fill="#BDC1D6" />
                  </svg>

                  <div className="innerwrapper" >
                    <div className="Logo"></div>
                    <div className="title">Reading</div>
                  </div>

                </div>
                <div className={this.props.currentTab == 3 ? 'tabs__heading blue' : 'tabs__heading'} data-tab-index="tab-4" id="Writing" onClick={() => { this.props.tabChange(3) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="322.897" height="76.774" viewBox="0 0 322.897 76.774">
                    <path id="Path_2335" data-name="Path 2335" d="M1689.078,841.386s-15.038-6.83-21.374-41.367c-6.317-34.538-26.5-35.408-33.347-35.408H1420.9c-6.847,0-27.029.87-33.347,35.408-6.336,34.537-21.374,41.367-21.374,41.367Z" transform="translate(-1366.181 -764.611)" fill="#BDC1D6" />
                  </svg>

                  <div className="innerwrapper" >
                    <div className="Logo" ></div>
                    <div className="title">Writing</div>
                  </div>
                </div>

              </div>
              <div className="tabs__body">
                <div className="tabs__content tab-1 is-active">

                </div>
                <div className="tabs__content tab-2">

                </div>
                <div className="tabs__content tab-3">

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