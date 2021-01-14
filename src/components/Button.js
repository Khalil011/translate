import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Button extends React.Component {
 // static contextType = LanguageContext;
 renderButton(color) {
  return(
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({language})=> language === 'english' ? 'Submit' : 'jama karen'}
      </LanguageContext.Consumer>
    </button>
  );
}

  render() {
    //const text = this.context === 'english' ? 'Submit' : 'jama karen';
    //this.context is used when we want to access a single data from parent
    //consumer is used for multiple data access
    return (
      <ColorContext.Consumer>
        {(color) =>
          this.renderButton(color)
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
