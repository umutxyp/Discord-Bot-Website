import { Column, Grid, Heading, Icon, Row, Text } from "@once-ui-system/core";
import { getDictionary } from "../../../i18n/getDictionary";
import { PREMIUM_URL } from "../../../resources/constants";
import { PremiumTabs } from "../../../components/PremiumTabs";

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return { title: `${dict.premium.title} - Beatra`, description: dict.premium.subtitle };
}

export default async function Premium({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <Column fillWidth horizontal="center" gap="96" paddingY="80" paddingX="24">
            <Column fillWidth maxWidth="xl" horizontal="center">
                <Column horizontal="center" align="center" gap="16" maxWidth={44}>
                    <Heading as="h1" variant="display-strong-s" align="center">{dict.premium.title}</Heading>
                    <Text variant="body-default-l" onBackground="neutral-weak" align="center">{dict.premium.subtitle}</Text>
                </Column>
            </Column>

            <PremiumTabs premium={dict.premium} ctaUrl={PREMIUM_URL} />

            <Column fillWidth maxWidth="xl" gap="32" marginBottom="24" horizontal="center">
                <Column fillWidth gap="12" horizontal="center" align="center" style={{ paddingTop: 33, paddingBottom: 28 }}>
                    <Heading as="h2" variant="display-strong-xs" align="center">{dict.premium.comparisonTitle}</Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak" align="center" maxWidth={36}>{dict.premium.comparisonSubtitle}</Text>
                </Column>
                <Grid columns="4" gap="16" m={{ columns: 2 }} s={{ columns: 1 }}>
                    {dict.premium.highlights.map((item) => (
                        <Column key={item.title} background="surface" border="neutral-alpha-weak" radius="l" padding="20" gap="12">
                            <Row center width={2.5} height={2.5} radius="m" background="brand-alpha-weak" border="brand-alpha-medium">
                                <Icon name={item.icon} size="s" onBackground="brand-medium" />
                            </Row>
                            <Heading as="h3" variant="heading-strong-s">{item.title}</Heading>
                            <Text variant="body-default-s" onBackground="neutral-weak">{item.description}</Text>
                        </Column>
                    ))}
                </Grid>
            </Column>

            <Column fillWidth maxWidth="xl" background="surface" border="neutral-alpha-weak" radius="l" padding="32" gap="20">
                <Heading as="h2" variant="display-strong-xs">{dict.premium.faqTitle}</Heading>
                <Grid columns="2" gap="20" m={{ columns: 1 }}>
                    {dict.premium.faq.map((item) => (
                        <Column key={item.question} gap="8">
                            <Text variant="heading-strong-s">{item.question}</Text>
                            <Text variant="body-default-s" onBackground="neutral-weak">{item.answer}</Text>
                        </Column>
                    ))}
                </Grid>
            </Column>
        </Column>
    );
}
