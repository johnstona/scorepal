import ActionCable from 'actioncable'

const ACTION_CABLE = ActionCable.createConsumer('ws://localhost:3000/cable')
const BASE_URL = 'http://localhost:3000'
const USERS_URL = `${BASE_URL}/users`
const MATCHES_URL = `${BASE_URL}/matches`
const RELATIONSHIPS_URL = `${BASE_URL}/relationships`
const LOGIN_URL = `${BASE_URL}/login`
const SPORTS_URL = `${BASE_URL}/sports`
const HAPPENED_EVENTS_URL = `${BASE_URL}/happened_events`
const HAPPENED_SCORE_EVENTS_URL = `${BASE_URL}/happened_score_events`

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

const createLiveSubscription = (callback) => {
  ACTION_CABLE.subscriptions.create('LiveMatchChannel', {
    received: data => {
      callback(data)
    }
  })
}

// const createLiveEventsSubscription = (callback) => {
//   ACTION_CABLE.subscriptions.create('LiveEventsChannel', {
//     received: data => {
//       callback(data)
//     }
//   })
// }

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

const updateMatch = async (match, id) => {
  const res = await fetchData(`${MATCHES_URL}/${id}`, match, 'PATCH')
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

const unfollow = async (id, follower_id) => {
  await fetch(`${RELATIONSHIPS_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id, follower_id: follower_id })
  }
  )
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

const getMatch = async (id) => {
  const res = await fetch(`${MATCHES_URL}/${id}`)
  return res.json()
}

const getUserFollowing = async (id) => {
  const res = await fetch(`${USERS_URL}/${id}/following`)
  return res.json()
}

const getUserFollowers = async (id) => {
  const res = await fetch(`${USERS_URL}/${id}/followers`)
  return res.json()
}

const getAllMatches = async () => {
  const res = await fetch(MATCHES_URL)
  return res.json()
}

const getAllSports = async () => {
  const res = await fetch(SPORTS_URL)
  return res.json()
}

const createHappenedMatchEvent = async (matchEventId, matchId, player, playerName) => {
  const event = {
    match_event_id: matchEventId,
    match_id: matchId,
    player: player,
    player_name: playerName
  }
  const res = await fetchData(HAPPENED_EVENTS_URL, event, 'POST')
  return res.json()
}

const createHappenedScoreEvent = async (scoreEventId, matchId, player, playerName) => {
  const event = {
    score_event_id: scoreEventId,
    match_id: matchId,
    player: player,
    player_name: playerName
  }
  const res = await fetchData(HAPPENED_SCORE_EVENTS_URL, event, 'POST')
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
  getAllMatches,
  unfollow,
  getUserFollowers,
  createLiveSubscription,
  getMatch,
  getAllSports,
  createHappenedMatchEvent,
  createHappenedScoreEvent
}
