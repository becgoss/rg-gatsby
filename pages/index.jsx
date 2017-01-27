import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SitePost from '../components/SitePost'
import SiteHeader from '../components/SiteHeader'
// import imageSrc from './articles/2015-05-01-hello-world/whats-in-the-fridge.jpg'



class SiteIndex extends React.Component {
    render() {
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')
                const image = access(page, 'data.image')

                pageLinks.push(

                    <div className='cf bb pb5 mv5 b-orange'>
                      <figure className='fr w-100 w-60-m w-70-l ma0'>
                        <img src={ prefixLink(image) } />
                      </figure>
                        <article className='fl w-100 w-40-m w-30-ns pr3-ns'>
                            <h2 className='f3 fw6 mt3 mt0-m mt5-l'>{ title }</h2>
                            <p className='mb2 lh-copy' dangerouslySetInnerHTML={ {    __html: description} } />
                            <Link className='fancy-link' to={ prefixLink(page.path) }> Learn more &raquo;</Link>
                        </article>
                    </div>
                )
            }
        })

        return (
            <div>
              <Helmet title={ config.siteTitle }/>
              <SiteHeader {...this.props}/>
              <main role='main' className='pa3 ph5-ns'>
                  <div className='main-inner'>
                    { pageLinks }
                  </div>
              </main>
            </div>
              )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
