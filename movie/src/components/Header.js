import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { makeStyles, createTheme } from '@mui/material/styles'


function Header() {
    return (
	<React.Fragment>
	    <CssBaseline />
	    <AppBar
		position="static"
		elevation={0}
	    >
		<Toolbar>
		    <IconButton edge="start"  aria-label="menu" sx={{ mr: 2 }}>
			<div>
			    <div style={bar.div}></div>
			    <div style={bar.div}></div>
			    <div style={bar.div}></div>
			</div>
		    </IconButton>
		    <Typography component="h1" variant="h2" color="inherit" nowrap>
			Movielist
		    </Typography>
		</Toolbar>
	    </AppBar>
	</React.Fragment>
    );
}

var bar = { div: { color: "blue", backgroundColor:"blue", margin:"5px", height:"5px", width:"30px", border: "1px solid blue" },
	  }

export default Header;
