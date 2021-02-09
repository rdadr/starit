import React from 'react'
import { Link } from 'react-router-dom'

export default function Component1() {
  return (
    <div>
      TestPage2!<br/>
      <Link to={'/page1'}>Page1</Link><br/>
      <Link to={'/'}>Home</Link><br/>
      <Link to={'/signup'}>SignUp</Link><br/>
      <Link to={'/signin'}>SignIn</Link>
    </div>
  )
}
