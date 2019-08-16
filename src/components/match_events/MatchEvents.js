import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

var moment = require('moment');

const MatchEvents = ({ match }) => {
  const liveEvents = match.happened_events.slice(0, 5)
  const matchEvents = match.match_events

  return <Container>
    {liveEvents.map(event => {
      return <Segment>{event.player}{matchEvents.find(me => me.id === event.match_event_id).name} {moment(event.created_at).fromNow()}</Segment>
    })}
  </Container>
}

export default MatchEvents
