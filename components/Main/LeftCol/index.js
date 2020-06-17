import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import Suggestion from 'components/Main/LeftCol/Suggestion'
import Sections from 'components/Main/LeftCol/Sections'
import Posts from 'components/Main/LeftCol/Posts'

export default observer(function LeftCol () {
  return pug`
    Div.root
      Suggestion
      Sections
      Posts

  `
})
