import React from 'react';
import { Box, Button} from 'grommet';
import { Lock, Unlock, Play, Pause, Volume, VolumeMute } from 'grommet-icons';

const MenuButton = (props) => (
  <Button {...props} />
);
  
export const MenuBar = (props) => (
  <Box 
    justify="evenly"
    background="light-2" 
    direction="row" 
    {...props}>
    
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
);
