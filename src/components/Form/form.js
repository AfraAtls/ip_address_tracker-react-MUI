import React from 'react'
import PropTypes from 'prop-types';
import './form.scss'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl } from '@mui/material';


const Form = ({search, onChangeSearch, onSave}) => {
  return (
    <FormControl onSubmit={(event) =>{
      event.preventDefault()
      onSave()
    }}>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
       <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for any address or domain..."
        inputProps={{ 'aria-label': 'search google maps' }}
        value={search}
        onChange={(event)=> onChangeSearch(event.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </FormControl>
)}

Form.propTypes = {
  search: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default Form