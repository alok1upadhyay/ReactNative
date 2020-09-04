import { connect } from 'react-redux'

import React, { Component } from 'react'
import { View, Text, Button, Alert, } from 'react-native'

function NewsItemWithTitle({news}) {

  if (news === null || news === undefined) {
    return null
  }
    return (
      <Text>
        {news.articles[0].title}
      </Text>        
    )
}

const mapStateToProps = (state) => ({
    news: state.news,
    })
NewsItemWithTitle = connect(mapStateToProps,null)(NewsItemWithTitle)
export default NewsItemWithTitle;