import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header/Header'
import Signup from './components/Registration/Signup'
import Home from './components/Home'
import Login from './components/Registration/Login'

const App = () => { 

  const [state, setState] = useState({
    isLoggedIn: false,
    user: {}
  })

  const handleLogin = (data) => { 
    setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  const handleLogout = () => { 
    setState({
      isLoggedIn: false,
      user: {}
    })
  }
  
  useEffect(() => { 
    loginStatus()
  }, [])

  const loginStatus = () => { 
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
      .then(response => { 
        if(response.data.logged_in) {
          handleLogin(response)
        } else { 
          handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }
    return (
      <>
      <Header/>
      {/* <RegistrationForm /> */}
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/> 
        <Route exact path="/signup" component={Signup}/>
      </Router>
      </>
    
    )
}

export default App