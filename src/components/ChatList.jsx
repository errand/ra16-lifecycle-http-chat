import PropTypes from "prop-types";
import Note from "./Note";

export default function ChatList({list, user, onDelete: handleDelete}) {
  const listItems = list.map(item => <Note key={item.id} author={user === item.uid ? true : false} item={item} onDelete={handleDelete}/>)

  return(
    <div className="notes">
      {listItems}
    </div>
  )
}
ChatList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
