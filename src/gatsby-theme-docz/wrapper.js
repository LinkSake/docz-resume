import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children, doc }) => (
  <React.Fragment>
    <Helmet>
      {/* Primary Meta Tags */}
      <meta charSet='utf-8' />
      <title>My Resume!</title>
      <meta name='title' content="Luis Ortega's Resume"/>
      <meta name='description' content="Hello, I'm Luis Angel and this is my CV made with Docz!"/>

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website'/>
      <meta property='og:url' content='https://linksake.github.io/docz-resume/'/>
      <meta property='og:title' content="Luis Ortega's Resume"/>
      <meta property='og:description' content="Hello, I'm Luis Angel and this is my CV made with Docz!"/>
      <meta property='og:image' content='https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image'/>
      <meta property='twitter:url' content='https://linksake.github.io/docz-resume/'/>
      <meta property='twitter:title' content="Luis Ortega's Resume"/>
      <meta property='twitter:description' content="Hello, I'm Luis Angel and this is my CV made with Docz!"/>
      <meta property='twitter:image' content='https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>

      {/* Favicons */}
      <link rel='apple-touch-icon' sizes='180x180' href='https://2022.luisangel.me/apple-touch-icon.png'/>
      <link rel='icon' type='image/png' sizes='32x32' href='https://2022.luisangel.me/favicon-32x32.png'/>
      <link rel='icon' type='image/png' sizes='16x16' href='https://2022.luisangel.me/favicon-16x16.png'/>
      <link rel='icon' type='image/png' href='https://2022.luisangel.me/favicon-32x32.png'/>
      <link rel='mask-icon' href='https://2022.luisangel.me/safari-pinned-tab.svg' color='#9844b3'/>
    </Helmet>
    { children }
  </React.Fragment>
)

export default Wrapper