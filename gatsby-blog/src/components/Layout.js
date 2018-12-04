import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign:"center",
            fontStyle:"italic",
          }}
          >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
            >
            {title}
          </Link>
        </h1>
        <hr/>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Monaco, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
            textAlign:"center"
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: '20%',
          marginRight: '20%',
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          fontFamily: 'Monaco, sans-serif',
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
