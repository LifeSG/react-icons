import * as React from "react";
import { SVGProps } from "react";
export const PlaceholderIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M17.5 4C17.4996 3.60231 17.3414 3.22103 17.0602 2.93982C16.779 2.65861 16.3977 2.50044 16 2.5H4C3.63568 2.50008 3.28398 2.63343 3.0112 2.87493C2.98611 2.8951 2.96211 2.91658 2.93927 2.93927C2.91656 2.96211 2.89508 2.98615 2.87493 3.01128C2.63345 3.28404 2.5001 3.63571 2.5 4V16C2.50044 16.3977 2.65861 16.779 2.93982 17.0602C3.22103 17.3414 3.60231 17.4996 4 17.5H16C16.3643 17.4999 16.716 17.3666 16.9888 17.1251C17.0391 17.0848 17.0848 17.0391 17.1251 16.9888C17.3666 16.716 17.4999 16.3643 17.5 16V4ZM15.7 14.4272L5.57275 4.3H15.7V14.4272ZM4.3 5.57275L14.4272 15.7H4.3V5.57275Z"
            fill="currentColor"
        />
    </svg>
);
PlaceholderIcon.displayName = "PlaceholderIcon";
