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
      isMute: false
    }
    this.showToggleLayer = this.showToggleLayer.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
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

  render() {
    return (
      <Grommet full>
        <Keyboard 
          target="document"
          onTab={this.showToggleLayer}
          >
          <Main onMouseMove={this.showToggleLayer} fill>
            <CanvasLayer background="brand">
              Canvas
            </CanvasLayer>
            <ToggleLayer 
              show={this.state.showMenu}
              isLocked={this.state.toggleLayerLocked}
              toggleLock={this.toggleLock}
              isPlay={this.state.isPlay}
              togglePlay={this.togglePlay}
              isMute={this.state.isMute}
              toggleMute={this.toggleMute}
            />
          </Main>
        </Keyboard>
      </Grommet>
    );
  }
}

export default App;
