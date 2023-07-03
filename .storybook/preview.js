import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import pretty from "pretty";

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    layout: "centered",
    controls: {
        expanded: true,
    },
    docs: {
        transformSource: (input) => pretty(input),
    },
    options: {
        storySort: {
            order: ["Usage", "Collection"],
        },
    },
};

addDecorator(withA11y);
