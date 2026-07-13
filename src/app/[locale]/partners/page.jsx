import { Column, Row, Grid, Card, Media, Tag, Heading, Text } from "@once-ui-system/core";
import { getDictionary } from "../../../i18n/getDictionary";

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return { title: `${dict.partners.title} — Beatra`, description: dict.partners.subtitle };
}

const products = [
    {
        name: "Codeshare",
        href: "https://codeshare.me",
        logo: "/img/products/codeshare.png",
        badge: "Flagship",
        tagline: "Code & Digital Marketplace",
        description:
            "The main platform where developers publish, share, and sell their source code, software tools, and developer services.",
        tags: ["Code Marketplace", "Developer Services", "CLI Tool", "Live Preview"]
    },
    {
        name: "Beatra",
        href: "https://beatra.app",
        logo: "/img/products/beatra.png",
        badge: "Free & Paid",
        tagline: "Discord Music Bot",
        description:
            "A powerful Discord music bot that lets you play high-quality, uninterrupted music from YouTube, Spotify, and SoundCloud.",
        tags: ["24/7 Uptime", "Free & Premium Plans", "Playlist Support"]
    },
    {
        name: "Sylon",
        href: "https://sylon.app",
        logo: "/img/products/sylon.png",
        badge: "Free & Paid",
        tagline: "Discord Moderation Bot",
        description:
            "An AI-powered Discord moderation bot for spam and ad protection, server guard automation, tickets, logging, and welcome flows.",
        tags: ["AI Moderation", "Spam & Ad Protection", "Tickets", "Server Guard"]
    },
    {
        name: "McStat",
        href: "https://mcstat.org",
        logo: "/img/products/mcstat.png",
        badge: "Free & Paid",
        tagline: "Minecraft Statistics Platform",
        description:
            "A comprehensive statistics and analytics platform for Minecraft servers — live player counts, TPS values, server status, and historical trends.",
        tags: ["10s Refresh Rate", "TPS & Player Tracking", "Historical Trends"]
    }
];

export default async function Partners({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <Column fillWidth horizontal="center" paddingY="64" paddingX="24" gap="64">
            <Column horizontal="center" gap="12" maxWidth={32} align="center">
                <Heading as="h1" variant="display-strong-s" align="center">{dict.partners.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" align="center">{dict.partners.subtitle}</Text>
            </Column>

            <Column fillWidth maxWidth="l" gap="32">
                <Grid columns="2" gap="20" s={{ columns: 1 }}>
                    {products.map((product) => (
                        <Card
                            key={product.name}
                            href={product.href}
                            fillWidth
                            direction="column"
                            gap="16"
                            background="surface"
                            border="neutral-alpha-weak"
                            radius="l"
                            padding="24"
                        >
                            <Row gap="16" vertical="center">
                                <Media
                                    src={product.logo}
                                    alt={`${product.name} logo`}
                                    width={3.5}
                                    height={3.5}
                                    radius="m"
                                    objectFit="cover"
                                    style={{ flexShrink: 0 }}
                                />
                                <Column gap="2">
                                    <Row gap="8" vertical="center" wrap>
                                        <Text variant="heading-strong-s">{product.name}</Text>
                                        <Tag size="s" variant="brand">{product.badge}</Tag>
                                    </Row>
                                    <Text variant="body-default-s" onBackground="brand-medium">{product.tagline}</Text>
                                </Column>
                            </Row>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                                {product.description}
                            </Text>
                            <Row gap="8" wrap>
                                {product.tags.map((tag) => (
                                    <Tag key={tag} size="s" variant="neutral">{tag}</Tag>
                                ))}
                            </Row>
                        </Card>
                    ))}
                </Grid>
            </Column>
        </Column>
    );
}
