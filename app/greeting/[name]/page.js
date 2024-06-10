import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>Nice to meet u. {params.name}</h1>
    </div>
  )
}

export default page
