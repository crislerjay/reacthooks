import React from 'react';
import './App.css';
import Count from './CustomHook/Count';
import Count2 from './CustomHook/Count2';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'cj'}>
        <ChannelContext.Provider value={'vallo'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <Count />
      <Count2 />
    </div>
  );
}

export default App;
