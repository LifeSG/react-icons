import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../storybook-common/style-specs/color";
import { ICONS } from "./data";

// =============================================================================
// ICON SET
// =============================================================================
export const IconSet = () => {
    const [selectedDisplayName, setSelected] = useState<string | undefined>(
        undefined
    );

    useEffect(() => {
        if (selectedDisplayName) handleToastDisplay();
    }, [selectedDisplayName]);

    const handleLinkClick =
        (displayName: string) => (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            navigator.clipboard.writeText(displayName);
            setSelected(displayName);
        };

    const handleToastDisplay = () => {
        setTimeout(() => {
            setSelected(undefined);
        }, 2000);
    };

    const renderIcons = () => {
        return ICONS.map((icon, index) => {
            return (
                <Item key={index}>
                    <Clickable onClick={handleLinkClick(icon.type.displayName)}>
                        {icon}
                    </Clickable>
                    <LabelLink>{icon.type.displayName}</LabelLink>
                </Item>
            );
        });
    };

    return (
        <>
            <Set>{renderIcons()}</Set>
            {selectedDisplayName && (
                <Toast>
                    Copied <code>{selectedDisplayName}</code> to clipboard
                </Toast>
            )}
        </>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Set = styled.ul`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100% / 6);
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1199px) {
        width: calc(100% / 4);
    }

    @media screen and (max-width: 480px) {
        width: calc(100% / 2);
    }
`;

const Clickable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 5rem;
    border-radius: 4px;
    cursor: pointer;

    svg {
        transition: all ease-in-out 300ms;
    }

    :hover {
        background: ${Colors.Neutral[7]};
        svg {
            height: 1.5rem;
            width: 1.5rem;
        }
    }
`;

const LabelLink = styled.span`
    font-family: "Open Sans Regular";
    font-size: 0.9rem !important;
    margin-bottom: 0;
`;

const Toast = styled.div`
    position: absolute;
    width: fit-content;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-family: "Open Sans Regular";
    font-size: 0.9rem !important;
    padding: 0.5rem 1rem;
    border-radius: 4px;

    code {
        color: ${Colors.Orange};
        background-color: transparent;
    }
`;
