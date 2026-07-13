"use client";

import { ThemeProvider, ToastProvider, IconProvider, LayoutProvider } from "@once-ui-system/core";
import { style } from "../resources/once-ui.config";
import { iconLibrary } from "../resources/icons";

export function Providers({ children }) {
    return (
        <LayoutProvider>
            <ThemeProvider
                theme="system"
                brand={style.brand}
                accent={style.accent}
                neutral={style.neutral}
                solid={style.solid}
                solidStyle={style.solidStyle}
                border={style.border}
                surface={style.surface}
                transition={style.transition}
                scaling={style.scaling}
            >
                <ToastProvider>
                    <IconProvider icons={iconLibrary}>{children}</IconProvider>
                </ToastProvider>
            </ThemeProvider>
        </LayoutProvider>
    );
}
