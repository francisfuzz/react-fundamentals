// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box (props) {
  // Map for available box sizes
  const sizeClasses = {
    small: 'box--small',
    medium: 'box--medium',
    large: 'box--large',
  }

  // Try to set box size based on client's choice.
  // If the client's choice isn't available, don't set a size.
  const sizeClass = sizeClasses[props.size] || null

  return (
    <div
      className={`box${sizeClass ? ' ' + sizeClass : ''}`}
      style={{fontStyle: 'italic', ...props.style}}>
      {props.children}
    </div>
  )
}

const smallBox
  = <Box
      size="small"
      style={{ backgroundColor: 'lightblue' }}>
      small lightblue box
    </Box>

const mediumBox
  = <Box
      size="medium"
      style={{ backgroundColor: 'pink' }}>
      medium pink box
    </Box>

const largeBox
  = <Box
      size="large"
      style={{ backgroundColor: 'orange' }}>
      large orange box
    </Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
