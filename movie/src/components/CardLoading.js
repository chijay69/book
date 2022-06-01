import React from 'react'


function CardLoading (Component) {
    return function CardLoadingComponent ({isLoading, ...props}) {
	if (!isLoading) return <Component {...props } />
	return (<p style={{ fontSize:'15px' }}>Data Loading...</p>);
    }
}
export default CardLoading;
