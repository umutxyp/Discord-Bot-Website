import { Column, Row, Grid, Heading, Text, Icon, Button } from "@once-ui-system/core";
import { getDictionary } from "../../../i18n/getDictionary";
import { INVITE_URL, DISCORD_URL, VOTE_URL } from "../../../resources/constants";

const commandGroups = [
    { key: "playback", commands: ["play", "pause", "resume", "stop", "skip", "back", "seek", "volume", "loop", "autoplay", "filter"] },
    { key: "queue", commands: ["queue", "shuffle", "clear", "playlist", "save", "search", "nowplaying"] },
    { key: "utility", commands: ["channel", "dj", "language", "servers", "statistic", "time", "help", "ping"] }
];

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return { title: `${dict.commands.title} — Beatra`, description: dict.commands.subtitle };
}

export default async function Commands({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <Column fillWidth horizontal="center" paddingY="64" paddingX="24" gap="56">
            <Column horizontal="center" gap="12" maxWidth={32} align="center">
                <Heading as="h1" variant="display-strong-s" align="center">{dict.commands.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" align="center">{dict.commands.subtitle}</Text>
            </Column>

            <Column fillWidth maxWidth="l" gap="40">
                {commandGroups.map((group) => (
                    <Column key={group.key} gap="16">
                        <Text variant="label-default-s" onBackground="neutral-medium">
                            {dict.commands.groups[group.key]}
                        </Text>
                        <Grid columns="4" gap="12" m={{ columns: 3 }} s={{ columns: 2 }}>
                            {group.commands.map((cmd) => (
                                <Row
                                    key={cmd}
                                    gap="8"
                                    vertical="center"
                                    background="surface"
                                    border="neutral-alpha-weak"
                                    radius="m"
                                    paddingX="16"
                                    paddingY="12"
                                >
                                    <Icon name="terminal" size="xs" onBackground="brand-medium" />
                                    <Text variant="code-default-s" onBackground="neutral-strong">{cmd}</Text>
                                </Row>
                            ))}
                        </Grid>
                    </Column>
                ))}
            </Column>

            <Row gap="12" horizontal="center" s={{ direction: "column" }}>
                <Button href={INVITE_URL} prefixIcon="discord" size="l">{dict.commands.ctaInvite}</Button>
                <Button href={DISCORD_URL} variant="secondary" size="l">{dict.commands.ctaSupport}</Button>
                <Button href={VOTE_URL} variant="secondary" size="l">{dict.commands.ctaVote}</Button>
            </Row>
        </Column>
    );
}
