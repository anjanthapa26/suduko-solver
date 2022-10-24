import React, { createContext, useState } from 'react'
import InnerBoard from '../components/InnerBoard/InnerBoard'

export const globalValueProvider = createContext()

const useContextApi = () => {

  const [prevBoard, setPrevBoard] = useState([])

  return (
    <globalValueProvider.Provider value={{
      prevBoard,
      setPrevBoard}}>
        <InnerBoard />
    </globalValueProvider.Provider>
  )
}

export default useContextApi
