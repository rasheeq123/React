import { createContext, useContext, useState } from "react";

const AppContext= createContext();
export const AppProvider=({children})=>{

    const [loggedIn, setloggedIn] = useState(false);


    return <AppContext.provider value={{loggedIn, setloggedIn}}>
        {children}
    </AppContext.provider>

};
const useAppContext=()=>useContext(AppContext);

export default useAppContext;