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
import '../../static/js/slick-init.js'

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
              <main role='main' className='pa3 ph5-ns'>
                  <h1 className='lh-title'>{ post.title }</h1>
                  <div className='lh-copy center' dangerouslySetInnerHTML={ {    __html: post.body} } />
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
