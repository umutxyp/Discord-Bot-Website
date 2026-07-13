import { Row, Column, Text, SmartLink, IconButton, Media } from "@once-ui-system/core";
import {
    DISCORD_URL,
    GITHUB_URL,
    VOTE_URL,
    INVITE_URL,
    YOUTUBE_URL,
    TWITTER_URL,
    INSTAGRAM_URL
} from "../resources/constants";

export function Footer({ locale, dict }) {
    const year = new Date().getFullYear();

    const linkColumns = [
        {
            title: dict.footer.bot.title,
            links: [
                { label: dict.footer.bot.invite, href: INVITE_URL },
                { label: dict.footer.bot.vote, href: VOTE_URL },
                { label: dict.footer.bot.support, href: DISCORD_URL }
            ]
        },
        {
            title: dict.footer.site.title,
            links: [
                { label: dict.nav.commands, href: `/${locale}/commands` },
                { label: dict.nav.premium, href: `/${locale}/premium` },
                { label: dict.nav.partners, href: `/${locale}/partners` },
                { label: dict.footer.site.github, href: GITHUB_URL }
            ]
        },
        {
            title: dict.footer.legal.title,
            links: [
                { label: dict.footer.legal.tos, href: `/${locale}/tos` },
                { label: dict.footer.legal.privacy, href: `/${locale}/privacy` }
            ]
        }
    ];

    const socials = [
        { icon: "discord", href: DISCORD_URL, label: "Discord" },
        { icon: "github", href: GITHUB_URL, label: "GitHub" },
        { icon: "youtube", href: YOUTUBE_URL, label: "YouTube" },
        { icon: "twitter", href: TWITTER_URL, label: "X" },
        { icon: "instagram", href: INSTAGRAM_URL, label: "Instagram" }
    ];

    return (
        <Row as="footer" fillWidth horizontal="center" paddingY="40" className="site-footer">
            <Column fillWidth maxWidth="xl" paddingX="24" gap="40" className="site-footer-inner">
                <Row fillWidth gap="40" s={{ direction: "column" }} className="site-footer-main">
                    <Column gap="12" maxWidth={22} className="site-footer-brand">
                        <Row gap="8" vertical="center">
                            <Media src="/img/logo-192.png" alt="Beatra" width={2} height={2} radius="m" style={{ flexShrink: 0 }} />
                            <Text variant="heading-strong-s" onBackground="neutral-strong">Beatra</Text>
                        </Row>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            {dict.footer.description}
                        </Text>
                        <Row gap="12" wrap className="site-footer-socials">
                            {socials.map((social) => (
                                <IconButton
                                    key={social.label}
                                    href={social.href}
                                    icon={social.icon}
                                    tooltip={social.label}
                                    variant="secondary"
                                />
                            ))}
                        </Row>
                    </Column>

                    <Row fillWidth gap="40" horizontal="end" s={{ horizontal: "start" }} className="site-footer-links">
                        {linkColumns.map((col) => (
                            <Column key={col.title} gap="12" minWidth={10} className="site-footer-column">
                                <Text variant="label-default-s" onBackground="neutral-medium">{col.title}</Text>
                                <Column gap="8">
                                    {col.links.map((link) => (
                                        <SmartLink key={link.label} href={link.href}>
                                            <Text variant="body-default-s" onBackground="neutral-weak">{link.label}</Text>
                                        </SmartLink>
                                    ))}
                                </Column>
                            </Column>
                        ))}
                    </Row>
                </Row>

                <Row fillWidth horizontal="between" vertical="center" gap="16" s={{ direction: "column", horizontal: "center" }} className="site-footer-bottom">
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        © {year} <SmartLink href="https://beatra.app">Beatra</SmartLink>
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        {dict.footer.credit.split("{name}")[0]}
                        <SmartLink href="https://codeshare.me">Codeshare</SmartLink>
                        {dict.footer.credit.split("{name}")[1]}
                    </Text>
                </Row>
            </Column>
        </Row>
    );
}
