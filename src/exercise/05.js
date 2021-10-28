// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Set up the Box interface so a size, a classname, styles,
// and any other props can be passed to the Box component.
function Box ({size, className = '', style = {}, ...props}) {
  // Map for available box sizes
  const sizeClasses = {
    small: 'box--small',
    medium: 'box--medium',
    large: 'box--large',
  }

  // Try to set box size based on client's choice.
  // If the client's choice isn't available, don't set a size.
  const sizeClass = sizeClasses[size] || ''

  return (
    <div
      {...props}
      className={['box', sizeClass, className].filter(Boolean).join(' ')}
      style={{fontStyle: 'italic', ...style}}
    />
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
