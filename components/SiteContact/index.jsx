import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteHeader from '../SiteHeader'

class SiteContact extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div>
              <SiteHeader {...this.props}/>

              <article className='pa3 ph5-ns orange cf bb b--orange'>
                  <div className='fl f3 w-80 measure-narrow-l lh-copy fw4'>
                      <h1 className='f1 fw5 mb0 lh-title'>{ post.title }</h1>

                           <div className='cf' dangerouslySetInnerHTML={ {    __html: post.body} } />

                  </div>

                  <figure className='fr w-20 mv4 mh0'>
                    <a href='ma&#105;lt&#111;&#58;&#104;e&#108;lo&#64;&#114;ebeccag&#37;6&#70;ss&#46;&#99;&#111;&#46;&#37;75k'
                        className='dt w-100 br-100 aspect-ratio aspect-ratio--1x1 pb-100 bg-orange cover white tc f4 fw4 mt3 link dim'>
                        <span className="absolute" style={{top: '50%', left: "50%", transform: 'translate(-50%, -50%)'}}>Email me</span>
                    </a>
                  </figure>
              </article>
            </div>
            );
    }
}

SiteContact.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SiteContact
