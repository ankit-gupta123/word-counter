import React, { Component } from 'react';


        class Counter extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            firstValue: "",
            secondValue: "",
            needWords: "",
            wordCount: "",
            limWords: null
          };
          this.firstHandle = this.firstHandle.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.secondHandle = this.secondHandle.bind(this);
        }
        firstHandle(e) {
          this.setState({
            firstValue: e.target.value
          });
        }
      
        handleSubmit(e) {
          e.preventDefault();
          this.setState({
            needWords: this.state.firstValue,
            secondValue: ""
          });
        }
      
        secondHandle(event) {
          //calculate the word count first itself and use them in other manipulations
          const wordCount =
            event.target.value === "" ? 0 : event.target.value.split(" ").length;
          this.setState({
            secondValue: event.target.value,
            wordCount: wordCount,
            limWords:
              this.state.needWords - wordCount < 0
                ? this.state.secondValue.length
                : null
          });
        }
      
        render() {
          var result = this.state.needWords - this.state.wordCount;
          let tooManyChars;
          if (result < 0) {
            const tooManyCharStyle = {
              color: "red"
            };
            tooManyChars = (
              <p style={tooManyCharStyle}>
                You exceeded the maximum number of words!!
              </p>
            );
          }
          return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <p>How many words do you have to write?</p>
                <input
                  type="text"
                  value={this.state.firstValue}
                  onChange={this.firstHandle}
                />
                <button type="submit">Go</button>
              </form>
              <form>
                <p>You still have to write {result} words</p>
                <textarea
                  type="text"
                  value={this.state.secondValue}
                  onChange={this.secondHandle}
                  maxLength={this.state.limWords}
                />
                {tooManyChars}
              </form>
            </div>
          );
        }
      }
  
export default Counter;