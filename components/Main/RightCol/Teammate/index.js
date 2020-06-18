import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { TouchableOpacity } from 'react-native'
import { Div, Span, Row, Icon, Hr, Link } from '@startupjs/ui'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default observer(function Teammate () {
  const events = [
    {
      date: ['tue', 'mar', 17],
      eventHeader: 'St Patrick Day Celebration',
      place: 'Fdr',
      time: '11:00 - 1:00p'
    },
    {
      date: ['web', 'mar', 18],
      eventHeader: 'March madness at fdr',
      place: 'Fdr',
      time: '11:00 - 1:00p'
    }
  ]

  return pug`
    Div.root
      Div.header
        Span.eventType Teammate
        Span.event Events
        Hr.smallSep
        
      Div.posts
        each value, index in events
          Row.post(key = index styleName=index === 0 ? 'first' : '')

            Div.dateInfo
              Span.day= value.date[0]
              Span.day= value.date[1]
              Span.date= value.date[2]

            Row.postInfo
              Div.aboutBlock
                Link.eventHeader(to='#')= value.eventHeader
                Span.place= value.place
                Span.time= value.time
              Div(onPress=()=>{})
                Icon(icon=faChevronDown color='#d3232c' size='s')

          Hr.sep(styleName=index === events.length-1 ? 'last' : '')
      Hr.divider


  `
})
