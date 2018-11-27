import React from 'react';

class Add extends React.Component{
            constructor(props){
                super(props);
                this.state = {
                    author: '',
                    text: '',
                    secText: '',
                    agree: false
                }
            }
            validate = () => {
                const {author, text, secText, agree} = this.state
                if(author.trim() && author.length > 3 
                   && 
                   text.trim() && text.length > 6 
                   &&
                   secText.trim() && secText.length > 6 
                   &&
                   agree){
                    return true;
                }
                return false;
            }
            onButton = (e) => {
                e.preventDefault();
                const {author, text, secText} = this.state
                this.props.onHandlerNews({
                    id: +new Date(), // id contains numbers of ms. that have passed since 1 jan 1970
                    author,
                    text,
                    secText
                })
                
            }
            onHandlerChange = (e) => {
                const {id, value} = e.currentTarget;
                this.setState({[id]: value})
            }
            handleCheckbox = (e) => {
               this.setState({agree: e.currentTarget.checked})
            }
            render(){
                const {author, text, secText} = this.state
                return(
                    <form className="add">
                        <input type="text"
                            placeholder="Input Author..."
                            className="add_author"
                            id="author"
                            onChange={this.onHandlerChange}
                            value={author}
                            />
                        <textarea placeholder="Input Text..."
                            id="text"
                            onChange={this.onHandlerChange}
                            value={text}
                            className="add_text">
                        </textarea>
                        <textarea placeholder="Advertisement is spam..."
                            id="secText"
                            className="add_sec-text"
                            onChange={this.onHandlerChange}
                            value={secText}>
                        </textarea>
                        <label className="add_chekrule">
                        <input type="checkbox"
                            onChange={this.handleCheckbox}/>
                            I agree with the rules
                        </label>
                        <button className="add_btn"
                            onClick={this.onButton}
                            disabled={!this.validate()}>
                            Show last news
                        </button>
                    </form>
                )
            }
        }
        export { Add }