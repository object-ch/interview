import React, { useState } from 'react'

export default function Son({ name, changeSon }) {
  const [value, setValue] = useState(name)
  const [list, setList] = useState([])
  const saveList = () => {
    if(name ==='子菜单1-1') {}
  }
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      ></input>
      <button onClick={saveList}>修改</button>
    </div>
  )
}
