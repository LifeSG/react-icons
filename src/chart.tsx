import * as React from "react";
import { SVGProps } from "react";
export const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <mask
            id="mask0_11068_94179"
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
        <g mask="url(#mask0_11068_94179)">
            <path
                d="M6 14H7.5V10H6V14ZM12.5 14H14V6H12.5V14ZM9.25 14H10.75V11H9.25V14ZM9.25 10H10.75V8.5H9.25V10ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73437 3.44062 3.44062C3.73437 3.14687 4.0875 3 4.5 3H15.5C15.9125 3 16.2656 3.14687 16.5594 3.44062C16.8531 3.73437 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z"
                fill="currentColor"
            />
        </g>
    </svg>
);
ChartIcon.displayName = "ChartIcon";
