import { createContext, useState } from "react";


export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [test1, settest1] = useState("heloo")
    const [test2, settest2] = useState(["medo", "top", "heloo", "welcome"])



    return (
        <>
            <MyContext.Provider value={[test1, settest1, test2, settest2]}>
                {children}
            </MyContext.Provider>
        </>
    )
}

