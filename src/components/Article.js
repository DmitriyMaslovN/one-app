import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component{
            state = {
                visible: false
            }
            onClickSecText = (e) => {
                e.preventDefault();
                this.setState({visible: true})
            }
            render(){
                const {author, text, secText} = this.props.data;
                const { visible } = this.state; 
                return(
                    <div className="article">
                        <p className="news_author">{author}:</p>
                        <p className="news_text">{text}</p>
                        {
                            !visible && <a onClick={this.onClickSecText}
                                            href="#readmore">
                                            Readmore
                                        </a>
                        }
                        {
                            visible && <p className="news_sec-text">{secText}</p>
                        }
                    </div>
                );
            }
        }
        Article.propTypes = {
            data: PropTypes.shape({
                id: PropTypes.number.isRequired,
                author: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                secText: PropTypes.string.isRequired
            })
        }
export { Article }