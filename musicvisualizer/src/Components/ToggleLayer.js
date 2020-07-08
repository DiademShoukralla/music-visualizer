import React from 'react';
import { Box, Grid, Layer } from 'grommet';
import { MenuBar } from './Menu';
import { ControlBox } from './ControlBox';

function ToggleLayer(props) {
  return ((props.show) ? <Layer {...props} full plain>
    <Grid
      rows={["xsmall", "large", "xsmall"]}
      columns={["auto", "auto"]}
      areas={[
        ["otherControls", "otherControls"],
        ["musicControls", "visualControls"],
        ["footer", "footer"]
      ]}
      gap="small">
      <MenuBar 
        gridArea="otherControls"
        a11yTitle="Other Controls"
        {...props}
      />
      <ControlBox 
        gridArea="musicControls" 
        a11yTitle="Music Controls">
      </ControlBox>
      <ControlBox 
        gridArea="visualControls" 
        a11yTitle="Visual Controls">
      </ControlBox>
      <Box 
        gridArea="footer" 
        a11yTitle="Footer information"
        background="light-2">
        
      </Box>
    </Grid>
  </Layer> : null)
}


export default ToggleLayer;