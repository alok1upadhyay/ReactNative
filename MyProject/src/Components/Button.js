import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { getNews } from '../actions'
import { connect } from 'react-redux'

function GetButton({getNews}) {
    return (
        <Button
        onPress={(getNews)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
        
    )
}

const mapDispatchToProps = {
    getNews: getNews
}

export default GetButton =  connect(null, mapDispatchToProps)(GetButton)
