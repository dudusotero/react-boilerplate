export const TOKEN_KEY = '@new-used-media-token'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const signin = token => localStorage.setItem(TOKEN_KEY, token)
export const signout = () => localStorage.removeItem(TOKEN_KEY)
