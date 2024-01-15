import React, { CSSProperties } from 'react';
import Overview from './Overview';
import ReactComponent from './React';
import Javascript from './Javascript';
import FETechnologies from './FETechnologies';
import HtmlCss from './HtmlCss';
import Servers from './Servers';
import WebFundamentals from './WebFundamentals';

interface ContentProps {
  pageState: string;
}

const Content: React.FC<ContentProps> = ({ pageState }) => {
  const navComponent = () => {
    switch (pageState) {
      case 'React':
        return <ReactComponent />;
      case 'JavaScript':
        return <Javascript />;
      case 'Web Fundamentals':
        return <WebFundamentals />;
      case 'Servers':
        return <Servers />;
      case 'HTML & CSS':
        return <HtmlCss />;
      case 'FE Technologies':
        return <FETechnologies />;
      default:
        return <Overview />;
    }
  };

  const Container: CSSProperties = {
    padding: '30px',
    backgroundColor: ' #ffffff',
    position: 'relative',
  };

  return <div style={Container}>{navComponent()}</div>;
};

export default Content;
