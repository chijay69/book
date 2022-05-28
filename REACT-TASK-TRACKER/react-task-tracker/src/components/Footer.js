import {useLocation} from'react-router-dom'
import { Link } from 'react-router-dom'
const Footer = () => {
    const location = useLocation()
    const text =  (location.pathname === '/') ? 'About': 'back'
    const tip =  (location.pathname === '/') ? 'About': '/'
    
    return (
	    <footer>
	    <p style={{ margin:'auto', padding:'5px' }}>Copyrights &copy; 2022</p>
	   
	    <Link to={tip} style={{ margin:'0 auto', padding:'5px' }}>{text}</Link>
	    </footer>
    )
}

export default Footer
