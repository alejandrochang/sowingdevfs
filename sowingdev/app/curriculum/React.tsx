import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
interface ReactProps {
  // Define the props for the component here
}

const ReactComponent: React.FC<ReactProps> = (props) => {
  // Implement the component logic here

    const content = [
      "Understanding React:",
      "",
      "Are you curious about web development and want to understand how modern websites are built? React is a popular JavaScript library that makes building user interfaces easier and more efficient. Here, we'll explore React in simple terms and provide code examples to help you grasp its concepts.",
      "",
      "What is React?",
      "",
      "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create interactive UI components that can dynamically update as the data changes. React follows a component-based architecture, which means you can break down your UI into reusable pieces.",
      "To begin using React, you'll need some basic knowledge of HTML, CSS, and JavaScript. Let's start with a simple example:",
      "",
      "",
      "",
    ];

    const code = `
// index.html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React Example</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // App component
      class App extends React.Component {
      Render() {
          return (
            <div>
              <h1>Hello, React!</h1>
              <p>Welcome to my first React app.</p>
            </div>
          );
        }
      }
      // Render the App component
      ReactDOM.render(<App>, document.getElementById("root"));
  </script>
  </body>
  </html>
    `;
    
    const content2 = [
      '',
      '',
      '',
      "In this example, we have an HTML file that includes React and Babel scripts. We define a `div` with the id `root`, where our React app will be mounted. Inside the script tag, we create a React component called `App` using the `class` syntax. The `render` method returns JSX (a syntax extension for JavaScript), which describes the UI of the component.",
      "",
      "Breaking Down the Code",
      "",
      "- class App extends React.Component`: This line defines a new component called `App`, which extends the `React.Component` class. This class represents a React component.",
      "- `render()`: This method is required in every React component. It returns JSX, which describes what the UI should look like.",
      '- `ReactDOM.render(<App>, document.getElementById("root"))`: This line renders the `App` component inside the HTML element with the id `root`.',
      "",
      "Conclusion",
      "",
      "Congratulations! You've just created your first React app. While this example is simple, React has many more powerful features that allow you to build complex and interactive user interfaces. As you continue learning, you'll discover how React makes web development more efficient and enjoyable. Keep experimenting with code examples and building new projects to enhance your skills!",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]
  
  return (
    <div>
       React
       <br />
       <br />
      {content.map((item, index) => {
        return(
          <>
          {item} <br /> 
          </>

        );
      }
      )
      }
      
      <CopyBlock
        text={code}
       language={'jsx'}
       theme={dracula}
       />

      {content2.map((item, index) => {
        return(
          <>
          {item} <br /> 
          </>

        );
      }
      )
      }
    </div>
  );
};

export default ReactComponent;
