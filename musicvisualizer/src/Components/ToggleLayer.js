import React, { useState } from 'react';
import { Box, Button, Grid, Layer } from 'grommet';

function ToggleLayer(props) {
  const [isFocused, setIsFocused] = useState(false);
  return ((props.show || isFocused) ? <Layer {...props} full plain>
    <Grid
      rows={["xsmall", "large", "xsmall"]}
      columns={[{"count": "fit", "size":"full"}]}
      areas={[
        ["otherControls", "otherControls"],
        ["musicControls", "visualControls"],
        ["footer", "footer"]
      ]}
      gap="small">
      <Box 
        gridArea="otherControls" 
        background="light-2" 
        direction="row" 
        a11yTitle="Other Controls">
        <Button label="label" />
        <Button label="label" />
        <Button label="label" />
        <Button label="label" />
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