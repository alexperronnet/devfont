import Icon from './icon'
import tags from '../data/tags.json'
import icons from '../dist/icons.json'

export default Object.keys(icons)
  .map(key => new Icon(key, icons[key], tags[key]))
  .reduce((object, icon) => {
    object[icon.name] = icon
    return object
  }, {})