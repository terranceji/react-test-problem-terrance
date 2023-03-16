import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:false,
    };
  }

  //handler goes here
  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }

  render() {
    const { buttonText } = this.props;
    const { clicked } = this.state;
    const buttonLabel = clicked ? 'Thanks!' : buttonText || 'Click me';

    return (
      <div>
        <p>Greetings!</p>
        {buttonText && (
          <button onClick={this.handleClick}>{buttonLabel}</button>
        )}
      </div>
    );
  }
}