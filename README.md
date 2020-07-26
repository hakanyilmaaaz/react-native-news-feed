# react-native-news-feed

The react-native-news-feed allows you to read articles by categories. Articles are searchable and can be added into favourites by users. All of the articles are being fetched by [News API](https://newsapi.org/).

## Running this app

Before running the app, make sure you ran:

    npm install
    add your API_KEY into 'src/config.index'

### Dependencies

Both macOS and Xcode are required.

- [redux](https://github.com/reduxjs/redux/) && [react-redux](https://github.com/reduxjs/react-redux/): Used for storing articles.
- [AsyncStorage](https://reactnative.dev/docs/asyncstorage.html/): Used for saving previously read and favourited articles.
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux/): Used for navigation.
- [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen/): Used for making this application responsive.
- [react-native-webview](https://github.com/react-native-community/react-native-webview/): Used for reading articles on an original web page.
