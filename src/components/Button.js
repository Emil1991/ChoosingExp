import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="px-3 py-1 rounded-lg bg-blue-500 text-blue-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
      {...buttonProps}
    >
      {children}
    </button>
  );
}