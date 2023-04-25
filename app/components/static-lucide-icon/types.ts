import type { LucideProps } from "lucide-react";
import type { Theme, NamedSize } from "@/types/Variants";
import type { LucideIconName } from "@/types/Icons";
import type { ColorValue, ThemeWiseColor } from "@/types/Colors";
import type { FontWeight } from "@/types/Layout";

export type {
  LucideProps,
  Theme,
  NamedSize,
  LucideIconName,
  ColorValue,
  ThemeWiseColor,
  FontWeight,
};

/**
 * Full size type for the StaticLucideIcon component.
 * Named tokens map to rem values (xs→0.75rem, sm→1rem, md→1.5rem, lg→2rem, xl→2.5rem, xxl→3rem, xxxl→3.5rem).
 * Also accepts a numeric pixel value or any CSS length string.
 */
export type StaticLucideIconSize = NamedSize | number | (string & {});

/** Props interface for the {@link StaticLucideIcon} component. `name` is required. */
export interface StaticLucideIconProps extends Omit<LucideProps, "color"> {
  /** Color theme. */
  theme?: Theme;
  /** PascalCase Lucide icon name (e.g. `"ArrowRight"`). Required. */
  name: LucideIconName;
  /** Icon size. Named tokens map to rem values; numbers are treated as px. */
  size?: StaticLucideIconSize;
  /** Stroke color; hex values used directly, tokens with "-" resolve to CSS vars. */
  color?: ColorValue | ThemeWiseColor;
  /**
   * Stroke weight mapped to a numeric `strokeWidth` (0.5–3).
   * "lighter"→0.5, "light"→1, "normal"→2, "bold"→2.5, "bolder"→3.
   */
  weight?: FontWeight;
  /** When true, adds a `data-disabled` attribute and activates `disabledColor` if set. */
  disabled?: boolean;
  /** Color override applied when `disabled` is true. */
  disabledColor?: ColorValue | ThemeWiseColor;
}
