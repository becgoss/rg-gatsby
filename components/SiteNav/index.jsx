import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav role='navigation' className='dt w-100 border-box pa3 ph5-ns bb b--washed-yellow'>
                <Link className='dtc v-mid washed-yellow link hover-white w-25' to={prefixLink('/')} title='Home'>
                    <span className='ttu tracked fw7 f2'>RG</span>
                </Link>
                <div className='dtc v-mid w-75 tr'>
                    <Link className='link hover-white washed-yellow f6 f5-ns fw5 ttl small-caps tracked dib mr3 mr4-ns' to={prefixLink('/work/')}  activeClassName="current">Work</Link>
                    <Link className='link hover-white washed-yellow f6 f5-ns fw5 ttl small-caps tracked dib mr3 mr4-ns' to={prefixLink('/about/')} activeClassName="current">About</Link>
                    <Link className='link hover-white washed-yellow f6 f5-ns fw5 ttl small-caps tracked dib' to={prefixLink('/contact/')} activeClassName="current">Contact</Link>
                </div>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav
