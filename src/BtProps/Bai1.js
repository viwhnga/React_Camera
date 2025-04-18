import React from 'react'

export default function Bai1() {
  return (
    <div>
      <Greeting name="Dinh"/>
    </div>
  )
}
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
