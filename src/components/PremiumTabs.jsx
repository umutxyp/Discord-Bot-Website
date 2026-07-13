"use client";

import { useState } from "react";
import { Button, Column, Grid, Heading, Icon, Row, Tag, Text } from "@once-ui-system/core";

export function PremiumTabs({ premium, ctaUrl }) {
    const [active, setActive] = useState(premium.categories[0].key);
    const activeCategory = premium.categories.find((category) => category.key === active) || premium.categories[0];
    const visibleFeatureCount = activeCategory.key === "personal" ? 8 : 6;

    return (
        <Column fillWidth maxWidth="xl" gap="36" paddingY="24">
            <Row gap="6" wrap horizontal="center" className="premium-tabs" role="tablist" aria-label={premium.title}>
                {premium.categories.map((category) => (
                    <button
                        key={category.key}
                        type="button"
                        role="tab"
                        aria-selected={category.key === active}
                        className={`premium-tab${category.key === active ? " active" : ""}`}
                        onClick={() => setActive(category.key)}
                    >
                        {category.label}
                    </button>
                ))}
            </Row>

            <Column fillWidth gap="12" horizontal="center" align="center" style={{ paddingTop: 27, paddingBottom: 35 }}>
                <Heading as="h2" variant="display-strong-xs" align="center">{activeCategory.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" align="center" maxWidth={42}>{activeCategory.subtitle}</Text>
            </Column>

            <Grid
                columns="3"
                gap="24"
                fillWidth
                m={{ columns: 1 }}
                className={`premium-plan-grid premium-plan-grid-${activeCategory.key}`}
            >
                {activeCategory.plans.map((plan) => (
                    <Column
                        key={plan.name}
                        className={`premium-plan-card premium-plan-card-${activeCategory.key}`}
                        background="surface"
                        border="neutral-alpha-weak"
                        radius="l"
                        padding="32"
                    >
                        <Column gap="12" className="premium-plan-main">
                            <Row fillWidth horizontal="between" vertical="start" gap="16" className="premium-plan-heading-row">
                                <Column gap="4" className="premium-plan-copy">
                                    {plan.kicker && <Text variant="label-default-s" onBackground="brand-medium">{plan.kicker}</Text>}
                                    <Heading as="h3" variant="display-strong-xs" className="premium-plan-name">{plan.name}</Heading>
                                    <Text variant="body-default-s" onBackground="neutral-weak" className="premium-plan-description">{plan.description}</Text>
                                </Column>
                                {plan.badge && <Tag size="s" variant="brand">{plan.badge}</Tag>}
                            </Row>
                            <Row gap="8" vertical="end" className="premium-plan-price">
                                <Text variant="display-strong-m">{plan.price}</Text>
                                <Text variant="body-default-m" onBackground="neutral-weak">{premium.perMonth}</Text>
                            </Row>
                        </Column>

                        <Button href={ctaUrl} prefixIcon={plan.ctaIcon || "sparkles"} size="l" arrowIcon fillWidth className="premium-plan-button">
                            {plan.cta}
                        </Button>

                        <Column gap="10" className="premium-plan-features">
                            {plan.features.slice(0, visibleFeatureCount).map((feature) => (
                                <Row key={feature} gap="10" vertical="start">
                                    <Icon name="sparkles" size="xs" onBackground="brand-medium" marginTop="2" />
                                    <Text variant="body-default-m" onBackground="neutral-weak">{feature}</Text>
                                </Row>
                            ))}
                        </Column>

                    </Column>
                ))}
            </Grid>
        </Column>
    );
}
