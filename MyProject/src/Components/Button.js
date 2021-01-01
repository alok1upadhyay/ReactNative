import React from 'react'
import { Button } from 'react-native'
import { getNews } from '../actions'
import { connect } from 'react-redux'

function GetButton({getNews}) {
    return (
        <Button
        onPress={(getNews)}
        title="Load Data From API"
        color="#841584"
      />
        
    )
}

const mapDispatchToProps = {
    getNews: getNews
}

export default GetButton =  connect(null, mapDispatchToProps)(GetButton)
