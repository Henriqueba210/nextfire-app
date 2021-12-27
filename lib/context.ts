import { User } from "@firebase/auth";
import { createContext } from "react";

interface context {
    user?: User | null;
    userName?: string | null
}

export const UserContext = createContext<context>({user: null, userName: null});