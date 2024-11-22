import React, { FunctionComponent } from 'react';

import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import './App.scss';

interface IProps {}

const App: FunctionComponent<IProps> = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
