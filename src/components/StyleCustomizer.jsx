"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Column, IconButton, Row, StylePanel, Text } from "@once-ui-system/core";

export function StyleCustomizer({ label, closeLabel }) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) return;

        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    const modal = open && mounted
        ? createPortal(
            <Row className="customizer-layer">
                    <Column
                        className="customizer-panel"
                        background="page"
                        border="neutral-alpha-medium"
                        radius="l"
                        shadow="xl"
                        overflow="hidden"
                    >
                        <Row fillWidth horizontal="between" vertical="center" paddingY="12" paddingX="16" borderBottom="neutral-alpha-weak">
                            <Text variant="heading-strong-s">{label}</Text>
                            <IconButton icon="close" variant="secondary" tooltip={closeLabel} onClick={() => setOpen(false)} />
                        </Row>
                        <StylePanel fillWidth overflowY="auto" padding="16" className="customizer-content" />
                    </Column>
                </Row>,
            document.body
        )
        : null;

    return (
        <>
            <IconButton icon="sliders" variant="secondary" tooltip={label} onClick={() => setOpen(true)} />
            {modal}
        </>
    );
}
