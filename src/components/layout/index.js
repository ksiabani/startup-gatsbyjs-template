import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Footer from '../footer';
import Header from '../header';
// import './layout'
import '../../sass/style.scss';

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 200
      if (isScrolled !== this.state.isScrolled) {
        this.setState({ isScrolled })
      }
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Startup template for TippetCMS',
                },
                { name: 'keywords', content: 'startup template, TippetCMS' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header isScrolled={this.state.isScrolled} />
            {this.props.children}
            <Footer />
          </>
        )}
      />
    )
  }
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
