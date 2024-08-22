import { FC } from "react";
import { TBadgeProps } from "./type";

export const Badge: FC<TBadgeProps> = ({text}) => {
    return(
        <div className="text-xs bg-zinc-300 text-black rounded-2xl py-2 px-3 w-max">
            {text}
        </div>
    );
}