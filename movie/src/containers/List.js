import React, { useState, useEffect} from 'react';
import CardLoadingComponent from '../components/CardLoading'
import Cards from '../components/Card'



const List = () => {
    const [ showmovie, setMovieState ] = useState({
	loading:false,
	movies:[],
    });
    
    const CardLoading = CardLoadingComponent(Cards);
    
    useEffect(() => {
	setMovieState ({loading:true})
	try {
	    const apiUrl = `http://localhost:8000/movies`
	    fetch(apiUrl).then((data) => data.json()).then((movies) => {
		setMovieState({loading:false, movies:movies});
	    });
	}
	catch (err) {
	    alert(err.message);
	}
    }, [setMovieState])
    
    return(
	<React.Fragment>
	    <CardLoading isLoading={ showmovie.loading } movies={ showmovie.movies } />
	</React.Fragment>
    );
};
export default List;
