import React, { useState } from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, TextInput, Avatar } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function Reply () {
  const base = BASE_URL
  const imgUrl = '/img/avatar.jpeg'
  const [reply, setReply] = useState()

  return pug`
    Div.root
      Div.avatar(onPress=()=>{})
        Avatar(src=base+imgUrl size='s')
      Div.aboutBlock
        TextInput.input(
          size='m' 
          placeholder='Reply to this suggestion' 
          onChangeText=setReply 
          value=reply
        )


  `
})
