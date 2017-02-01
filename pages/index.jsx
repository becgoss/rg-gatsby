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
                const season = access(page, 'data.season')
                const image = access(page, 'data.image')
                const imagePath = access(page, 'data.path')
                const headerBgColor = access(page, 'data.headerBgColor')

                pageLinks.push(

                    <div className='cf bb pb5 mv5 b--orange'>
                      <div className={`fr w-100 w-60-m w-70-l ma0 ${ headerBgColor }`}>
                          <figure className="ma0 relative aspect-ratio aspect-ratio--16x9 overflow-hidden">
                              <img src={ imagePath + image } alt='Newsflare Home Screen' className='absolute top-1'    style={{
                                      left: '50%',
                                      transform: 'translate(-50%, 0)'
                              }} />
                          </figure>
                      </div>
                        <article className='fl w-100 w-40-m w-30-ns pr3-ns'>
                            <h2 className='f2 fw6 mt2 mt0-ns mb3'>{ title }</h2>
                            <h3 className='f4 fw3 lh-title mt0 i gray'>{ category }, { season }</h3>
                            <p className='mb2 f4 lh-copy' dangerouslySetInnerHTML={ {    __html: description} } />
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
                  <div className='page-inner'>
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
