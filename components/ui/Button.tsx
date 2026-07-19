import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-semibold text-sm tracking-wide",
    "rounded-full transition-all duration-250",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[#c8a951] text-[#0d1f17]",
          "hover:bg-[#d4b96a] hover:shadow-[0_8px_24px_rgb(200_169_81/0.4)]",
          "active:scale-[0.98]",
        ],
        secondary: [
          "bg-[#1b3a2d] text-white border border-[#2d6651]",
          "hover:bg-[#245040] hover:border-[#3d8a6e]",
          "active:scale-[0.98]",
        ],
        outline: [
          "bg-transparent text-[#1b3a2d] border-2 border-[#1b3a2d]",
          "hover:bg-[#1b3a2d] hover:text-white",
          "active:scale-[0.98]",
        ],
        "outline-light": [
          "bg-transparent text-white border-2 border-white/60",
          "hover:bg-white hover:text-[#1b3a2d]",
          "active:scale-[0.98]",
        ],
        ghost: [
          "bg-transparent text-[#1b3a2d]",
          "hover:bg-[#e8f5f1]",
          "active:scale-[0.98]",
        ],
        link: [
          "bg-transparent text-[#c8a951] underline-offset-4",
          "hover:underline",
          "p-0 h-auto",
        ],
      },
      size: {
        sm: "h-9 px-5 text-xs",
        md: "h-11 px-7 text-sm",
        lg: "h-13 px-9 text-base",
        xl: "h-15 px-12 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
