

import { ActivityIndicator } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'


function GetLoader({ loading }) {

    if (loading === true) {
        return <ActivityIndicator />
    } else {
        return null
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    })
GetLoader = connect(mapStateToProps,null)(GetLoader)
export default GetLoader;

