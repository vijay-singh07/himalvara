import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold tracking-wide rounded-full transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#1b3a2d] text-white",
        gold: "bg-[#c8a951] text-[#0d1f17]",
        "gold-outline": "border border-[#c8a951] text-[#c8a951] bg-transparent",
        success: "bg-[#e8f5f1] text-[#1b3a2d]",
        difficulty: "bg-white/20 text-white backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}
