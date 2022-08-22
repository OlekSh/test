import { useState } from 'react';

import classes from './form.module.css'

function Form() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sendText, setSendText] = useState('Відправити')

function handlerSubmit(ev) {
    ev.preventDefault();
    console.log("Submit");
    let mes = {
      name,
      email: mail,
      message
    }
    fetch('/api/contact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(mes)
    })
    .then(res => {
        res.json();
    })
    .then(message => {
      setMail('');
      setName('');
      setMessage('')
      setSendText('Відправлено');
    })
  }


  function handleInputMail(event) {
    setMail(event.target.value);
  }

  function handleInputName(event) {
    setName(event.target.value);
  }

  function handleInputMessage(event) {
    setMessage(event.target.value);
  }

  return (
    <form className={classes.form}
      onSubmit={handlerSubmit}
    > 
      <label className={classes.form_field}> 
        <span>Ім'я :</span>
        <input 
          type='text' 
          name="name" 
          value={name}
          onChange={handleInputName}
          required />
      </label>
      <label className={classes.form_field}> 
        <span>Скринька :</span>
        <input 
          type='mail' 
          name="email"
          value={mail}
          onChange={handleInputMail}
          required 
          />
      </label>
      <label className={classes.form_field}>
        <span>Повідомлення :</span>
        <textarea
          value={message}
          onChange={handleInputMessage}
        >

        </textarea>
      </label>
      <button 
        className={classes.form_submit} 
        type="submit"> 
          {sendText}
      </button>
    </form>
  )
}

export default Form;