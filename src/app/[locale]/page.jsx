import { Background, Button, Column, Grid, Heading, Icon, Row, Text, Line } from "@once-ui-system/core";
import { getDictionary } from "../../i18n/getDictionary";
import { INVITE_URL, DISCORD_URL } from "../../resources/constants";

export default async function Home({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const stats = Object.values(dict.stats);
    return (
        <Column fillWidth horizontal="center" gap="104" paddingBottom="104">
            <Column fillWidth horizontal="center" paddingTop="80" paddingBottom="16">
                <Background
                    position="absolute"
                    top="0"
                    left="0"
                    fill
                    pointerEvents="none"
                    gradient={{
                        display: true,
                        colorStart: "brand-alpha-medium",
                        colorEnd: "static-transparent",
                        x: 50,
                        y: 0,
                        width: 150,
                        height: 60,
                        opacity: 50
                    }}
                />
                <Column zIndex={1} horizontal="center" gap="24" maxWidth={44} paddingX="24">
                    <Column horizontal="center" gap="16">
                        <Heading as="h1" variant="display-strong-l" align="center">
                            {dict.hero.title}
                        </Heading>
                    </Column>
                    <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
                        {dict.hero.subtitle}
                    </Text>
                    <Row gap="12" horizontal="center" s={{ direction: "column" }}>
                        <Button href={INVITE_URL} prefixIcon="discord" size="l" arrowIcon>
                            {dict.hero.ctaPrimary}
                        </Button>
                        <Button href={DISCORD_URL} variant="secondary" size="l">
                            {dict.hero.ctaSecondary}
                        </Button>
                    </Row>
                </Column>
            </Column>

            <Column fillWidth horizontal="center" marginTop="-88">
                <Row fillWidth maxWidth="l" paddingX="24" horizontal="center">
                    <Grid columns="4" gap="24" s={{ columns: 2 }}>
                        {stats.map((stat) => (
                            <Column key={stat.label} horizontal="center" gap="4">
                                <Text variant="display-strong-xs" align="center">{stat.value}</Text>
                                <Text variant="body-default-s" onBackground="neutral-weak" align="center">{stat.label}</Text>
                            </Column>
                        ))}
                    </Grid>
                </Row>
            </Column>

            <Column fillWidth horizontal="center">
                <Column fillWidth maxWidth="l" paddingX="24" gap="40">
                    <Column gap="12" maxWidth={34}>
                        <Heading as="h2" variant="display-strong-xs">
                            {dict.howItWorks.title}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            {dict.howItWorks.subtitle}
                        </Text>
                    </Column>
                    <Grid columns="3" gap="24" m={{ columns: 1 }}>
                        {dict.howItWorks.steps.map((step, index) => (
                            <Column
                                key={step.title}
                                background="surface"
                                border="neutral-alpha-weak"
                                radius="l"
                                padding="24"
                                gap="16"
                            >
                                <Row
                                    center
                                    width={2.5}
                                    height={2.5}
                                    radius="full"
                                    background="brand-alpha-weak"
                                    border="brand-alpha-medium"
                                >
                                    <Text variant="label-strong-s" onBackground="brand-strong">
                                        {String(index + 1).padStart(2, "0")}
                                    </Text>
                                </Row>
                                <Heading as="h3" variant="heading-strong-s">{step.title}</Heading>
                                <Text variant="body-default-s" onBackground="neutral-weak">{step.description}</Text>
                            </Column>
                        ))}
                    </Grid>
                </Column>
            </Column>

            <Column fillWidth horizontal="center">
                <Column fillWidth maxWidth="l" paddingX="24" gap="40">
                    <Column gap="12" maxWidth={32}>
                        <Heading as="h2" variant="display-strong-xs">
                            {dict.features.title}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            {dict.features.subtitle}
                        </Text>
                    </Column>
                    <Grid columns="4" gap="24" m={{ columns: 2 }} s={{ columns: 1 }}>
                        {dict.features.items.map((feature) => (
                            <Column
                                key={feature.title}
                                background="surface"
                                border="neutral-alpha-weak"
                                radius="l"
                                padding="24"
                                gap="16"
                            >
                                <Row center width={2.5} height={2.5} radius="m" background="brand-alpha-weak" border="brand-alpha-medium">
                                    <Icon name={feature.icon} size="s" onBackground="brand-medium" />
                                </Row>
                                <Heading as="h3" variant="heading-strong-s">{feature.title}</Heading>
                                <Text variant="body-default-s" onBackground="neutral-weak">{feature.description}</Text>
                            </Column>
                        ))}
                    </Grid>
                </Column>
            </Column>

            <Column fillWidth horizontal="center">
                <Column fillWidth maxWidth="l" paddingX="24">
                <Row
                    fillWidth
                    horizontal="between"
                    vertical="center"
                    gap="24"
                    padding="32"
                    radius="l"
                    background="surface"
                    border="neutral-alpha-weak"
                    s={{ direction: "column", horizontal: "start", vertical: "start" }}
                >
                    <Column gap="8" maxWidth={38}>
                        <Heading as="h2" variant="display-strong-xs">
                            {dict.homePremium.title}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            {dict.homePremium.subtitle}
                        </Text>
                    </Column>
                    <Button href={`/${locale}/premium`} variant="secondary" prefixIcon="sparkles" arrowIcon>
                        {dict.homePremium.button}
                    </Button>
                </Row>
                </Column>
            </Column>

            <Column fillWidth horizontal="center">
                <Column fillWidth maxWidth="l" paddingX="24" gap="40">
                    <Column gap="12" maxWidth={34}>
                        <Heading as="h2" variant="display-strong-xs">
                            {dict.experience.title}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            {dict.experience.subtitle}
                        </Text>
                    </Column>
                    <Grid columns="3" gap="24" m={{ columns: 1 }}>
                        {dict.experience.items.map((item) => (
                            <Column
                                key={item.title}
                                background="surface"
                                border="neutral-alpha-weak"
                                radius="l"
                                padding="24"
                                gap="12"
                            >
                                <Row center width={2.5} height={2.5} radius="m" background="neutral-alpha-weak" border="neutral-alpha-weak">
                                    <Icon name={item.icon} size="s" onBackground="neutral-medium" />
                                </Row>
                                <Heading as="h3" variant="heading-strong-s">{item.title}</Heading>
                                <Text variant="body-default-s" onBackground="neutral-weak">{item.description}</Text>
                            </Column>
                        ))}
                    </Grid>
                </Column>
            </Column>

            <Column fillWidth horizontal="center">
                <Line width="40" />
            </Column>

            <Column fillWidth horizontal="center" paddingX="24">
                <Column
                    fillWidth
                    maxWidth="l"
                    position="relative"
                    radius="l"
                    border="neutral-alpha-weak"
                    overflow="hidden"
                    horizontal="center"
                    paddingY="64"
                    paddingX="24"
                >
                    <Background
                        position="absolute"
                        top="0"
                        left="0"
                        fill
                        pointerEvents="none"
                        gradient={{
                            display: true,
                            colorStart: "brand-alpha-medium",
                            colorEnd: "static-transparent",
                            x: 50,
                            y: 50,
                            width: 150,
                            height: 150,
                            opacity: 50
                        }}
                    />
                    <Column zIndex={1} horizontal="center" gap="16" maxWidth={36}>
                        <Heading as="h2" variant="display-strong-xs" align="center">
                            {dict.cta.title}
                        </Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                            {dict.cta.subtitle}
                        </Text>
                        <Button href={INVITE_URL} prefixIcon="discord" size="l" arrowIcon marginTop="8">
                            {dict.cta.button}
                        </Button>
                    </Column>
                </Column>
            </Column>
        </Column>
    );
}
