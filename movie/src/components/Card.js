import React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'



const Copyright = () => {
    const d = new Date();
    let year = d.getFullYear()
    
    return(
	<Typography variant="body" color="text.secondary" align="center">
	    <Divider />
	    {<h3>Copyright &#169; {year}</h3>}{' . '}
	</Typography>
    );
}

const Cards = (props) => {
    const { movies } = props;
    return (
	<Container sx={{ py: 8 }} maxWidth="md">
	    <Grid container spacing={4}>
		{movies.map((movie) => {
		    return (
			<Grid item key = {movie.id} xs={12} sm={6} md={6}>
			    <Card style={bars.div}>
				<CardMedia component="img" image={movie.img.src} alt={movie.img.alt} sx={{ pt:'70.00', height:"70%", width:"100%"}} />
				<CardContent style={bar.div}>
				    <Container style={ba.div}>
					<Typography style={{margin:"20px 10px 0px 10px"}} gutterBottom variant="h5" component="h2">
					    {`#${movie.ranking} - ${movie.title} (${movie.year})`}
					</Typography>
				   
				    
					<Typography  style={{margin:"20px 10px 0px 10px"}} component="p" variant="h6" color="text.primary">
					    {`Distributor: ${movie.distributor}`.substr(0, 32)}
					</Typography>
				    </Container>	
				    <Divider />
				    <Container style={ba.div}>
					<Typography  style={{margin:"20px 10px 0px 10px"}} component="p" variant="h6" color="text.primary">
					    {`Amount: ${movie.amount}`}
					</Typography>
				    </Container>
				</CardContent>
			    </Card>
			</Grid>
		    )
		})
		}
	    </Grid>
	    <Box sx={{ bgcolor:'background.paper', p:6 }} component="footer">
		<Divider />
		<Typography>
		    <Copyright />
		</Typography>
	    </Box>
	</Container>
    )
};
var bar = { div: { color: "inherit", backgroundColor:"#f32f32f32",padding:"10px 5px", margin:"0px", width:"100%", border: "transparent" },
	  }

var bars = { div: { color: "inherit", backgroundColor:"offwhite", margin:"5px", width:"100%", border: "1px solid lightgrey", display:'flex', flexDirection:'column'},
	   }

var ba =  { div: { color: "inherit", backgroundColor:"offwhite", width:"100%"},
	  }

export default Cards;
