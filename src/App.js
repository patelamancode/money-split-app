import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import LandingPage from "./components/pages/LandingPage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FriendsPage from "./components/pages/FriendsPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import Groups from "./components/pages/groups/Groups";
import Profile from "./components/pages/Profile";
import AddExpense from "./components/pages/AddExpense";
import ActivityPage from "./components/pages/ActivityPage";
import GroupDetail from "./components/pages/groups/GroupDetail";
import GroupSetting from "./components/pages/groups/GroupSetting";
import AddGroupMember from "./components/pages/groups/AddGroupMember";
const App = () => {
  let auth = {
    token: true,
  };

  return (
    <div>
      {auth.token ? <Navbar /> : null}
      <div className="pt-16">
        <Routes>
          {/* Protected  routes */}
          <Route element={<PrivateRoutes auth={auth} />}>
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/expense" element={<AddExpense />} />
            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/groups/:id" element={<GroupDetail />} />
            <Route path="/groups/:id/edit" element={<GroupSetting />} />
            <Route path="/add-member" element={<AddGroupMember />} />
          </Route>
          {/* common routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      {auth.token ? <Footer /> : null}
    </div>
  );
};

export default App;
