import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  aside?: ReactNode;
}

export default function Container({ children, aside }: IContainerProps) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex min-w-0 flex-1 justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="flex w-full max-w-[540px] flex-col text-[15px] leading-7 text-neutral-700 dark:text-neutral-300">
          {children}
        </div>
      </div>
      {aside}
    </div>
  );
}
