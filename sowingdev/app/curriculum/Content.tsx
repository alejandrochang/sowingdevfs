import React, { CSSProperties } from 'react';
import Overview from './Overview';
import Algos from './Algos';
import Resources from './HtmlCss';
import InterviewPreparation from './Servers';
import ResumeReview from './WebFundamentals';

interface ContentProps {
  pageState: string;
}

const Content: React.FC<ContentProps> = ({ pageState }) => {
  const navComponent = () => {
    switch (pageState) {
      case 'Algorithms':
        return <Algos />;
      case 'Resume Review':
        return <ResumeReview />;
      case 'Interview Preparation':
        return <InterviewPreparation />;
      case 'Resources':
        return <Resources />;
      default:
        return <Overview />;
    }
  };

  const Container: CSSProperties = {
    padding: '120px',
    backgroundColor: ' #ffffff',
    position: 'relative',
  };

  return <div style={Container}>{navComponent()}</div>;
};

export default Content;
