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

function App() {
  const [showMenu, setShowMenu] = useState(true);
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
            show={showMenu}
            onEsc={()=>{setShowMenu(false)}}>
            Toggle Layer
          </ToggleLayer>
        </Main>
      </Keyboard>
    </Grommet>
  );
}

export default App;
