const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'getNews':
        return { ...state, loading: true }
    case 'receivedNews':
            return { ...state, loading: false, news: action.json }

    default:
        return state
    }
}