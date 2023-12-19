import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'

import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import GitHub from "./components/GitHub.jsx";
import User from "./components/User.jsx";
import UserGitHubInfo from "./components/UserGitHubInfo.jsx";

// create an array of all the routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<GitHub />} shouldRender={true} />
      <Route
        // loader={githubDataLoader}
        path="github/:username"
        element={<GitHub />}
        shouldRender={false}
      />
      <Route path="buser/:userId" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);