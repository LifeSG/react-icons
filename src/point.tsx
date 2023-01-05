import * as React from "react";
import { SVGProps } from "react";
export const PointIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={10} cy={9.99992} r={1.66667} fill="currentColor" />
    </svg>
);
PointIcon.displayName = "PointIcon";
