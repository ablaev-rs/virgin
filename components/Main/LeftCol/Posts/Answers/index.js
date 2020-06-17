import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { TouchableOpacity, Image } from 'react-native'
import { Div, Span, Row, Icon, Link } from '@startupjs/ui'
import { BASE_URL } from '@env'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default observer(function Answers ({ answers }) {
  const base = BASE_URL

  return pug`
    Div.root
      each value, index in answers
        Row.post(key = index styleName=index === 0 ? 'first' : '')
          TouchableOpacity
            Image.avatarStyle(
              source={uri: base + value.imgUrl}
            )
          Row.aboutBlock
            Div.postInfo
              Link.author(to='#')= value.author
              Span.text= value.answer
                Link.tags(to='#')= value.tags
              Span.date over #{value.date} years ago
            Div.closeIcon
              TouchableOpacity
                Icon(icon=faTimesCircle color='#d3232c' size='s')



  `
})
