const withImages = require('next-images');
const withMdxEnhanced = require('next-mdx-enhanced');
const mdxPrism = require('mdx-prism');

module.exports = withImages(withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [mdxPrism],
  usesSrc: true,
})({
  pageExtensions: ['ts', 'tsx', 'mdx'],
}));