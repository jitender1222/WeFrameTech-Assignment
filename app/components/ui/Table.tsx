import React from "react";

export const Th = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <th
      className={`px-3 py-3 text-left text-[10px] font-medium uppercase tracking-wide ${className}`}
    >
      {children}
    </th>
  );
};

export const Td = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <td className={`px-3 py-3 align-middle ${className}`}>{children}</td>;
};
