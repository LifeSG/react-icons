import * as React from "react";
import { SVGProps } from "react";
export const EraserIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={20} height={20} fill="#D8D8D8" fillOpacity={0.01} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7779 15.5556H9.9876L16.504 9.03919C16.721 8.82219 16.721 8.47063 16.504 8.25358L11.7465 3.49612C11.5295 3.27912 11.178 3.27912 10.9609 3.49612L3.8247 10.6321C3.50786 10.9489 3.33342 11.3699 3.33342 11.8181C3.33342 12.2663 3.50786 12.6873 3.8247 13.0038L6.37631 15.5556H2.2223C1.91553 15.5556 1.66675 15.8044 1.66675 16.1112C1.66675 16.4179 1.91553 16.6667 2.2223 16.6667H17.7779C18.0847 16.6667 18.3334 16.4179 18.3334 16.1112C18.3334 15.8044 18.0847 15.5556 17.7779 15.5556ZM11.3537 4.67452L15.3256 8.64641L10.957 13.0148L6.9852 9.04302L11.3537 4.67452ZM4.61025 11.418C4.50342 11.5249 4.44453 11.667 4.44453 11.8181C4.44453 11.9691 4.50342 12.1113 4.61025 12.2179L7.78193 15.3899C7.99565 15.6037 8.36865 15.6037 8.58187 15.3899L10.1714 13.8004L6.19959 9.82864L4.61025 11.418Z"
            fill="currentColor"
        />
    </svg>
);
EraserIcon.displayName = "EraserIcon";
