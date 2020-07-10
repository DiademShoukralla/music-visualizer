import React from 'react';
import { 
  Grommet,
  Keyboard,
  Main
} from 'grommet';
import ToggleLayer from './Components/ToggleLayer';
import CanvasLayer from './Components/CanvasLayer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: true,
      toggleLayerLocked: false,
      isPlay: true,
      isMute: false,
      musicControls: {
        volume: 50,
        randomness: 25
      },
      visualControls: {
        numSpores: 3
      }
    }
    this.showToggleLayer = this.showToggleLayer.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.updateMusic = this.updateMusic.bind(this);
    this.updateVisuals = this.updateVisuals.bind(this);
  }

  componentDidMount() {
    this.mouseTimeoutHide = setTimeout(() => this.setState({showMenu: false}), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.mouseTimeoutHide);
  }

  showToggleLayer(){
    clearTimeout(this.mouseTimeoutHide);
    this.setState({showMenu: true});
    
    if(!this.state.toggleLayerLocked){
      this.mouseTimeoutHide = setTimeout(() => this.setState({showMenu: false}), 1000);
    }
  }

  toggleLock(){
    this.setState(prevState => ({toggleLayerLocked: !prevState.toggleLayerLocked}), this.showToggleLayer);
  }

  togglePlay(){
    this.setState(prevState => ({isPlay: !prevState.isPlay}))
  }

  toggleMute(){
    this.setState(prevState => ({isMute: !prevState.isMute}))
  }

  onKeyPress(key){
    const hotKeys = {
      MUTE: 'KeyM',
      PAUSE: 'Space',
      LOCK: 'KeyL'
    }
    let hotKeyPressed = false;
    if(key.code === hotKeys.MUTE){
      hotKeyPressed = true;
      this.toggleMute();
    } else if (key.code === hotKeys.PAUSE) {
      hotKeyPressed = true;
      this.togglePlay();
    } else if (key.code === hotKeys.LOCK) {
      hotKeyPressed = true;
      this.toggleLock();
    }
    if(hotKeyPressed){
      this.showToggleLayer();
    }
  }

  updateMusic(newValues){
    this.setState({musicControls: newValues})
  }

  updateVisuals(newValues){
    this.setState({visualControls: newValues})
  }

  render() {
    return (
      <Grommet full>
        <Keyboard 
          target="document"
          onTab={this.showToggleLayer}
          onKeyDown={this.onKeyPress}
          >
          <Main onMouseMove={this.showToggleLayer} fill>
            <CanvasLayer>
              Volume: {this.state.musicControls.volume}
              <br/>
              Randomness: {this.state.musicControls.randomness}
              <br/>
              Spores: {this.state.visualControls.numSpores}
            </CanvasLayer>
            <ToggleLayer 
              show={this.state.showMenu}
              isLocked={this.state.toggleLayerLocked}
              toggleLock={this.toggleLock}
              isPlay={this.state.isPlay}
              togglePlay={this.togglePlay}
              isMute={this.state.isMute}
              toggleMute={this.toggleMute}
              musicControlValues={this.state.musicControls}
              visualControlValues={this.state.visualControls}
              updateMusicControlValues={this.updateMusic}
              updateVisualControlValues={this.updateVisuals}
            />
          </Main>
        </Keyboard>
      </Grommet>
    );
  }
}

export default App;
