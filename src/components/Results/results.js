import React from 'react'
import PropTypes from 'prop-types';
import './results.scss'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


const Results = ({data}) => {
    return(
    <Box component="div" className="results">
        <List className='list'>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="IP ADDRESS"
                    style={{color: "#999999"}}
                    secondary={
                        <Typography
                            sx={{ display: 'inline',  fontSize: '1.3em', fontWeight:'bold' }}
                            component="span"
                            color="text.primary"
                        >
                            {data.ip}
                        </Typography>
                    }
                />
                </ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="LOCATION"
                        style={{color: "#999999"}}
                        secondary={
                        <Typography
                            sx={{ display: 'inline',  fontSize: '1.3em', fontWeight:'bold' }}
                            component="span"
                            color="text.primary"
                        >
                        {data.location && data.location.region}
                        </Typography>
                     }
                />
                </ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="TIMEZONE"
                        style={{color: "#999999"}}
                        secondary={
                            <Typography
                                sx={{ display: 'inline',  fontSize: '1.3em', fontWeight:'bold' }}
                                component="span"
                                color="text.primary"
                            >
                            UTC{data.location && data.location.timezone}
                            </Typography>
                        }
                    />
                 </ListItem>
                <Divider orientation="vertical" flexItem />
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="ISP"
                        style={{color: "#999999"}}
                        secondary={
                            <Typography
                                sx={{ display: 'inline',  fontSize: '1.3em', fontWeight:'bold' }}
                                component="span"
                                color="text.primary"
                            >
                               {data.isp}
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        </Box>

)}

Results.propTypes = {
    data: PropTypes.shape({
        ip: PropTypes.string,
        location: PropTypes.shape({
            region: PropTypes.string,
            timezone: PropTypes.string,
        }),
        isp: PropTypes.string,
    }).isRequired,
    };

export default Results;