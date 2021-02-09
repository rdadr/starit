import React from 'react'
import { Link } from 'react-router-dom'

export default function Component1() {
  return (
    <div>
      TestPage1!<br/>
      <Link to={'/'}>Home</Link><br/>
      <Link to={'/page2'}>Page2</Link><br/>
      <Link to={'/signup'}>SignUp</Link><br/>
      <Link to={'/signin'}>SignIn</Link>
    </div>
  )
}
