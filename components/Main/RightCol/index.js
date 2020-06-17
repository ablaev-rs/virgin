import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import Teammate from 'components/Main/RightCol/Teammate'
import HotelEvents from 'components/Main/RightCol/HotelEvents'

export default observer(function RightCol () {
  return pug`
    Div.root
      Teammate
      HotelEvents
  
  `
})
