import Svgo from "svgo"
import cheerio from "cheerio"
import { format } from "prettier"
import DEFAULT_ATTRS from "../data/defaultAttrs.json"

/**
 * @param {string} svg
 * @param {Promise<string>}
*/
function processSvg(svg) {
  return (
    optimize(svg)
      .then(setAttrs)
      .then(format)
      .then(svg => svg.replace(/;/g, ""))
  )
}

/**
 * @param {string} svg
 * @returns {Promise<string>}
*/
function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: "(fill|stroke.*)" } },
      { removeTitle: true }
    ]
  })

  return new Promise(resolve => {
    svgo.optimize(svg, ({ data }) => resolve(data));
  })
}

/**
 * @param {string} svg
 * @returns {string}
*/
function setAttrs(svg) {
  const $ = cheerio.load(svg)

  Object.keys(DEFAULT_ATTRS).forEach(key =>
    $("svg").attr(key, DEFAULT_ATTRS[key])
  )

  return $("body").html()
}

export default processSvg