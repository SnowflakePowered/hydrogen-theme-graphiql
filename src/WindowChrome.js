import React, { Component } from 'react';
import {Icon} from 'react-fa';
import "./WindowChrome.css";

class WindowChrome extends Component {
  minimize() {
    let electron = window.require('electron')
    electron.remote.getCurrentWindow().minimize();
  }
  close() {
    window.close()
  }
  maximize() {
    let electron = window.require('electron')
    electron.remote.getCurrentWindow().maximize();
  }
  render() {
    return (
      <div className="window-chrome">
        <div className="drag">

        </div>
        <div className="window-chrome-icon">
            <Icon name="window-minimize" onClick={this.minimize} />
            <Icon name="window-maximize" onClick={this.maximize} />
            <Icon name="window-close" onClick={this.close}/>
        </div>
      </div>
    );
  }
}

export default WindowChrome;
