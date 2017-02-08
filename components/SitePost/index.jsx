import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteHeader from '../SiteHeader'
import SiteFooter from '../SiteFooter'

class SitePost extends React.Component {
    componentDidMount() {
      $('.slick-slider').slick({
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          dots: true,
          fade: true,
          infinite: true
      });
    }

    render() {
        const {route} = this.props
        const post = route.page.data
        const imagePath = post.image
        const imageFormat = post.imageFormat
        const bgSize = post.bgSize

        return (
            <div>
              <SiteHeader {...this.props}/>
              { imageFormat == 'aside' ? (
                <div className={`w-100 vh-75 dt relative overflow-hidden bg-${ post.headerBgColor || 'bg-light-gray' }`}>
                  <div className='dtc pt3 pt0-l v-top v-mid-l tc tl-l'>
                    <header className={`ml6-l ${ post.headerTextColor || 'near-black' }`}>
                      <h1 className='f1 f-headline-l lh-title fw6 mv0'>{ post.title }</h1>
                      <h3 className='f6 fw3 lh-title mt0 i'>{ post.category }, { post.season }</h3>
                      <p className="measure ph2 ph0-ns center mh0-l lh-copy">{ post.description }</p>
                    </header>
                  </div>
                  <img src={ imagePath } alt={ post.title } className='absolute aside-image' />
                </div>
              ) : (
                <div className={`w-100 vh-75 dt relative cover-image tc overflow-hidden bg-${ post.headerBgColor || 'bg-light-gray' } ${bgSize}`}
                  style={{
                    backgroundImage: 'url(' + imagePath + ')',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'repeat-x'
                  }}
                  >
                  <div className='dtc v-mid bg-black-50'>
                    <header className={ post.headerTextColor || 'near-black' }>
                      <h1 className='f1 f-headline-l lh-title fw6 mv0'>{ post.title }</h1>
                      <h3 className='f6 fw3 lh-title mt0 i'>{ post.category }, { post.season }</h3>
                      <p className="measure ph2 ph0-ns center lh-copy">{ post.description }</p>
                    </header>
                  </div>
                </div>
              )
              }
              <main role='main' className='pa3 ph5-ns'>
                <div className='lh-copy' dangerouslySetInnerHTML={ {    __html: post.body} } />
              </main>
              <SiteFooter {...this.props}/>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost
