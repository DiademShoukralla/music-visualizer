import React from 'react';
import { Layer } from 'grommet';

const ToggleLayer = (props) => (
  (props.show ? <Layer {...props} full/> : null)
);


export default ToggleLayer;