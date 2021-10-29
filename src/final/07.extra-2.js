// @francisfuzz's final exercise putting it all together 😉
// http://localhost:3000/isolated/final/07.extra-2.js

// Module Dependencies
import * as React from 'react'
import '../box-styles.css'
import Box from './Box'

// Returns a "glowing" orange box. 🍊 box
function OrangeBox () {
  // Source: https://github.com/primer/primitives/blob/893d873c57240df02a23a82c178d9a3a0ca6a983/data/colors/themes/light.ts#L26-L37
  const ORANGE_SCALE = [
    '#fff1e5',
    '#ffd8b5',
    '#ffb77c',
    '#fb8f44',
    '#e16f24',
    '#bc4c00',
    '#953800',
    '#762c00',
    '#5c2200',
    '#471700'
  ]

  // Get a random index based on the length of the scale.
  const randomIndex = (arr) => Math.floor(Math.random() * arr.length)

  // Initialize the color of this box to a random color from the scale.
  const [color, setColors] = React.useState(ORANGE_SCALE[randomIndex(ORANGE_SCALE)])

  // Change the color of this box at a fixed periodic interval
  React.useEffect(() => {
    const INTERVAL = 100 // in milliseconds!
    const id = setInterval(() => setColors(ORANGE_SCALE[randomIndex(ORANGE_SCALE)]), INTERVAL)
    return () => clearInterval(id)
  })

  return (
    <Box size="small" style={{backgroundColor: color}} />
  )
}


function App() {
  return (
    <div>
      <OrangeBox />
    </div>
  )
}

export default App
