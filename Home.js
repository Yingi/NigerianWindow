import React from 'react';
import { FlatList } from 'react-native';

// Import getNews from news.js
import { getNews } from './src/news';
import Article from './src/components/Article';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
    
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    {/*See below in the renderItem Of FlatList how we passed article as props to
            Article Class.
            This means that we  have overide the default this.props in the Article
            Class and we now only have this.props.article in our Article
            Class. So if u do this.props.navigation in the Class, it will
            give undefined. So we have to pass navigation to the Article Class too
            that is why you can see below that we also passed navigation as props
            to the Article Class*/}
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} 
            navigation={this.props.navigation} />} 
            
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}
