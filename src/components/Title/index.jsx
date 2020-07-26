import React from 'react'

const Title = ({title, color, size, fontWeight}) => {

  return (
    <h1 style={{color: color, fontSize: size, fontWeight: fontWeight}}>
      {title}
    </h1>
  )
}

export default Title
