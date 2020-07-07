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
  }

  render() {
    return (
      <Grommet full>
        <Keyboard 
          target="document"
          >
          <Main fill>
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
