import React from 'react'

const Loading = ({darkMode}) => {
  return (
    <div>
      {darkMode? <img src="/cube_white.webp" alt="Loading..." />: <img src="/cube.webp" alt="Loading..." />}
       
    </div>
  )
}

export default Loading