import {useState, useEffect} from "react";
import Form from "./Form";
import ChatList from "./ChatList";
import { nanoid } from "nanoid"

export default function Chat() {

  const [messages, setMessages] = useState([])
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)
  const id = nanoid()
  const localStore = window.localStorage
  const storage = localStore.getItem('user');
  let currentUser = storage ? JSON.parse(storage) : id
  if(!currentUser) {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }

  useEffect(() => {
    handleReload()
  }, [])

  const handleReload = () => {
    setLoading(true)
    fetch(process.env.REACT_APP_MESSAGES_URL)
      .then(response => response.json())
      .then(result => {
        setLoading(false)
        setMessages(result)
      }).catch(err => {
        setLoading(false)
        setHasError(true)
    })
  };

  const handleAdd = (user, text) => {
    setLoading(true)
    const data = {user, text}
    fetch(process.env.REACT_APP_MESSAGES_URL, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        setLoading(false)
        setMessages(prevState => [...messages, result])
      }).catch(err => {
        setLoading(false)
        setHasError(true)
    });


  }

  const handleDelete = id => {
    setLoading(true)
    fetch(process.env.REACT_APP_MESSAGES_URL+`/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      body: id
    })
      .then(response => response.json())
      .then(result => {
        setLoading(false)
        setMessages(result)
      }).catch(err => {
        setLoading(false)
        setHasError(true)
    });
  }

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <h1>Chat</h1>
        { loading ?
          <div className="loading">
            <span className="material-symbols-outlined">hourglass_empty</span>
          </div>
          : hasError ?
            <div className="error">Error!</div> :
            <ChatList list={messages} user={currentUser} onDelete={handleDelete} /> }
        <Form user={currentUser} onAdd={handleAdd} />
      </div>
    </div>
  );
}
