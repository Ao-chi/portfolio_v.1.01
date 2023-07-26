import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "../Button/Button";

const ThemeSwitch = ({ closeNav, className = "" }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleThemeChange = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");

        if (closeNav) closeNav();
    };
    return (
        <Button className={`p-2 hover:rotate-[360deg] ${className}`} onClick={handleThemeChange}>
            {theme === "dark" ? (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_78_70)">
                        <path
                            d="M8 5C6.34687 5 5 6.34688 5 8C5 9.65313 6.34687 11 8 11C9.65312 11 11 9.65313 11 8C11 6.34688 9.65312 5 8 5ZM15.7 7.51562L12.7406 6.0375L13.7875 2.9C13.9281 2.475 13.525 2.07188 13.1031 2.21563L9.96562 3.2625L8.48438 0.3C8.28437 -0.1 7.71562 -0.1 7.51562 0.3L6.0375 3.25938L2.89687 2.2125C2.47187 2.07188 2.06875 2.475 2.2125 2.89687L3.25938 6.03438L0.3 7.51562C-0.1 7.71563 -0.1 8.28438 0.3 8.48438L3.25938 9.9625L2.2125 13.1031C2.07188 13.5281 2.475 13.9313 2.89687 13.7875L6.03438 12.7406L7.5125 15.7C7.7125 16.1 8.28125 16.1 8.48125 15.7L9.95938 12.7406L13.0969 13.7875C13.5219 13.9281 13.925 13.525 13.7812 13.1031L12.7344 9.96562L15.6938 8.4875C16.1 8.28438 16.1 7.71563 15.7 7.51562ZM10.8281 10.8281C9.26875 12.3875 6.73125 12.3875 5.17188 10.8281C3.6125 9.26875 3.6125 6.73125 5.17188 5.17188C6.73125 3.6125 9.26875 3.6125 10.8281 5.17188C12.3875 6.73125 12.3875 9.26875 10.8281 10.8281Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_78_70">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ) : (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_78_83)">
                        <path
                            d="M8.85034 16C11.3179 16 13.5716 14.8773 15.0646 13.0378C15.2855 12.7656 15.0447 12.3681 14.7033 12.4331C10.822 13.1722 7.25762 10.1963 7.25762 6.27825C7.25762 4.02131 8.46581 1.94591 10.4294 0.828438C10.7321 0.656188 10.656 0.197281 10.3121 0.13375C9.8299 0.0448416 9.34063 7.30105e-05 8.85034 0C4.43444 0 0.850342 3.57847 0.850342 8C0.850342 12.4159 4.42881 16 8.85034 16Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_78_83">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </Button>
    );
};

export default ThemeSwitch;
