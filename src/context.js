import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Context = createContext()

const ContextProvider = ({ children }) => {
  const navitage = useNavigate()
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [loginPassword, setLoginPassword] = useState()
  const [loginEmail, setLoginEmail] = useState()
  //REGISTER

  const Registr = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/sign-up", {
      email: email,
      username: username,
      password: password
    })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("username")
          navitage("/login")
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  // get-info

  const [array, setArray] = useState([])
  const getApi = () => {
    axios.get('http://127.0.0.1:8000/api/info/')

      .then(res => setArray(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getApi()
  }, [])
  // search

  const [valueinput, setValueInput] = useState('')
  const FilterdDrink = array.filter(drink => drink.title.toLowerCase().includes(valueinput.toLowerCase()));

// th

  // Проверка на регистрацию условие: если человек успешно войдет в аккаунт то появится кнопка выйти 

  const [isRegistered, setIsRegistered] = useState(false);
  //LOGIN

  const Login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/sign-in", {
        email: loginEmail,
        password: loginPassword,
      })
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          localStorage.setItem("access", response.data.token);
          console.log(response);
          setIsRegistered(true)
          navitage("/")
        }
      }).catch((err) => {
        alert(err)
      })
  };


  return (
    <Context.Provider value={{
      Registr, email,
      username,
      password,
      setEmail,
      setUsername,
      setPassword,
      loginEmail,
      setLoginEmail,
      loginPassword,
      setLoginPassword,
      Login,
      setArray,
      array,
      setIsRegistered,
      isRegistered,
      valueinput,
      setValueInput,
      FilterdDrink

    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }