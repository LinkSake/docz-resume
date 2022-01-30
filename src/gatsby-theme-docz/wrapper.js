import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children, doc }) => <React.Fragment>
  <Helmet>
    <meta charSet='utf-8' />
    <title>My Resume!</title>
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'/>
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
    <link rel='icon' type='image/png' href='favicon.ico'/>
    <link rel='manifest' href='/site.webmanifest'/>
    <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#9844b3'/>
  </Helmet>
  { children }
</React.Fragment>

export default Wrapper