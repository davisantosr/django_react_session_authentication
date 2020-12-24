import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CSRFToken = () => {

  const [ csrftoken, setcsrftoken ] = useState('');

  // get this func from django doc
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:8000/accounts/csrf_cookie/`)
        
      } catch (error) {
        
      }
    }
    fetchData()
    setcsrftoken(getCookie('csrftoken'));
  }, []);

  return (
    <input type='name' name='csrfmiddlewaretoken' value={csrftoken} />
  )

};

export default CSRFToken