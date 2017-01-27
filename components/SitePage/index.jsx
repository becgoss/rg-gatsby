import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteHeader from '../SiteHeader'
import './style.css';

class SitePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div>
              <SiteHeader {...this.props}/>
              <main role='main' className='pa3 ph5-ns'>
                  <h1>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
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
