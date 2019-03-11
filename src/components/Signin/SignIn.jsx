import React from 'react'
import { useUser } from './reducer'

const SignIn = () => {
  const { userStore } = useUser()

  const authWithGoogle = () => {
    window.location.href = 'http://192.168.86.27:5000/auth/google'
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button type="button" onClick={authWithGoogle}>
        Google Login
      </button>

      {userStore.loading ? (
        <p>Loading...</p>
      ) : (
        <p>{JSON.stringify(userStore.user)}</p>
      )}
    </div>
  )
}

export default SignIn
