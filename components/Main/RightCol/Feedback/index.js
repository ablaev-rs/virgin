import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, Row, Link, Icon } from '@startupjs/ui'
import { faMap, faCommentAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default observer(function HotelEvents () {
  return pug`
    Row.root
      Div.block
        Div(onPress=()=>{})
          Icon(icon=faBookOpen color='#d3232c' size='l') 
        Link.link(to='/') Book of love
      Div.block
        Div(onPress=()=>{})
          Icon(icon=faMap color='#d3232c' size='l') 
        Link.link(to='/') Culture map
      Div.block
        Div(onPress=()=>{})
          Icon(icon=faCommentAlt color='#d3232c' size='l') 
        Link.link(to='/') Send feedback

  `
})
