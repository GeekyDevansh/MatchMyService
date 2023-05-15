import React from 'react'

const Loading = ({darkMode}) => {
  return (
    <div>
      {darkMode? <img src="/cube_white.gif" alt="Loading..." />: <img src="/cube.gif" alt="Loading..." />}
       
    </div>
  )
}

export default Loading