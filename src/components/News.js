import React from 'react';
import { Article } from './Article.js'
import PropTypes from 'prop-types';

class News extends React.Component{
        renderNews = () => {
                const { data } = this.props
                let newsTemplate = null;               
                
                if(data.length){
                newsTemplate = data.map(function(item){
                    return <Article key={item.id} data={item}/>
                })
                } else {
                    newsTemplate =  <p>Ufortunately is not news</p>
                }
                return newsTemplate;
            }
            render() {
                const {data} = this.props
                return (
                    <div className="news">
                        {this.renderNews()}
                        {
                           data.length ? <strong>
                                    All the news: {data.length}
                                    </strong>: null
                        }
                    </div>
                )
            }
        }
        News.propTypes = {
            data: PropTypes.array.isRequired
        }
export { News }