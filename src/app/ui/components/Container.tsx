import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return (
    <div className="max-w-[600px] min-h-screen my-5 mx-auto">{children}</div>
  );
}
