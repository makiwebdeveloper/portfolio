import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "px-4 py-2 border-2 border-slate-600 transition duration-300",
  {
    variants: {
      bgColor: {
        purple: "bg-purple-200",
        red: "bg-red-200",
        peach: "bg-orange-200",
        green: "bg-green-200",
        yellow: "bg-yellow-200",
      },
      rounded: {
        default:
          "rounded shadow-[5px_5px_rgb(71,85,105)] hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-[0px_0px_rgb(71,85,105)]",
        full: "rounded-full shadow-[0px_5px_rgb(71,85,105)] hover:rotate-0 hover:translate-y-[5px] hover:shadow-[0px_0px_rgb(71,85,105)]",
      },
      rotate: {
        "0": "rotate-0",
        "-1": "-rotate-1",
        "-2": "-rotate-2",
        "1": "rotate-1",
        "2": "rotate-2",
      },
    },
    defaultVariants: {
      bgColor: "purple",
      rounded: "default",
      rotate: "0",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  children,
  className,
  bgColor,
  rounded,
  rotate,
  ...props
}: Props) {
  return (
    <button
      className={cn(buttonVariants({ bgColor, rounded, rotate, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
