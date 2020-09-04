import React from 'react'
import { View, Text, Alert } from 'react-native'
import { connect } from 'react-redux';

function GetAlert({news}) {
    if (news === null || news === undefined) {
        return null
      }

    if (news.status === 'error') {
        return (<Text>{news.message}</Text>);
    } else {
        return null;
    }
}

const mapStateToProps = (state) => ({
   news: state.news,
})

export default GetAlert =  connect(mapStateToProps, null)(GetAlert)

/*
{"status":"error","code":"parameterInvalid","message":"You are trying to request results too far in the past. Your plan permits you to request articles as far back as 2020-08-01, but you have requested 2020-08-01. You may need to upgrade to a paid plan."}
*/