import PropTypes from 'prop-types'

export default function Note({item, onDelete: handleDelete}) {
  return (
    <div className="note">
      <div className="text">{item.text}</div>
      <button className="delete" onClick={() => handleDelete(item.id)}>
        <span className="material-symbols-outlined">cancel</span>
      </button>
    </div>
  )
}

Note.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
