import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteHeader from '../SiteHeader'
import '../../static/css/highlight.css'
import '../../static/css/slick.css'
import '../../static/css/slick-theme.css'
import $ from 'jquery';
import '../../static/js/slick.min.js'

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

        return (
            <div>
              <SiteHeader {...this.props}/>
              <div className={`w-100 vh-75 dt relative overflow-hidden ${ post.headerBgColor || 'bg-light-gray' }`}>
                <div className='dtc v-mid'>
                  <header className={`ml6 ${ post.headerTextColor || 'near-black' }`}>
                    <h1 className='f-headline lh-title fw6 mv0'>{ post.title }</h1>
                    <h3 className='f6 fw3 lh-title mt0 i'>{ post.category }, { post.season }</h3>
                    <p className="measure">{ post.description }</p>
                  </header>
                </div>
                <img src={ imagePath } alt={ post.title } className='absolute top-1 right-2' />
              </div>
              <main role='main' className='pa3 ph5-ns'>
                <div className='lh-copy' dangerouslySetInnerHTML={ {    __html: post.body} } />
              </main>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost
