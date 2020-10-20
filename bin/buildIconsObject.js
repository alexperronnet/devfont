import path from 'path'
import cheerio from 'cheerio'
import { minify } from 'html-minifier'

/**
 * @param {string[]} svgFiles
 * @param {Function} getSvg
 * @returns {Object}
*/
function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
    .map(svgFile => {
      const name = path.basename(svgFile, '.svg')
      const svg = getSvg(svgFile)
      const contents = getSvgContents(svg)
      return { name, contents }
    })
    .reduce((icons, icon) => {
      icons[icon.name] = icon.contents
      return icons
    }, {})
}

/**
 * @param {string} svg
 * @returns {string}
*/
function getSvgContents(svg) {
  const $ = cheerio.load(svg)
  return minify($('svg').html(), { collapseWhitespace: true })
}

export default buildIconsObject