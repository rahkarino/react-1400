import React from 'react'

const Wrapper = (WrappedComponent, ClassName) => {
    return (props) => (<div className={ClassName}><WrappedComponent {...props} /></div>)
}
export default Wrapper