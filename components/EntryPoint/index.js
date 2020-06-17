import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import Header from 'components/Header'
import Main from 'components/Main'

export default observer(function EntryPoint () {
  return pug`
    Div.root
      Header
      Main
  `
})
