import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "../../resources/custom.css";

import classNames from "classnames";
import { Column, ThemeInit } from "@once-ui-system/core";

import { Providers } from "../../components/Providers";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { fonts, style } from "../../resources/once-ui.config";
import { baseURL } from "../../resources/seo";
import { locales, defaultLocale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return {
        title: dict.meta.title,
        description: dict.meta.description,
        metadataBase: new URL(baseURL),
        alternates: {
            canonical: `${baseURL}/${locale}`,
            languages: Object.fromEntries(locales.map((l) => [l, `${baseURL}/${l}`]))
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            url: `${baseURL}/${locale}`,
            siteName: "Beatra",
            images: [{ url: "/img/og-image.png", width: 1200, height: 630, alt: "Beatra" }],
            locale,
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: dict.meta.title,
            description: dict.meta.description,
            images: ["/img/og-image.png"]
        },
        icons: {
            icon: [
                { url: "/img/favicon-32.png", sizes: "32x32", type: "image/png" },
                { url: "/img/logo-192.png", sizes: "192x192", type: "image/png" }
            ],
            apple: "/img/apple-touch-icon.png"
        }
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <Column
            as="html"
            lang={locale}
            fillWidth
            suppressHydrationWarning
            className={classNames(
                fonts.heading.variable,
                fonts.body.variable,
                fonts.label.variable,
                fonts.code.variable
            )}
        >
            <head>
                <ThemeInit
                    config={{
                        theme: style.theme,
                        brand: style.brand,
                        accent: style.accent,
                        neutral: style.neutral,
                        solid: style.solid,
                        "solid-style": style.solidStyle,
                        border: style.border,
                        surface: style.surface,
                        transition: style.transition,
                        scaling: style.scaling
                    }}
                />
            </head>
            <Providers>
                <Column as="body" background="page" fillWidth minHeight="100vh" margin="0" padding="0">
                    <Header locale={locale} dict={dict} />
                    <Column as="main" flex={1} fillWidth horizontal="center">
                        {children}
                    </Column>
                    <Footer locale={locale} dict={dict} />
                </Column>
            </Providers>
        </Column>
    );
}
