import PropTypes from 'prop-types'

export default function Note({item, author, onDelete: handleDelete}) {

  const authorClass = author ? 'author note' : 'note'

  return (
    <div className={authorClass}>
      <div className="text">{item.text}</div>
      <button className="delete" onClick={() => handleDelete(item.id)}>
        {author ? <span className="material-symbols-outlined">cancel</span> : ''}
      </button>
    </div>
  )
}

Note.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
