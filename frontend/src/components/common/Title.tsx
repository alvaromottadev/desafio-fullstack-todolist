import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

/*
This component renders a title (h1) with optional custom styling.
It accepts the following props:
- children: The title content to be displayed.
- className: Optional CSS classes for additional styling.
It exists in case there is a standardization in titles, for example: font size, color, etc.
*/
export const Title = ({ children, className }: TitleProps) => {
  return <h1 className={`text-4xl font-extrabold ${className}`}>{children}</h1>;
};
