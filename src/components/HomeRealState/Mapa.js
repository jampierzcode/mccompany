import React from 'react'

const Mapa = (props) => {
    const { src } = props;
  return (
    <iframe src={src} height="450px"/>
  )
}

export default Mapa