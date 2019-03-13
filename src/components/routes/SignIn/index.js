import React from 'react'
import { useAuth } from '../../../reducers'

const SignIn = () => {
  const { authStore } = useAuth()

  const authWithGoogle = () => {
    window.location.href = 'https://feracode-num.herokuapp.com/auth/google'
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button type="button" onClick={authWithGoogle}>
        Google Login
      </button>

      {authStore.loading ? (
        <p>Loading...</p>
      ) : (
        <p>{JSON.stringify(authStore.user)}</p>
      )}
    </div>
  )
}

export default SignIn
