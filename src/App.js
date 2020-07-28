import React , { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Headlines from './components/Headlines';
import Footer from './components/Footer';

class App extends Component {
constructor(props){
super(props)
this.state = { 
articles : []
}
}
ComponentDidMount(){
fetch('http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=XXXXXXXXYyyyyyy')
.then(res => res.json())
.then((data) => {
this.setState({ articles : data })
})
.catch(console.log);
}
render(){

return (
<div className="container ">
<Navigation />
<Header />
<Headlines articles={this.state.articles} />
<Footer />
</div>
)

}

}

export default App
