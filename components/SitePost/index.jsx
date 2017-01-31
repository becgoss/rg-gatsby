import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteHeader from '../SiteHeader'
import './style.css'
import '../../static/css/highlight.css'
import '../../static/css/slick.css'
import '../../static/css/slick-theme.css'
import $ from 'jquery';
import '../../static/js/slick.min.js'
import NewsflareImage from '../../static/newsflare-phone-header.png'

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

        return (
            <div>
              <SiteHeader {...this.props}/>
              <div className='w-100 vh-75 dt relative overflow-hidden bg-light-gray'>
                <div className='dtc v-mid'>
                  <header className='near-black ml6'>
                    <h1 className='f-headline lh-title fw6 mv0'>{ post.title }</h1>
                    <h3 className='f6 fw3 lh-title mt0 i'>Case Study, Spring 2017</h3>
                    <p className="measure">Newsflare are a company specialising in user generated video which they license to news organisations around the world. Users upload content to the Newsflare platform through desktop or a mobile application.</p>
                  </header>
                </div>
                <img src={NewsflareImage} alt='Newsflare Home Screen' className='absolute top-1 right-2' />
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
