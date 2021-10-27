// Styling
// 💯 accept a size prop to encapsulate styling
// http://localhost:3000/isolated/final/05.extra-2.js

import * as React from 'react'
import '../box-styles.css'
import Box from './Box'
import shuffle from './shuffle'

// Source: https://primer.style/primitives/colors#scale-variables
const GREEN_SCALE = [
  '#dafbe1',
  '#aceebb',
  '#6fdd8b',
  '#4ac26b',
  '#2da44e',
  '#1a7f37',
  '#116329',
  '#044f1e',
  '#003d16',
  '#002d11'
]

function App() {
  const [colors, setColors] = React.useState(GREEN_SCALE)

  React.useEffect(() => {
    const id = setInterval(() => setColors(shuffle), 100)
    return () => clearInterval(id)
  })

  // const uniqueKey = () => Math.random().toString(36).slice(2)

  return (
    <div class="container">
      {colors.map(color => (
        <Box 
          size="small"
          key={color}
          style={{backgroundColor: color}}>
        </Box>
      ))}
    </div>
  )
}

export default App
