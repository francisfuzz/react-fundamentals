// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  // Create a new State Hook for the username.
  const [username, setUsername] = React.useState('')

  // On submission, prevent the default behavior
  // and call the onSubmitUsername callback with the username.
  function handleSubmit(event) {
    event.preventDefault()
    const { value } = inputRef.current
    onSubmitUsername(value)
  }

  // When the input changes, immediately lowercase the username.
  function handleChange(event) {
    const { value } = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          ref={inputRef}
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button disabled={!Boolean(username)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
