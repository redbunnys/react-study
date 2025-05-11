
import type { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import Layout from '@/layout/dashboard';
import Home from '@/pages/home';
import About from '@/pages/about';
import NotFound from '@/pages/404';

import Login from '@/pages/login'

const routeDefinitions: RouteObject[] = [
  {
    element: createElement(Layout),
    children: [
      {
        path: '/',
        element: createElement(Home),
      },
      {
        path: "/about",
        element: createElement(About)
      },
      {
        path: "/login",
        element: createElement(Login)
      },
      {
        path: "/*",
        element: createElement(NotFound)
      } 
    ],
  }


];


// const routeDefinitions: RouteObject[] = [
//   {
//     // This is our main layout route. All other routes are children of this.
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//         // You can add meta-like data here if needed, e.g., for protected routes
//         // handle: { requiresAuth: false }
//       },
//       {
//         path: 'about', // Relative to Layout, so actual path is /about
//         element: <About />,
//       },
//       {
//         path: 'users/:userId', // Relative to Layout, so actual path is /users/:userId
//         element: <User />,
//         children: [
//           {
//             index: true, // Default child route for /users/:userId
//             element: <UserProfile />,
//           },
//           // You could also define it explicitly:
//           // {
//           //   path: 'profile', // /users/:userId/profile (if you prefer named sub-paths)
//           //   element: <UserProfile />,
//           // },
//           {
//             path: 'posts', // /users/:userId/posts
//             element: <UserPosts />,
//           },
//         ],
//       },
//       {
//         // Catch-all for 404, needs to be within the Layout to show Layout UI
//         path: '*',
//         element: <NotFound />,
//       },
//     ],
//   },
//   // If you had routes *outside* the main layout, you could define them here as separate objects.
//   // For example, a login page without the main nav/footer:
//   // {
//   //   path: '/login',
//   //   element: <LoginPage />
//   // }
// ];

export default routeDefinitions;