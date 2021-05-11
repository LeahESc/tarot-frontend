import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header/Header'
import Signup from './components/Registration/Signup'
import Home from './components/Home'
import Login from './components/Registration/Login'
import UserHome from './components/User/UserHome'

const App = () => { 

  // const [state, setState] = useState({
  //   isLoggedIn: false,
  //   user: {}
  // })

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser]= useState({})

  const handleLogin = (data) => { 
    setLoggedIn(true)
    setUser(data)
    // setState({
    //   isLoggedIn: true,
    //   user: data
    // })
  }

  const handleLogout = () => { 
    // setState({
    //   isLoggedIn: false,
    //   user: {}
    // })
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
        <Route exact path="/login" render={(props) => (<Login {...props} handleLogin={handleLogin} />)} /> 
        <Route exact path="/signup" render={(props) => (<Signup {...props} handleLogin={handleLogin} />)} />
        <Route exact path="/home" render={(props) => (<UserHome {...props} user={user}/>)} />
      </Router>
      </>
    
    )
}

export default App