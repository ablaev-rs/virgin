import React from 'react'
import { observer } from 'startupjs'
import { EntryPoint } from 'components'
import { Div } from '@startupjs/ui'
import './index.styl'

export default observer(function PHome () {
  return pug`
    Div.root
      EntryPoint
  `
})
