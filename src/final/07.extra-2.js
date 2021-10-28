// @francisfuzz's final exercise putting it all together 😉
// http://localhost:3000/isolated/final/07.extra-2.js

import * as React from 'react'
import '../box-styles.css'
import Box from './Box'
import shuffle from './shuffle'

// Set a scale of colors to use for the boxes.
// In the spirit of Halloween: oranges! 🍊 
// https://github.com/primer/primitives/blob/893d873c57240df02a23a82c178d9a3a0ca6a983/data/colors/themes/light.ts#L26-L37
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

function App() {
  // We use the State hook primarily for `setColors` later used in the Effect hook.
  // eslint-disable-next-line no-unused-vars
  const [_, setColors] = React.useState(ORANGE_SCALE)

  React.useEffect(() => {
    const id = setInterval(() => setColors(shuffle), 1000)
    return () => clearInterval(id)
  })

  // Generate a unique enough key for a list item.
  const uniqueKey = () => Math.random().toString(36).slice(2)
  // Get a random index based on the length of the scale.
  const randomIndex = (arr) => Math.floor(Math.random() * arr.length)

  // Initialize an array to be used for the list items.
  const arr = new Array(5).fill(0)

  return (
    <>
      <div className="container">
        {arr.map(i => (
          <Box 
            size="small"
            key={uniqueKey()}
            style={{backgroundColor: ORANGE_SCALE[randomIndex(ORANGE_SCALE)]}}>
          </Box>
        ))}
      </div>
      <div className="container">
        {arr.map(i => (
          <Box 
            size="small"
            key={uniqueKey()}
            style={{backgroundColor: ORANGE_SCALE[randomIndex(ORANGE_SCALE)]}}>
          </Box>
        ))}
      </div>
      <div className="container">
        {arr.map(i => (
          <Box 
            size="small"
            key={uniqueKey()}
            style={{backgroundColor: ORANGE_SCALE[randomIndex(ORANGE_SCALE)]}}>
          </Box>
        ))}
      </div>
      <div className="container">
        {arr.map(i => (
          <Box 
            size="small"
            key={uniqueKey()}
            style={{backgroundColor: ORANGE_SCALE[randomIndex(ORANGE_SCALE)]}}>
          </Box>
        ))}
      </div>
      <div className="container">
        {arr.map(i => (
          <Box 
            size="small"
            key={uniqueKey()}
            style={{backgroundColor: ORANGE_SCALE[randomIndex(ORANGE_SCALE)]}}>
          </Box>
        ))}
      </div>
    </>
  )
}

export default App
