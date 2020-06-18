import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import Suggestion from './Suggestion'
import Sections from './Sections'
import Posts from './Posts'

export default observer(function LeftCol () {
  return pug`
    Div.root
      Suggestion
      Sections
      Posts

  `
})
