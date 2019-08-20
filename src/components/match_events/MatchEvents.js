import React from 'react'
import { Container, Segment, Header } from 'semantic-ui-react'

var moment = require('moment')

const MatchEvents = ({ match, finished }) => {
  const matchHappenedEvents = match.happened_events
  const matchHappenedScoreEvents = match.happened_score_events
  const allEvents = matchHappenedEvents.concat(matchHappenedScoreEvents).sort((a, b) => moment(b.created_at) - moment(a.created_at))
  const liveEvents = !finished ? allEvents.slice(0, 5) : allEvents
  const matchEvents = match.match_events
  const scoreEvents = match.score_events

  return <>
    {finished ? <Header textAlign='center'>THIS MATCH HAS FINISHED</Header> : null}
    <Container>
      {liveEvents.map(event => {
        return <Segment key={event.id}>{event.score_event_id ? scoreEvents.find(se => se.id === event.score_event_id).name.toUpperCase() : matchEvents.find(me => me.id === event.match_event_id).name.toUpperCase()} - {event.player_name ? event.player_name : null} - {event.player}  -  {moment(event.created_at).fromNow()}</Segment>
      })}
    </Container>
  </>
}

export default MatchEvents
