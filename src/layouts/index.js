import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Img from "gatsby-image";
import './index.css'
import { isAbsolute } from 'path';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'under construction' },
        { name: 'keywords', content: 'personal services' },
      ]}
    />
    <div>
    <Img
      title="Under construction"
      alt="Din Ou's almost there"
      sizes={data.headerImage.sizes}
      style={{
        left: "11%",
        width: "80%",
        height: "100%"
      }}
    />
    </div>
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const imageQueryAndSiteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: imageSharp(id: { regex: "/coming/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
