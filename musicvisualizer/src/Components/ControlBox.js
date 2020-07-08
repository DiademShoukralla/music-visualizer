import React from 'react';
import { Box } from 'grommet';

//control box will have data that is sent up after stuff
export const ControlBox = (props) => (
  <Box {...props}/>
);

//the specific control boxes are actually going to define the type of data
export const MusicControlBox = (props) => (
    <ControlBox {...props} />
);

export const VisualControlBox = (props) => (
    <ControlBox {...props} />
);