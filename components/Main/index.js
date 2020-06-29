import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div, H2 } from '@startupjs/ui'
import LeftCol from './LeftCol'
import RightCol from './RightCol'

export default observer(function Main () {
  return pug`
    Div.root
      H2.slogan Bare It!
      Div.columns
        LeftCol
        RightCol
  `
})
