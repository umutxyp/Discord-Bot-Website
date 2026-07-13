"use client";

import { usePathname } from "next/navigation";
import { Column, Button, Heading, Text } from "@once-ui-system/core";
import { defaultLocale, locales } from "../../i18n/config";
import en from "../../i18n/dictionaries/en.json";
import tr from "../../i18n/dictionaries/tr.json";
import es from "../../i18n/dictionaries/es.json";
import pt from "../../i18n/dictionaries/pt.json";
import fr from "../../i18n/dictionaries/fr.json";
import de from "../../i18n/dictionaries/de.json";
import ru from "../../i18n/dictionaries/ru.json";

const dictionaries = { en, tr, es, pt, fr, de, ru };

export default function NotFound() {
    const pathname = usePathname();
    const segment = pathname.split("/")[1];
    const locale = locales.includes(segment) ? segment : defaultLocale;
    const dict = dictionaries[locale];

    return (
        <Column fillWidth horizontal="center" paddingY="104" paddingX="24">
            <Column horizontal="center" gap="16" maxWidth={32} align="center">
                <Heading as="h1" variant="display-strong-xl" align="center">{dict.notFound.title}</Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" align="center">
                    {dict.notFound.message}
                </Text>
                <Button href={`/${locale}`} arrowIcon marginTop="8">
                    {dict.notFound.button}
                </Button>
            </Column>
        </Column>
    );
}
