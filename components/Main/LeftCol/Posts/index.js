import React from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { Div, Span, Row, Icon, Link } from '@startupjs/ui'
import { faCheck, faTimesCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import Answers from './Answers'
import Reply from './Reply'

export default observer(function Posts () {
  const posts = [
    {
      counter: 15,
      theme: 'Classes',
      author: 'Rebecca La Malfa',
      date: 3,
      post: 'I think it would be amazing to offer Excel and other computer refresher classes',
      vote: 6,
      answers: [
        {
          imgUrl: '/img/avatar.jpeg',
          author: 'Rebecca La Malfa',
          answer: 'Corey I will bake you what ever you want!',
          date: '3',
          tags: '#Excelproblems'
        },
        {
          imgUrl: '/img/avatar.jpeg',
          author: 'Clio Knowles',
          answer: 'Hi, Rebecca! Great suggestion! I will bake you what ever you want. I will bake you what ever you want. Thanks!',
          date: '3',
          tags: ''
        },
        {
          imgUrl: '/img/avatar.jpeg',
          author: 'Corey Hartman',
          answer: 'I am willing to trade tutoring sessions for baked goods',
          date: '3',
          tags: ''
        }
      ]
    },
    {
      counter: 14,
      theme: 'Virgin hotel holiday cookie swap',
      author: 'Rebecca La Malfa',
      date: 3,
      post: 'Would anyone be interested in participating?',
      vote: 5,
      answers: []
    },
    {
      counter: 13,
      theme: 'Beverage station light',
      author: 'Candice Jackson',
      date: 4,
      post: 'I think it would be amazing to offer Excel and other computer refresher classes. Would anyone be interested in participating? I think it would be amazing to offer Excel and other computer refresher classes. Would anyone be interested in participating? I think it would be amazing to offer Excel and other computer refresher classes. Would anyone be interested in participating?',
      vote: 0,
      answers: []
    }
  ]

  return pug`
    Div.root
      each value, index in posts
        Row.post(key = index styleName=index === 0 ? 'first' : '')
          Div.counterBlock
            Span.counter= value.counter
          Div.aboutBlock
            Span.title= value.theme
            Link.author(to='#')= value.author
              Span.date over #{value.date} years ago
            Span.text= value.post

            Row.postIcons
              Row.voteIcon
                Div(onPress=()=>{})
                  Icon(icon=faCheck color='#d3232c' size='s')
                Div(onPress=()=>{} pushed='xs')
                  Span.action Vote: 
                Span.numVotes #{value.vote}
                
              Row.manageIcons
                Div(onPress=()=>{})
                  Icon(icon=faTimesCircle color='#d3232c' size='s')

                Div(onPress=()=>{} pushed='s')
                  Icon(icon=faHeart color='#d3232c' size='s')
                
                Div(onPress=()=>{} pushed='xs')
                  Span.action Manage
                  
                  
            Div.answerBlock
              if value.answers.length
                Answers(answers=value.answers)
              Reply

  `
})
