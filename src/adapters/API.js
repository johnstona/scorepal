import ActionCable from 'actioncable'

const ACTION_CABLE = ActionCable.createConsumer('ws://localhost:3000/cable')
const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const MATCHES_URL = `${BASE_URL}/matches`
const RELATIONSHIPS_URL = `${BASE_URL}/relationships`

const fetchData = (url = '', data = {}, method) => {
  return fetch(url, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

const createSubscription = () => {
  ACTION_CABLE.subscriptions.create('MatchChannel', {
    received: data => {
      console.log(data)
    }
  })
}

const getAllUsers = () => {
  return fetch(USERS_URL)
    .then(res => res.json())
}

const createUser = (user) => {
  return fetchData(USERS_URL, user, 'POST')
    .then(res => res.json())
}

const updateUser = (user) => {
  return fetchData(`${USERS_URL}/${user.id}`, user, 'PATCH')
    .then(res => res.json())
}

const createMatch = (match) => {
  return fetchData(MATCHES_URL, match, 'POST')
    .then(res => res.json())
}

const updateMatch = (match) => {
  return fetchData(`${MATCHES_URL}/${match.id}`, match, 'PATCH')
    .then(res => res.json())
}

const createFollow = (user1, user2) => {
  const rel = {
    follower_id: user1.id,
    followed_id: user2.id
  }
  return fetchData(RELATIONSHIPS_URL, rel, 'POST')
}

export default {
  createSubscription,
  getAllUsers,
  createUser,
  updateUser,
  createMatch,
  updateMatch,
  createFollow
}