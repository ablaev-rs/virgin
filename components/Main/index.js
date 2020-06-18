import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import LeftCol from './LeftCol'
import RightCol from './RightCol'

export default observer(function Main () {
  return pug`
    Div.root
      LeftCol
      RightCol
  `
})
