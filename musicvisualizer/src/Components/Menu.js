import React from 'react';
import { Box, Button} from 'grommet';
import { Lock, Unlock, Play, Pause, Volume, VolumeMute } from 'grommet-icons';

const MenuButton = (props) => (
  <Button {...props} />
);
  
export const MenuBar = (props) => (
  <Box 
    justify="evenly"
    direction="row" 
    {...props}>
    
    <MenuButton 
      icon={(props.isLocked ? <Unlock/> : <Lock/>)}
      onClick={props.toggleLock}
      a11yTitle={(props.isLocked ? "Unlock Menu" : "Lock Menu")}
    />
    <MenuButton 
      icon={(props.isPlay ? <Pause/> : <Play/>)}
      onClick={props.togglePlay}
      a11yTitle={(props.isPlay ? "Pause" : "Resume")}
    />
    <MenuButton 
      icon={(props.isMute ? <Volume/> : <VolumeMute/>)}
      onClick={props.toggleMute}
      a11yTitle={(props.isMute ? "Ummute" : "Mute")}
    />

  </Box>
);
