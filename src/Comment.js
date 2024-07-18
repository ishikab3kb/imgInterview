import React from 'react'

const ComContainer = ({title,date}) => {
  return (
    <div className='ComContainer'>
        <p>{title}</p>
        <p>{date}</p>
    </div>
  )
}

export default ComContainer