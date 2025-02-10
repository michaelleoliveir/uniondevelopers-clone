"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const SectionContext = createContext({ activeSection: "", setActiveSection: (section: string) => {} });

export const SectionProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["beneficio", "carrossel", "inicial", "introducao", "junte", "pilares", "perguntas", "passos", "inscricao"];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <SectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</SectionContext.Provider>;
};

export const useSection = () => useContext(SectionContext);
