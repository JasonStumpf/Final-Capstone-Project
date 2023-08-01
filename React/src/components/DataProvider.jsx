import { createContext, useEffect, useState } from "react";
const DataProvider = (props) => {
    const [user, setUser] = useState({});
    useEffect(() => { console.log(user) });
    return (
        <DataContext.Provider value={{'user': user, 'setUser': setUser}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export const DataContext = createContext();