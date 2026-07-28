import { createContext, useContext, useState, type FC } from "react";

const activePlanetContext = createContext<{
    activePlanetId: number | null
    setActivePlanetId: (id: number | null) => void
} | null>(null);


export const ActivePlanetProvider: FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [activePlanetId, setActivePlanetId] = useState<number | null>(null);
    return (
        <activePlanetContext.Provider value={{
            activePlanetId,
            setActivePlanetId
        }}>
        {children}
        </activePlanetContext.Provider>    
    )
}

export const useActiveTaskId = () => {
    if (!activePlanetContext) {
        throw new Error("useActiveTaskId must be used within a ActivePlanetProvider");
    }

    return useContext(activePlanetContext);
}