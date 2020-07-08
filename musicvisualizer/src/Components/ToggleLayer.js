import React from 'react';
import { Box, Button, Grid, Layer } from 'grommet';
import { Lock, Unlock, Play, Pause, Volume, VolumeMute } from 'grommet-icons';

const MenuButton = (props) => (
  <Button {...props} />
);

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
      <Box 
        gridArea="otherControls" 
        justify="evenly"
        background="light-2" 
        direction="row" 
        a11yTitle="Other Controls">
        
        <MenuButton 
          icon={(props.isLocked ? <Unlock/> : <Lock/>)}
          onClick={props.toggleLock}

        />
        <MenuButton 
          icon={(props.isPlay ? <Pause/> : <Play/>)}
          onClick={props.togglePlay}
        />
        <MenuButton 
          icon={(props.isMute ? <Volume/> : <VolumeMute/>)}
          onClick={props.toggleMute}
        />
      </Box>
      <Box 
        gridArea="musicControls" 
        a11yTitle="Music Controls"
        background="light-2">
        
      </Box>
      <Box 
        gridArea="visualControls" 
        a11yTitle="Visual Controls"
        background="light-2">
        
      </Box>
      <Box 
        gridArea="footer" 
        a11yTitle="Footer information"
        background="light-2">
        
      </Box>
    </Grid>
  </Layer> : null)
}


export default ToggleLayer;