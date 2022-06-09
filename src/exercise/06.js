// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // exercise
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target[0].value)
  }

  // extra credit 1
  // const usernameInput = React.useRef(null)
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   onSubmitUsername(usernameInput.current.value)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input ref={usernameInput} id="username" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // extra credit 2
  // const [errorMessage, setErrorMessage] = React.useState(null)

  // const handleChange = event => {
  //   const value = event.target.value.trim()
  //   const isValid = value === value.toLowerCase()

  //   if (!isValid) {
  //     setErrorMessage('Only lowercase letters are allowed!')
  //   } else {
  //     setErrorMessage(null)
  //   }
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input onChange={handleChange} id="username" type="text" />
  //     </div>
  //     <div style={{color: 'red'}} role="alert">
  //       {errorMessage}
  //     </div>
  //     <button disabled={!!errorMessage} type="submit">
  //       Submit
  //     </button>
  //   </form>
  // )

  // extra credit 3
  const [username, setUsername] = React.useState('')

  const handleChange = event => {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          id="username"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
