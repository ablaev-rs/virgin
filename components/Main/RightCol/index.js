import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import Slogan from './Slogan'
import Teammate from './Teammate'
import HotelEvents from './HotelEvents'

export default observer(function RightCol () {
  return pug`
    Div.root
      Slogan
      Teammate
      HotelEvents
  
  `
})
