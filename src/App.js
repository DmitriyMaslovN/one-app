import React from 'react';
import { Add } from './components/Add.js'
import { News } from './components/News.js'

import './App.css';

        class App extends React.Component{
            state ={
                news: null,
                isLoading: true
            }      
            static getDerivedStateFromProps(props, state) {
                console.log(props)
                console.log(state)
            let nextFilteredNews
            if(Array.isArray(state.news)) {
              nextFilteredNews = [...state.news]  
               
              nextFilteredNews.forEach((item, index) => {
                if(item.secText.toLowerCase().indexOf("advertisement") !== -1) {
                 item.secText = 'SPAM'
                 }       
                })
             return{
                filteredNews: nextFilteredNews
              }
        
             } 
            return null   
            }
            componentDidMount() {
              fetch('http://localhost:3000/data/newsData.json')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setTimeout(() => {
                    this.setState({isLoading: false, news: data})
                    }, 3000)
                })
            }
            onAddNews = data => {
                const lastNews = ([data, ...this.state.news])
                this.setState({news: lastNews})
            }
            render(){
                const { news, isLoading } = this.state
                return(
                    <React.Fragment>
                        <h3>News</h3>
                        <Add onHandlerNews={this.onAddNews}/>
                        {isLoading && <p>Downloading...</p>}
                        {Array.isArray(news) && <News data={news}/>}
                    </React.Fragment>
                )
            }
        }

export default App;
