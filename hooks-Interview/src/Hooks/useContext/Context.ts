import { createContext, useContext } from "react";
import { User } from ".";

export const DashboardContext = createContext<User | undefined>(undefined);

// Custom hook to check whether user is present or undefined for type Safety

export function useUserContext() {
    const user = useContext(DashboardContext);

    if (user === undefined) {
        throw new Error("useUserContext must be used with a DashboardContext");
    }

    return user;
}
