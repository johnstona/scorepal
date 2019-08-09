const state = {}

const setState = (newState) => {
  for (let [key, value] of Object.entries(newState)) {
    state[key] = value
  }
}

export default {
  state,
  setState
}
