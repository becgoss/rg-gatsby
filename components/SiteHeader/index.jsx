import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import SiteNav from '../SiteNav'
import profilePic from '../../pages/rebecca-goss.jpg'

class SiteHeader extends React.Component {
    render() {
        const {location, children} = this.props
        const isHome = location.pathname === prefixLink('/')

        let header = (
            <div>
          { isHome ? (
              <article className='pa3 ph5-ns orange cf bb b--orange'>
                  <div className='fl f3 w-80 measure-narrow-l lh-copy fw4'>
                    <h1 className='f1 fw5 mb0 lh-title'>Hello!</h1>
                    <p dangerouslySetInnerHTML={ {    __html: config.siteDescription} } />
                  </div>
                  <figure className='fr w-20 dt mv4 mh0'>
                    <span
                        className='dtc w-100 br-100 aspect-ratio aspect-ratio--1x1 pb-100 bg-light-gray cover'
                        style={{
                            backgroundImage: 'url(' + profilePic + ')'
                        }}
                    >
                    </span>
                  </figure>
              </article>
            ) :
            ''
        }
        </div>
        )

        return (
          <div>
            <header role='banner' className='bg-orange cf'>
                <SiteNav {...this.props}/>
            </header>
            { header }
          </div>
        );
    }
}

SiteHeader.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteHeader
