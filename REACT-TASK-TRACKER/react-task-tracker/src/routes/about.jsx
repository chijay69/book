import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
const About= () => {
    return(
	<div className='container'>
	    <Header title='TaskTracker' />
	    <h4>Version 1.0.0</h4>
	    <Link to="/">Go back</Link>
	    <Footer />
	</div>
    )
}
export default About
