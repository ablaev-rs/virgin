import React, { useState } from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Image } from 'react-native'
import { Div, Row, TextInput, Avatar } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function Reply () {
  const base = BASE_URL
  const imgUrl = '/img/avatar.jpeg'
  const [reply, setReply] = useState()

  return pug`
    Row.root
      Div(onPress=()=>{})
        Avatar(src=imgUrl size='s')
      Div.aboutBlock
        TextInput(
          size='m' 
          placeholder='Reply to this suggestion'
          onChangeText=setReply
          value=reply
        )

  `
})
