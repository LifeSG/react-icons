import * as React from "react";
import { SVGProps } from "react";
export const DragHandleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.14355 12.1387V10.6387H16.1436V12.1387H4.14355ZM4.14355 8.63867V7.13867H16.1436V8.63867H4.14355Z"
            fill="currentColor"
        />
    </svg>
);
DragHandleIcon.displayName = "DragHandleIcon";
