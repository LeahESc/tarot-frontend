import React, {useState} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header/Header'
import RegistrationForm from './components/Registration/RegistrationForm'


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
  useEffect = () => { 

  }
    return (
      <>
      <Header/>
      <RegistrationForm />
      <Router>
        <Route exact path="/" component={}/>
        <Route exact path="/login" component={}/> 
        <Route exact path="/signup" component={}/>
      </Router>
      </>
    
    )
}

export default App