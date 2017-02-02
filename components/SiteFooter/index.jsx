import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import moment from 'moment'

class SiteFooter extends React.Component {
    render() {
        const isHome = location.pathname === prefixLink('/')

        return (
          <footer role='content-info' className='bg-orange white cf tc mt3'>
            <div className='w-100 pv4'>
                <Link className={`link hover-washed-yellow white ph1 f6 f5-ns fw5 ttl small-caps tracked dib mr3 mr4-ns ${isHome ? ('bb bw1 b--white') : ('')} `} to={prefixLink('/')} >Work</Link>
                <Link className='link hover-washed-yellow white ph1 f6 f5-ns fw5 ttl small-caps tracked dib mr3 mr4-ns' to={prefixLink('/about/')} activeClassName="bb bw1 b--white">About</Link>
                <Link className='link hover-washed-yellow white ph1 f6 f5-ns fw5 ttl small-caps tracked dib' to={prefixLink('/contact/')} activeClassName="bb bw1 b--white">Contact</Link>
            </div>
            <p className="f6">&copy; Rebecca Goss { moment().year() }</p>
          </footer>
        );
    }
}

SiteFooter.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteFooter
