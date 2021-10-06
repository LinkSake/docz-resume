const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My Cv',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My Cv',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/angel/Documents/aviyel/2021/09-29/my-cv',
          templates:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/node_modules/docz-core/dist/templates',
          docz: '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz',
          cache: '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz/.cache',
          app: '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz/app',
          appPackageJson:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/package.json',
          appTsConfig:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/tsconfig.json',
          gatsbyConfig:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/gatsby-config.js',
          gatsbyBrowser:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/gatsby-browser.js',
          gatsbyNode:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/gatsby-node.js',
          gatsbySSR:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/gatsby-ssr.js',
          importsJs:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz/app/imports.js',
          rootJs:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz/app/root.jsx',
          indexJs:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz/app/index.jsx',
          indexHtml:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz/app/index.html',
          db:
            '/Users/angel/Documents/aviyel/2021/09-29/my-cv/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
