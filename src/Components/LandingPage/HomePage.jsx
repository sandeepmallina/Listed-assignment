import React,{ useState, useEffect }  from 'react'
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"
import {AiFillApple} from "react-icons/ai"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import "./HomePage.css"

function HomePage() {
  const history=useNavigate();
  const [user,setUser]=useState()

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {setUser(codeResponse);
      history("/dashboard")

    },
    onError: (error) => console.log('Login Failed:', error)
});
  return (
    <div className='home__conatiner'>
    <div className="home__left">
      <h1 className='home__title'>
      Board.
      </h1>

    </div>
    <div className="home__right">
    <div className="main__container">
    <div className="title__container">
    <h1 className='login__title'>Sign In </h1>
    <h4 className='login__subtitle fonts__style' >Sign in to your account</h4>
    </div>
    <div className="button__conatiner">
      <button type="submit" className='signIn__button' onClick={login}><FcGoogle size="1rem"/>Sign in with Google</button>
      <button type="submit" className='signIn__button'><AiFillApple size="1rem"/>Sign in with Apple</button>
    </div>
    <div className="login__container">
    <h4 className='fonts__style'>Email Address</h4>
    <input type="text" className='input__box fonts__style'/>
    <h4 className='fonts__style'>Password</h4>
    <input type="password" className='input__box fonts__style' />
    <p className='fonts__style'>Forgot Password?</p>
    <button type="submit" className='main__signin__btn'>Sign In</button>
    </div>
    <p className='fonts__style register__title'>Don't have an account? <span>Register here</span></p>
  

    </div>


    </div>

    </div>
  )
}

export default HomePage