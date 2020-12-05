import classnames from "classnames/dedupe"
import DEFAULT_ATTRS from "../data/defaultAttrs.json"

class Icon {
  constructor(name, contents, tags = []) {
    this.name = name
    this.contents = contents
    this.tags = tags
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `devfont devfont-${name}` }
    }
  }

  /**
   * @param {Object} attrs
   * @returns {string}
  */
  toSvg(attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) }
    }

    return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`
  }

  /**
   * @returns {string}
  */
  toString() {
    return this.contents
  }
}

/**
 * @param {Object} attrs
 * @returns {string}
*/
function attrsToString(attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(" ")
}

export default Icon