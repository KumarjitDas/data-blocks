export { cn } from "cn";

import { CSS_NAMED_COLORS, KD_STYLE_COLORS } from "@/lib/constants";
import type { CSSNamedColor, HexColorString, ColorKey } from "@/types/Colors";

/**
 * Resolves a color key to its hex string value.
 *
 * Resolution order:
 * 1. Strings containing "-" are looked up in `KD_STYLE_COLORS` design tokens
 * 2. Strings starting with "#" are returned as-is
 * 3. All other strings are looked up as CSS named colors
 *
 * @param color - A design-token key, CSS named color, or hex string
 * @param returnDefault - When true (default), returns `"#FFFFFF"` if the color cannot be resolved
 * @returns The resolved hex string, or `"#FFFFFF"` / `undefined` when unresolved
 */
export function getColor(
  color: ColorKey,
  returnDefault: boolean = true,
): HexColorString {
  let finalColor: string;

  if (color.includes("-")) {
    finalColor = KD_STYLE_COLORS[color];
  } else if (color.startsWith("#")) {
    finalColor = color;
  } else {
    finalColor = CSS_NAMED_COLORS[color as CSSNamedColor];
  }

  return (
    (finalColor as HexColorString) || (returnDefault ? "#FFFFFF" : undefined)
  );
}

/**
 * Returns a CSS custom property reference for a design-token color key.
 *
 * @param color - A design-token key (e.g. `"sky-500"`)
 * @returns A `var(--kd-style-<color>)` string
 */
export function getColorAsCssVar(color: ColorKey): string {
  return `var(--kd-style-${color})`;
}
