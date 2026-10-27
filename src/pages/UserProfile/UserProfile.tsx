/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import type { UserContextType, UserProfileData } from "./types";

export const UserProfileContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});

function UserProfile() {
  const [userData, setUserData] = useState<UserProfileData | undefined>(undefined);

  return (
    <UserProfileContext.Provider value={{ user: userData, setUser: setUserData }}>
      <Outlet />
    </UserProfileContext.Provider>
  );
}

export default UserProfile;

