import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}
export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="px-6 h-12 rounded-2xl text-white font-medium bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 transition-all disabled:text-gray-400 disabled:cursor-not-allowed"
    />
  );
}