import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Image } from 'react-native'
import { Div, Span } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function HotelEvents () {
  const base = BASE_URL
  const url = '/img/make-love-text.png'

  return pug`
    Div.root
      Div.wrapper
        Image.slogan(
          source={uri: base + url}
        )
        Span.text #mlsh



  `
})
