export interface ColorSet {
    Primary: string;
    PrimaryDark: string;
    ValidationRed: string;
    Neutral: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
    };
    Orange: string;
}

export const Colors: ColorSet = {
    Primary: "#1C76D5",
    PrimaryDark: "#1869BF",
    ValidationRed: "#C60000",
    Neutral: {
        1: "#282828", // Text Black
        2: "#424242",
        3: "#686868", // Text Grey
        4: "#A4A4A4",
        5: "#E0E4E5",
        6: "#ECEFEF",
        7: "#F8F8F8",
        8: "#FFFFFF",
    },
    Orange: "#FEAB10",
};
