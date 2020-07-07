import React from 'react';
import { Box, Grid, Layer } from 'grommet';

const ToggleLayer = (props) => (
  (props.show ? <Layer {...props} full plain>
    <Grid
      rows={["xsmall", "large", "xsmall"]}
      columns={[{"count": "fit", "size":"full"}]}
      areas={[
        ["otherControls", "otherControls"],
        ["musicControls", "visualControls"],
        ["footer", "footer"]
      ]}
      gap="small">
      <Box gridArea="otherControls" background="light-2">
        Other Controls
      </Box>
      <Box gridArea="musicControls" background="light-2">
        Music Controls
      </Box>
      <Box gridArea="visualControls" background="light-2">
        Visual Controls
      </Box>
      <Box gridArea="footer" background="light-2">
        Footer information
      </Box>
    </Grid>
  </Layer> : null)
);


export default ToggleLayer;