// filepath: c:\Projekter\Maskinen\src\Root.jsx
import { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.jsx";
import Images from "./components/Images.jsx";
import NoMatch from "./components/NoMatch.jsx";
import Youtube from "./components/Youtube.jsx";
import Help from "./components/Help.jsx";
import UserPage from "./components/UserPage.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import SavedImages from "./components/SavedImages.jsx";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<App setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <>
          <Route path="images" element={<Images />} />
          <Route path="youtube" element={<Youtube />} />
          <Route path="help" element={<Help />} />
          <Route path="userpage" element={<UserPage />} />
          <Route path="saved" element={<SavedImages />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="*" element={<NoMatch />} />
        </>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Root;