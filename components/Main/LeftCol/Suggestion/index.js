import React, { useState } from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div, Span, TextInput, Row, Link, Button } from '@startupjs/ui'

export default observer(function Suggestion () {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  return pug`
    Div.root
      Span.title Add a suggestion
      Span.subtitle We love to hear new ideas on how to be even more awesome

      TextInput.title(
        size='m'
        placeholder='Title of suggestion'
        onChangeText=setTitle
        value=title
      )
      TextInput.description(
        multiline
        resize
        numberOfLines=4
        placeholder='Make a suggestion'
        onChangeText=setDescription
        value=description
      )

      Row.suggContact
        Div.email
          Span.additionalText send a private suggestion email to us:
          Link.mail(to='#') culture@virginhotels.com
        Button.postBtn(
          textColor='#888' 
          size='m' 
          shape='squared'
          onPress=()=>{}
        ) POST

  `
})
