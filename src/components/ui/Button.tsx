import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/30",
  secondary:
    "bg-white text-black hover:bg-neutral-100 shadow-lg shadow-white/10",
  outline:
    "border-2 border-neutral-600 text-white hover:border-brand-500 hover:text-brand-400",
  ghost: "text-neutral-400 hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
