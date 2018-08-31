import React from 'react';

class Tab extends React.Component{
  constructor(props){

    super(props);
    this.state = {content: ""};
  }

  handleClick(i) {
    this.setState ({
      content : this.props.data[i].content
    });
  }

  render(){
    const eachPane = this.props.data.map((el, i) =>{
      return (
        <h1 onClick={this.handleClick.bind(this, i)}>
          {el.title}
        </h1>
      );

    });
    return (
      <div>
      <ul class="fff">
        {eachPane}
      </ul>
      <ul>
        {this.state.content}
      </ul>
      </div>
    );
  }
}

export default Tab;
