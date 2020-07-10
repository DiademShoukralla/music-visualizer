import React from 'react';
import { Box, Grid, RangeInput } from 'grommet';


//the specific control boxes are actually going to define the type of data
export class MusicControlBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {...props.musicControlValues};
    this.updateVolume = this.updateVolume.bind(this);
    this.updateRandomness = this.updateRandomness.bind(this);
  }

  updateVolume(event){
    this.setState({volume:event.target.value}, () => this.props.updateMusic(this.state));
  }

  updateRandomness(event){
    this.setState({randomness:event.target.value}, () => this.props.updateMusic(this.state));
  }

  render(){
    return (
      <Grid 
        rows={["xsmall", "xsmall", "medium"]}
        columns={["auto", "auto", "auto"]}
        areas={[
          ["volume", "volume", "volume"],
          ["randomness", "randomness", "medControls2"],
          ["largeControls1", "largeControls2", "largeControls3"]
        ]}
        gap="small"
        {...this.props} >
        
        <Box
          gridArea="volume">
          <RangeInput
            a11yTitle="Volume Control"
            id="volume"
            min={0}
            max={100}
            step={5}
            value={this.state.volume}
            onChange={this.updateVolume}
          />
        </Box>

        <Box>
          <RangeInput
            gridArea="randomness"
            a11yTitle="Randomness Control"
            id="randomness"
            min={0}
            max={100}
            step={5}
            value={this.state.randomness}
            onChange={this.updateRandomness}
          />
        </Box>
        
      </Grid>
    )
  }
}

export class VisualControlBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {...props.VisualControlValues};
    this.updateSpores = this.updateSpores.bind(this);
  }

  updateSpores(event){
    this.setState({numSpores:event.target.value}, () => this.props.updateVisuals(this.state));
  }

  render() {
    return (
      <Grid 
        rows={["small", "medium", "large"]}
        columns={["auto", "auto"]}
        areas={[
          ["spores", "smallControls2"],
          ["medControls1", "medControls1"],
          ["largeControls1", "largeControls2"]
        ]}
        gap="small"
        {...this.props} >
        <Box>
          <RangeInput
            gridArea="spores"
            a11yTitle="Spores Control"
            id="spores"
            min={0}
            max={10}
            step={1}
            value={this.state.numSpores}
            onChange={this.updateSpores}
          />
        </Box>
     </Grid>
    );
  }
}