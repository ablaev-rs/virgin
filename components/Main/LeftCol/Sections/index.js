import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Menu, Span, Icon } from '@startupjs/ui'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

export default observer(function Sections () {
  const navigation = ['All', 'Most Loved', 'In Action', 'Archive']

  return pug`
    Div.root
      Menu.navigation(variant='horizontal')
        each val, index in navigation
          Menu.Item(key = index styleName=index === 0 ? 'first' : '' onPress=()=>{})
            Span.item= val
          Icon.faCaretUp(icon=faCaretUp color='#fff' size='s')

  `
})
