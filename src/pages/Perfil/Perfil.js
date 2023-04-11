import React from 'react'
import UserContext from '../../Context/user/UserContext'
import { useContext } from 'react'

const Perfil = () => {

  const {infoUser} = useContext(UserContext)

  const {name, email, isAdmin} =infoUser

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{isAdmin}</h1>
    </div>
  )
}

export default Perfil