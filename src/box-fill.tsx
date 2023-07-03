import * as React from "react";
import { SVGProps } from "react";
export const BoxFillIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <mask
            id="mask0_11068_94183"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={20}
            height={20}
        >
            <rect width={20} height={20} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_11068_94183)">
            <path
                d="M3 16.5V7.91667C2.68056 7.81944 2.43403 7.63889 2.26042 7.375C2.08681 7.11111 2 6.81944 2 6.5V3.5C2 3.0875 2.14688 2.73437 2.44063 2.44062C2.73438 2.14687 3.0875 2 3.5 2H16.5C16.9125 2 17.2656 2.14687 17.5594 2.44062C17.8531 2.73437 18 3.0875 18 3.5V6.5C18 6.81944 17.9132 7.11111 17.7396 7.375C17.566 7.63889 17.3194 7.81944 17 7.91667V16.4985C17 16.9162 16.8531 17.2708 16.5594 17.5625C16.2656 17.8542 15.9125 18 15.5 18H4.5C4.0875 18 3.73438 17.8531 3.44062 17.5594C3.14687 17.2656 3 16.9125 3 16.5ZM16.5 6.5V3.5H3.5V6.5H16.5ZM8 11.5H12V10H8V11.5Z"
                fill="currentColor"
            />
        </g>
    </svg>
);
BoxFillIcon.displayName = "BoxFillIcon";
