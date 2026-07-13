"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Row, Column, ToggleButton, Button, IconButton, SmartLink, Text, Line, Media, Icon } from "@once-ui-system/core";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { StyleCustomizer } from "./StyleCustomizer";
import { INVITE_URL, DISCORD_URL } from "../resources/constants";

export function Header({ locale, dict }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const navItems = [
        { key: "home", href: `/${locale}`, icon: "home", label: dict.nav.home },
        { key: "commands", href: `/${locale}/commands`, icon: "terminal", label: dict.nav.commands },
        { key: "premium", href: `/${locale}/premium`, icon: "sparkles", label: dict.nav.premium },
        { key: "partners", href: `/${locale}/partners`, icon: "star", label: dict.nav.partners }
    ];

    return (
        <>
            <Row
                as="header"
                position="sticky"
                top="0"
                zIndex={9}
                fillWidth
                horizontal="center"
                background="page"
                borderBottom="neutral-alpha-weak"
                paddingY="12"
                className="site-header"
            >
                <Row fillWidth maxWidth="xl" horizontal="between" vertical="center" paddingX="24" className="site-header-inner">
                    <SmartLink href={`/${locale}`} unstyled>
                        <Row gap="8" vertical="center">
                            <Media
                                src="/img/logo-192.png"
                                alt="Beatra"
                                width={2.5}
                                height={2.5}
                                radius="m"
                                style={{ flexShrink: 0 }}
                            />
                            <Text variant="heading-strong-s" onBackground="neutral-strong">Beatra</Text>
                        </Row>
                    </SmartLink>

                    <Row gap="4" s={{ hide: true }} vertical="center" className="header-nav">
                        {navItems.map((item) => (
                            <SmartLink
                                key={item.key}
                                href={item.href}
                                unstyled
                                className={`header-nav-link${pathname === item.href ? " active" : ""}`}
                            >
                                <Icon name={item.icon} size="xs" />
                                <Text variant="label-default-s">{item.label}</Text>
                            </SmartLink>
                        ))}
                        <SmartLink href={DISCORD_URL} unstyled className="header-nav-link">
                            <Icon name="lifebuoy" size="xs" />
                            <Text variant="label-default-s">{dict.nav.support}</Text>
                        </SmartLink>
                    </Row>

                    <Row gap="12" vertical="center" className="site-header-actions">
                        <StyleCustomizer label={dict.nav.customize} closeLabel={dict.nav.close} />
                        <Row s={{ hide: true }}>
                            <LanguageSwitcher locale={locale} />
                        </Row>
                        <Row s={{ hide: true }}>
                            <Button href={INVITE_URL} prefixIcon="discord" size="m">
                                {dict.nav.invite}
                            </Button>
                        </Row>
                        <Row hide s={{ hide: false }}>
                            <IconButton
                                icon={open ? "close" : "menu"}
                                variant="secondary"
                                onClick={() => setOpen(!open)}
                            />
                        </Row>
                    </Row>
                </Row>
            </Row>

            {open && (
                <Column
                    hide
                    s={{ hide: false }}
                    fillWidth
                    position="fixed"
                    top="0"
                    left="0"
                    zIndex={8}
                    background="page"
                    borderBottom="neutral-alpha-weak"
                    padding="16"
                    paddingTop="80"
                    gap="8"
                    overflowY="auto"
                    className="mobile-nav-panel"
                    style={{ height: "100dvh" }}
                >
                    {navItems.map((item) => (
                        <ToggleButton
                            key={item.key}
                            href={item.href}
                            label={item.label}
                            prefixIcon={item.icon}
                            selected={pathname === item.href}
                            fillWidth
                            horizontal="start"
                        />
                    ))}
                    <ToggleButton
                        href={DISCORD_URL}
                        label={dict.nav.support}
                        prefixIcon="lifebuoy"
                        fillWidth
                        horizontal="start"
                    />
                    <Line background="neutral-alpha-medium" />
                    <LanguageSwitcher locale={locale} />
                    <Button href={INVITE_URL} prefixIcon="discord" fillWidth>
                        {dict.nav.invite}
                    </Button>
                </Column>
            )}
        </>
    );
}
