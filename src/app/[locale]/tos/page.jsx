import { Column, Row, Heading, Text } from "@once-ui-system/core";
import { getDictionary } from "../../../i18n/getDictionary";

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return { title: `${dict.tos.title} — Beatra` };
}

export default async function Tos({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <Column fillWidth horizontal="center" paddingY="64" paddingX="24">
            <Column fillWidth maxWidth="s" gap="40">
                <Column gap="8">
                    <Heading as="h1" variant="display-strong-xs">{dict.tos.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">{dict.tos.updated}</Text>
                </Column>
                <Column gap="32">
                    {dict.tos.sections.map((section) => (
                        <Column key={section.heading} gap="12">
                            <Heading as="h2" variant="heading-strong-s">{section.heading}</Heading>
                            {section.text && (
                                <Text variant="body-default-m" onBackground="neutral-weak">{section.text}</Text>
                            )}
                            {section.items && (
                                <Column gap="8">
                                    {section.items.map((item, idx) => (
                                        <Row key={idx} gap="12">
                                            <Text variant="body-default-m" onBackground="brand-medium">&#8250;</Text>
                                            <Text variant="body-default-m" onBackground="neutral-weak">{item}</Text>
                                        </Row>
                                    ))}
                                </Column>
                            )}
                        </Column>
                    ))}
                </Column>
            </Column>
        </Column>
    );
}
