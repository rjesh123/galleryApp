// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickItem = id => {
    setActiveThumbnailId(id)
  }

  const activeClassName = isActive ? 'thumb active-thumb' : 'thumb'

  return (
    <li className="image-item">
      <button type="button" className={activeClassName} onClick={onClickItem}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumb-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
