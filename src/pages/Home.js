import React from 'react'

const Home = () => {

const name = JSON.parse(localStorage.getItem("user")).user?.displayName;
console.log(name)

  return (
    <div className='text-2xl' >
        Welcome Back <span className='font-semibold' > {name} </span> !
    </div>
  )
}

export default Home