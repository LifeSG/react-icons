import * as React from "react";
import { SVGProps } from "react";
export const PlaceholderImageIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={20} height={20} fill="#ECEFEF" />
        <path
            d="M14.4393 5.36808C14.7206 5.08238 15.1022 4.92188 15.5 4.92188C15.8978 4.92188 16.2794 5.08238 16.5607 5.36808C16.842 5.65378 17 6.04127 17 6.44531C17 6.84935 16.842 7.23685 16.5607 7.52255C16.2794 7.80825 15.8978 7.96875 15.5 7.96875C15.1022 7.96875 14.7206 7.80825 14.4393 7.52255C14.158 7.23685 14 6.84935 14 6.44531C14 6.04127 14.158 5.65378 14.4393 5.36808Z"
            fill="#A4A4A4"
        />
        <path
            d="M17 15.0781H10H3L8.5 7.96875L11.5 12.0312L13 10L17 15.0781Z"
            fill="#A4A4A4"
        />
    </svg>
);
PlaceholderImageIcon.displayName = "PlaceholderImageIcon";
