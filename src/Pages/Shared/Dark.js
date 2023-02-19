import React from 'react';
import { Button, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from './contexts/ThemeContext';
function Dark() {
    const [darkMode, setDarkMode] = React.useState(true);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-warning">Dark/Light mode</h1>
          <InputGroup>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button
                  color="link"
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                >
                  <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                  <span className="d-lg-none d-md-block">Switch mode</span>
                </Button>
              )}
            </ThemeContext.Consumer>
          </InputGroup>
        </header>
      </div>
    );
  }

export default Dark;