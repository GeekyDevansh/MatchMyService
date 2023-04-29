import React from 'react'

const ServiceForm = () => {
  return (
    <>

        <form action="POST">
          <input type="text" placeholder='Service' />
          <input type="textarea" placeholder='Description' />
          <input type="number" placeholder='Budget' />
          <input type="number" placeholder='Contact Number' />
        </form>

    </>
  )
}

export default ServiceForm