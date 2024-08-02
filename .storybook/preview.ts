import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
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
