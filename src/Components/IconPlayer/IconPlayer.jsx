import React, { useState } from 'react'

export const IconPlayer = () => {
    const [currentPlayer, setCurrentPlayer] = useState("X")
  return (
    <p>
        {
            currentPlayer
        }
    </p>
  )
}
