import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, Row, Icon, Link, Avatar } from '@startupjs/ui'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '@env'

export default observer(function Answers ({ answers }) {
  const base = BASE_URL

  return pug`
    Div.root
      each value, index in answers
        Row.post(key = index styleName=index === 0 ? 'first' : '')
          Div(onPress=()=>{})
            Avatar(src=base+value.imgUrl size='s')  
          Row.aboutBlock
            Div.postInfo
              Link.author(to='#')= value.author
              Span.text= value.answer
                Link.tags(to='#')= value.tags
              Span.date over #{value.date} years ago
            Div.closeIcon
              Div(onPress=()=>{})
                Icon(icon=faTimesCircle color='#d3232c' size='s')

  `
})
