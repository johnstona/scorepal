import { useState } from React

const LiveMatches = (matches) => {
  const [matches, updateMatches] = useState(matches)

  const handleUpdate = (match) => {
    updateMatches({...matches, [match.id]: match})
  }

  return handleUpdate
}


export default LiveMatches