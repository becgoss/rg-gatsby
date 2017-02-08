import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SitePost from '../components/SitePost'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
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
                const headerBgColor = access(page, 'data.homeHeaderBgColor') || access(page, 'data.headerBgColor') || 'bg-light-gray'
                const imageFormat = access(page, 'data.imageFormat')

                pageLinks.push(

                    <div className='cf bb pb5 mv5 b--orange'>
                      <Link to={ prefixLink(page.path) }>
                      { imageFormat == 'aside' ? (
                        <div className={`fr w-100 w-40-m w-70-l ma0 bg-${ headerBgColor }`}>
                                <figure className="ma0 relative aspect-ratio aspect-ratio--16x9 overflow-hidden">
                                  <img src={ imagePath + image } alt={ title } className='absolute top-1' style={{
                                          left: '50%',
                                          transform: 'translate(-50%, 0)'
                                  }} />
                                </figure>
                        </div>
                        ) : (
                        <div className={`fr w-100 w-40-m w-70-l ma0 bg-${ headerBgColor }`}>
                              <figure className="ma0 relative aspect-ratio aspect-ratio--16x9 overflow-hidden">
                                <img src={ imagePath + image } alt={ title } className='aspect-ratio--object' style={{minHeight: '100%', height: 'auto'}} />
                              </figure>
                        </div>
                        )
                      }
                        <article className='fl w-100 w-60-m w-30-l pr3-ns mt3 mt0-ns'>
                            <h2 className='orange f2 fw6 mt2 mt0-ns mb3'>{ title }</h2>
                            <h3 className='f4 fw3 lh-title mt0 i gray'>{ category }, { season }</h3>
                            <p className='mb2 f4 lh-copy near-black' dangerouslySetInnerHTML={ {    __html: description} } />
                            <span className="orange bb bw1">Learn more &raquo;</span>
                        </article>
                      </Link>
                    </div>
                )
            }
        })

        return (
            <div>
              <Helmet
                  title={ config.siteTitle }
                  meta={[
                      { name: 'description', content: config.siteDescr },
                      { property: 'og:url', content: config.siteURL },
                      { property: 'og:title', content: config.siteTitle },
                      { property: 'og:description', content: config.siteMetaDescription },
                      { property: 'og:type', content: 'website' },
                      { property: 'og:image', content: config.siteImage }
                  ]}
              />
              <SiteHeader {...this.props}/>
              <main role='main' className='pa3 ph5-ns'>
                  <div className='page-inner'>
                    { pageLinks }
                  </div>
              </main>
              <SiteFooter {...this.props}/>
            </div>
              )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
