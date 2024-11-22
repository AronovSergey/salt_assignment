import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import ApiDetails from './pages/api/ApiDetails';
import Apis from './pages/api/list/Apis';
import PathDetails from './pages/path/PathDetails';
import RouteDetails from './pages/route/details/RouteDetails';

export const router = createBrowserRouter([
  {
    path: '/apis',
    element: <Apis />,
  },
  {
    path: '/api-details/:id',
    element: <ApiDetails />,
  },
  {
    path: '/path-details/:id',
    element: <PathDetails />,
  },
  {
    path: '/route-details/:id',
    element: <RouteDetails />,
  },
  {
    path: '/',
    element: <Navigate to="/apis" />,
  },
]);
