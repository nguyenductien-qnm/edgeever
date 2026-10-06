import type { ComponentProps, ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface ButtonTooltipProps {
  children: ReactNode;
  title?: ReactNode;
  side?: ComponentProps<typeof TooltipContent>["side"];
}

export const ButtonTooltip = ({ children, title, side = "bottom" }: ButtonTooltipProps) => {
  if (title === undefined || title === null || title === "") {
    return <>{children}</>;
  }

  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
