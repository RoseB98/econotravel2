import * as React from 'react';
import {Button, Box, Menu, MenuItem} from '@mui/material';

import function DropdownDuracion () {

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

return (
  <>
  <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

      <Button style = {{fontSize:"0.8rem", textTransform:"capitalize",color:"#2f2f2f", fontWeight:"bold"}} id="basic-button" value ={selectedExp} onChange={handleExpChange} onClick={handleClick}>Ubicación</Button>
          <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} 
          MenuListProps={{ 'aria-labelledby': 'basic-button',}}>
                <MenuItem style= {{fontSize:"0.8rem", color:"#2f2f2f", fontWeight:"bold"}} onClick={handleClose}>Corta Duración</MenuItem>
                <MenuItem style= {{fontSize:"0.8rem", color:"#2f2f2f", fontWeight:"bold"}} onClick={handleClose}>Larga Duración</MenuItem>
          </Menu>
  <Box/>
  </>
  );
}
export default DropdownDuracion,