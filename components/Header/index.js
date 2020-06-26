import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div, Span, Row, H1, Menu, Avatar } from '@startupjs/ui'
import { Image } from 'react-native'
import { BASE_URL } from '@env'

export default observer(function Header () {
  const base = BASE_URL
  const logoUrl = '/img/main-logo-white.png'
  const avatarUrl = '/img/avatar.jpeg'
  const navigation = ['Valentines', 'V ❤ Peeps', 'V ❤ prep', 'Bare It', 'Culture', 'Tribe', 'Resources', 'V Well']

  return pug`
    Div.root
      Row.topLinks

        Div(onPress=()=>{})
          Image.logoStyle(
            source={uri: base + logoUrl}
          )
          
        Menu.navigation(variant='horizontal')
          each val, index in navigation
            Menu.Item.item(key = index styleName=index === 0 ? 'first' : '' onPress=()=>{})
              Span.text= val

        Row.user
          Div.about
            Span.hello Hello
            Span.name Niraj
          Div.avatar
            Avatar.avatarStyle(src=base+avatarUrl onPress=()=>{})
            
  `
})
