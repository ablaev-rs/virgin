import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { TouchableOpacity, Image } from 'react-native'
import { Div, Span, Row, Hr, Link } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function HotelEvents () {
  const base = BASE_URL
  const events = [
    {
      imgUrl: '/img/event1.jpg',
      eventHeader: 'Upside down tea party',
      place: 'Commons club',
      time: 'March 09, 2020 at 2:00 pm'
    },
    {
      imgUrl: '/img/event2.jpg',
      eventHeader: 'Sky high st. patty s day',
      place: 'Cerise',
      time: 'March 14, 2020 at 9:00 pm'
    },
    {
      imgUrl: '/img/event3.jpg',
      eventHeader: 'Upside down tea party',
      place: 'Commons club + Cerise',
      time: 'March 14, 2020 at 9:00 pm'
    }
  ]

  return pug`
    Div.root
      Div.header
        Span.eventType Hotel
        Span.event Events
        Hr.smallSep
      Div.posts
        each value, index in events
          Row.post(key = index styleName=index === 0 ? 'first' : '')
            TouchableOpacity
              Image.avatarStyle(
                source={uri: base + value.imgUrl}
              )
            Div.aboutBlock
              Link.eventHeader(to='#')= value.eventHeader
              Span.place= value.place
              Span.time= value.time
          Hr.sep(styleName=index === events.length-1 ? 'last' : '')



  `
})
