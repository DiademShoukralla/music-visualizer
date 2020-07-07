import React, { useState } from 'react';
import { 
  Box, 
  Grommet,
  Keyboard,
  Layer,
  Main
} from 'grommet';

const ToggleLayer = (props) => (
  (props.show ? <Layer {...props} full/> : null)
);

const CanvasLayer = (props) => (
  <Box
    {...props} fill/>
);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: true
    }
    this.showToggleLayer = this.showToggleLayer.bind(this);
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
    
    this.mouseTimeoutHide = setTimeout(() => this.setState({showMenu: false}), 1000);
  }

  render() {
    return (
      <Grommet full>
        <Keyboard 
          target="document"
          >
          <Main onMouseMove={this.showToggleLayer} fill>
            <CanvasLayer background="neutral-1">
              Canvas
            </CanvasLayer>
            <ToggleLayer 
              show={this.state.showMenu}
              onEsc={()=>{this.setState({showMenu: false})}}>
              Toggle Layer
            </ToggleLayer>
          </Main>
        </Keyboard>
      </Grommet>
    );
  }
}

export default App;
