"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Column, Row, Text, Icon } from "@once-ui-system/core";
import { locales, localeNames } from "../i18n/config";

export function LanguageSwitcher({ locale }) {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const rootRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleClick = (event) => {
            if (!rootRef.current?.contains(event.target)) setOpen(false);
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", handleClick);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    const handleSelect = (value) => {
        setOpen(false);
        if (value === locale) return;
        document.cookie = `locale=${value}; path=/; max-age=31536000`;
        const segments = pathname.split("/");
        segments[1] = value;
        router.push(segments.join("/") || "/");
    };

    return (
        <div className="language-menu" ref={rootRef}>
            <Row
                as="button"
                type="button"
                vertical="center"
                gap="8"
                className="language-trigger"
                aria-label={localeNames[locale]}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
            >
                <Icon name="language" size="xs" />
                <Text variant="label-default-s">{locale.toUpperCase()}</Text>
                <Icon name="chevronDown" size="xs" />
            </Row>
            {open && (
                <Column className="language-menu-list" background="surface" border="neutral-alpha-medium" radius="m" shadow="l" padding="4" gap="2">
                    {locales.map((code) => (
                        <button
                            key={code}
                            type="button"
                            className={`language-option${code === locale ? " active" : ""}`}
                            onClick={() => handleSelect(code)}
                        >
                            {localeNames[code]}
                        </button>
                    ))}
                </Column>
            )}
        </div>
    );
}
