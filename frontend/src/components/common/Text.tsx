import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

/*
This component renders a paragraph of text with optional custom styling.
It accepts the following props:
- children: The text content to be displayed.
- className: Optional CSS classes for additional styling.
It exists in case there is a standardization in texts (paragraphs), for example: font size, color, etc.
*/
export const Text = ({ children, className }: TextProps) => {
  return <p className={className}>{children}</p>;
};
