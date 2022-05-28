import {useLocation} from'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    return(
	<>
	<header className='header'>
	    <h1>{title}</h1>
	    {location.pathname ==='/' && <Button onClick= {onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />}
	    </header>
	    <hr style={{border:'1px solid black', margin:'5px'}}/>
	    </>
    )
}
Header.defaultProps = {
    title: 'Engineer',
}
Header.propTypes={
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Header
