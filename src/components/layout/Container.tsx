import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  aside?: ReactNode;
}

export default function Container({ children, aside }: IContainerProps) {
  return (
    <div className="flex min-h-screen mx-auto">
      <div className="flex gap-8 min-w-0 flex-1 px-6 py-6 sm:px-10">
        <div className="flex items-center w-full flex-col text-[15px] leading-7 text-copy">
          {children}
        </div>
        {aside}
      </div>
    </div>
  );
}
