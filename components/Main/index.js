import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div, H1 } from '@startupjs/ui'
import LeftCol from './LeftCol'
import RightCol from './RightCol'

export default observer(function Main () {
  return pug`
    Div.root
      H1.slogan Bare It!
      Div.columns
        LeftCol
        RightCol
  `
})
