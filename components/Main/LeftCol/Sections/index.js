import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Menu, Span } from '@startupjs/ui'

export default observer(function Sections () {
  const navigation = ['All', 'Most Loved', 'In Action', 'Archive']

  return pug`
    Div.root
      Menu.navigation(variant='horizontal')
        each val, index in navigation
          Menu.Item.menuItem(key = index styleName=index === 0 ? 'first' : '' onPress=()=>{})
            Span.item= val

  `
})
