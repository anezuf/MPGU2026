import { AUTH_STORAGE_KEY, PASSWORD } from '../constants'

function useAuth() {
  const checkPassword = (inputPassword) => {
    return inputPassword === PASSWORD
  }

  const login = () => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true')
  }

  const logout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
  }

  const isAuthed = () => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  }

  return {
    checkPassword,
    login,
    logout,
    isAuthed,
  }
}

export default useAuth
