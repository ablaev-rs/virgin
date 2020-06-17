import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import LeftCol from 'components/Main/LeftCol'
import RightCol from 'components/Main/RightCol'

export default observer(function Main () {
  return pug`
    Div.root
      LeftCol
      RightCol
  `
})
