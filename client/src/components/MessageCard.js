import React from 'react'

export default function MessageCard(props) {

  const line = props.payload

  return (
    <div>
      <p>{line}</p>
      <br />
    </div>
  )
}
