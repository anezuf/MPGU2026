import { useCallback } from 'react'
import { AUTH_STORAGE_KEY, HUB_PAGE_STORAGE_KEY, PASSWORD } from '../constants'

function useAuth() {
  const checkPassword = useCallback((inputPassword) => {
    return inputPassword === PASSWORD
  }, [])

  const login = useCallback(() => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true')
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
    sessionStorage.removeItem(HUB_PAGE_STORAGE_KEY)
  }, [])

  const isAuthed = useCallback(() => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  }, [])

  return {
    checkPassword,
    login,
    logout,
    isAuthed,
  }
}

export default useAuth
