import ActionCable from 'actioncable'

const ACTION_CABLE = ActionCable.createConsumer('ws://localhost:3000/cable')
const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const MATCHES_URL = `${BASE_URL}/matches`
const RELATIONSHIPS_URL = `${BASE_URL}/relationships`
const LOGIN_URL = `${BASE_URL}/login`

const fetchData = (url = '', data = {}, method) => {
  return fetch(url, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

const createSubscription = (callback) => {
  ACTION_CABLE.subscriptions.create('MatchChannel', {
    received: data => {
      callback(data)
    }
  })
}

const getAllUsers = async () => {
  const res = await fetch(USERS_URL)
  return res.json()
}

const createUser = async (user) => {
  const res = await fetchData(USERS_URL, user, 'POST')
  return res.json()
}

const updateUser = async (user) => {
  const res = await fetchData(`${USERS_URL}/${user.id}`, user, 'PATCH')
  return res.json()
}

const createMatch = async (newMatch, id) => {
  const match = {
    ...newMatch,
    user_id: id
  }
  const res = await fetchData(MATCHES_URL, match, 'POST')
  return res.json()
}

const updateMatch = async (match) => {
  const res = await fetchData(`${MATCHES_URL}/${match.id}`, match, 'PATCH')
  return res.json()
}

const createFollow = async (user1, user2) => {
  const rel = {
    follower_id: user1.id,
    followed_id: user2.id
  }
  const res = await fetchData(RELATIONSHIPS_URL, rel, 'POST')
  return res.json()
}

const loginUser = async (user) => {
  const u = {
    username: user.username,
    password: user.password
  }
  const res = await fetchData(`${LOGIN_URL}`, u, 'POST')
  return res.json()
}

const getUserMatches = async (id) => {
  const res = await fetch(`${USERS_URL}/${id}/matches`)
  return res.json()
}

const getUserFollowing = async (id) => {
  const res = await fetch(`${USERS_URL}/${id}/following`)
  return res.json()
}

const getAllMatches = async () => {
  const res = await fetch(MATCHES_URL)
  return res.json()
}

export default {
  createSubscription,
  getAllUsers,
  createUser,
  updateUser,
  createMatch,
  updateMatch,
  createFollow,
  loginUser,
  getUserMatches,
  getUserFollowing,
  getAllMatches
}
