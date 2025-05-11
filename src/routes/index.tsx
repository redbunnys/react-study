// Option 1: Directly export the configuration array
// This is the simplest and most direct approach if App.tsx will call useRoutes.
import routeDefinitions from './config';
export const appRoutes: typeof routeDefinitions = routeDefinitions;



// Option 2: Create a component that uses useRoutes (less common for this specific structure request)
/*
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routeDefinitions from './config';

const AppRouter: React.FC = () => {
  const elements = useRoutes(routeDefinitions);
  return elements;
};

export default AppRouter;
*/
