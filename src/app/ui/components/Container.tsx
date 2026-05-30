import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[620px] flex-col px-5 py-6 sm:px-8 md:px-0 md:py-8">
      {children}
    </div>
  );
}
