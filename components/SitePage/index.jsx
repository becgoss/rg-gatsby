import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteHeader from '../SiteHeader'

class SitePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div>
              <SiteHeader {...this.props}/>
              <main role='main' className='pa3 ph5-ns'>
                  <header>
                    <h1 className='orange fw6'>{ post.title }</h1>
                  </header>
                  <div className='cf' dangerouslySetInnerHTML={ {    __html: post.body} } />
              </main>
            </div>
            );
    }
}

SitePage.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePage
