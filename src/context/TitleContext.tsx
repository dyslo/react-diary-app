import { createContext } from "react";

export const TitleContext = createContext<{
    title: string | null, 
    setTitle: (value: string) => void }>({title: null, setTitle: () => undefined});