import React from 'react'
import { Link } from 'react-router'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'

class ReadNext extends React.Component {
    render() {
        const {post} = this.props
        const {pages} = this.props.route
        const {readNext} = post

        let nextPost
        if (readNext) {
            nextPost = find(pages, (page) => includes(page.path, readNext)
            )
        }
        if (!nextPost) {
            return React.createElement('noscript', null)
        } else {
            nextPost = find(pages, (page) => includes(page.path, readNext.slice(1, -1))
            )
            const description = nextPost.data.description

            return (
                <aside className="mt6 cf bt bw1 b--orange pt4">
                    <figure className="fl w-30 ma0">
                        <img src={ nextPost.data.path + nextPost.data.image } />
                    </figure>
                    <div className="fl w-70 mt3 pl3">
                      <h6 className="near-black ttu tracked ma0">Read this next</h6>
                      <h2 className="mt3"><Link to={ nextPost.path } query={ {    readNext: true} } className="link orange dim" > { nextPost.data.title }</Link></h2>
                      <p className='f5 measure lh-copy'>
                        { description }
                      </p>
                      <Link to={ nextPost.path } className="link orange bb bw1">Learn more &raquo;</Link>
                  </div>
              </aside>
                );
        }
    }
}

ReadNext.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default ReadNext
