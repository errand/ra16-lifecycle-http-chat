import {useState} from "react";
import PropTypes from "prop-types";

export default function Form({user, onAdd}) {

  const [form, setForm] = useState({
    text: ''
  });

  const handleText = evt => {
    setForm(prevForm => ({...prevForm, text: evt.target.value}))
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    onAdd(user, form.text)
    setForm({
      text: ''
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="text">Текст</label>
          <textarea id="text" name="text" value={form.text} onChange={handleText} ></textarea>
        </div>
        <div className="form-group">
          <button type="submit"><span className="material-symbols-outlined">note_add</span></button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
