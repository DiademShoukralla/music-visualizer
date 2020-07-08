import React from 'react';
import { Box, Grid, Layer } from 'grommet';
import { MenuBar } from './Menu';
import { MusicControlBox, VisualControlBox } from './ControlBox';

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
      <MusicControlBox 
        gridArea="musicControls" 
        a11yTitle="Music Controls">
      </MusicControlBox>
      <VisualControlBox 
        gridArea="visualControls" 
        a11yTitle="Visual Controls">
      </VisualControlBox>
      <Box 
        gridArea="footer" 
        a11yTitle="Footer information"
        background="light-2">
        
      </Box>
    </Grid>
  </Layer> : null)
}


export default ToggleLayer;