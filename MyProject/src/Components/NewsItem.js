import { connect } from 'react-redux'

import React from 'react'
import { View, Text, FlatList} from 'react-native'

const renderSeparator = () => {
  return (
    <View
      style={{
        height: .1,
        width: "100%",
        backgroundColor: "#CED0CE",
      }}
    />
  );
};

function NewsItemWithTitle({news}) {

  if (news === null || news === undefined) {
    return null
  }
    
    return (
      <FlatList
      ItemSeparatorComponent={renderSeparator}  
      data={news.articles}  
      renderItem={ (rowData) => <View style={{
        padding:2.0,
      }}><Text style={ {backgroundColor: 'white', color:'black'} }>{rowData.item.title}</Text></View>}  
            />      
    )
}

const mapStateToProps = (state) => ({
    news: state.news,
    })
NewsItemWithTitle = connect(mapStateToProps,null)(NewsItemWithTitle)
export default NewsItemWithTitle;