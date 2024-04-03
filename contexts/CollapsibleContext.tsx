import { CollapsibleProps } from "@/components/CollapsibleContext";
import { createContext, useContext } from "react";

export const CollapsibleContext = createContext<CollapsibleProps | null>(null)

export default function CollapsibleContextProvider({ children, props }: { children: React.ReactNode, props: CollapsibleProps }) {
    return (
        <CollapsibleContext.Provider value={{ ...props }}>
            {children}
        </CollapsibleContext.Provider>
    )
}

/**
 * Custom Hook for the CollapsibleContext
 * @return context
 */
export function useCollapsibleContext() {
    const context = useContext(CollapsibleContext);
    if (!context) {
        throw new Error("Collapsible Context must be used within CollapsibleContext.Provider");
    }
    return context;
}