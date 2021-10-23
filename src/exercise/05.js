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

  // Append box size class, if available
  const sizeClass = sizeClasses[props.size] || null
  const classNames = 'box' + (sizeClass ? ' ' + sizeClass : '')

  // Combine styles, if specified
  const style = Object.assign({fontStyle: 'italic'}, props.style)

  return <div className={classNames} style={style}>{props.children}</div>
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
