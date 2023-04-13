import React,{useState} from 'react'
import axios from 'axios';

export const Interface = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [greeting, setGreeting] = useState('');
  
    const handleSubmit = async (event) => {
        console.log(name , message)
      event.preventDefault();
      try {
        const response = await axios.get('/greeting', {
          params: { name: name, message: message }
        });
        setGreeting(response.data.greeting);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Message:
          <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  )
}
