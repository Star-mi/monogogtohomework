import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, message } from '../../actions/userActions'
import UserInfo from './UserInfo'

const Home = () => {
  const dispatch = useDispatch();
  const handleClickLogOut = () => {
    dispatch(login(''));
    dispatch(message(''))
  }
  return (
    <div>
      <Link to={'/'} ><Button onClick={handleClickLogOut}>LogOUT</Button></Link>
      <UserInfo/>
    </div>
  )
}

export default Home
