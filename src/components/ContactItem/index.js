import './index.css'

const ContactItem = props => {
  const {contactDetails, addFavorite, Delete} = props
  const {id, name, mobileNo, isFavorite} = contactDetails

  const checkIsFavorite = () => {
    addFavorite(id)
  }

  const checkDelete = () => {
    Delete(id)
  }

  const deleteImgUrl = 'https://assets.ccbp.in/frontend/react-js/delete-img.png'

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>

        <button
          type="button"
          className="favorite-icon-container"
          onClick={checkDelete}
        >
          <img src={deleteImgUrl} className="favorite-icon" alt="star" />
        </button>

        <button
          type="button"
          className="favorite-icon-container"
          onClick={checkIsFavorite}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
