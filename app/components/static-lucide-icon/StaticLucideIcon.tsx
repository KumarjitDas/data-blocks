import { memo, forwardRef } from "react";
import { icons } from "lucide-react";

import type { LucideIconName } from "@/types/Icons";
import type { StaticLucideIconProps } from "./types";
import { getColor } from "@/lib/utils";

import "./StaticLucideIcon.css";

/**
 * A memoized, ref-forwarded wrapper around Lucide React icons.
 * Converts a kebab-case icon name to the corresponding PascalCase Lucide component at render time.
 * Returns `null` if the icon name does not match any Lucide icon.
 *
 * @param props - Component props
 * @param props.theme - Color theme; "default" and "light" both apply the light theme
 * @param props.name - Kebab-case Lucide icon name (e.g., "arrow-right"); default: "SquareDot"
 * @param props.size - Icon size; named sizes map to rem values (xs→0.75rem … xxxl→3.5rem)
 * @param props.color - Stroke color; hex values used directly, tokens with "-" resolve to CSS vars
 * @param props.weight - Stroke weight mapped to a numeric strokeWidth (0.5–3); "normal" → 2
 * @param props.disabled - Adds `data-disabled` attribute; activates `disabledColor` when set
 * @param props.disabledColor - Color override used when `disabled` is true
 * @param props.className - Additional CSS class names to merge
 * @param ref - Forwarded ref to the underlying SVG element
 * @returns The matching Lucide icon SVG element, or `null` if the name is unresolved
 */
export const StaticLucideIcon = memo(
  forwardRef<SVGSVGElement, StaticLucideIconProps>(
    (
      {
        theme = "default",
        name = "SquareDot",
        size = "default",
        color,
        weight = "normal",
        disabled = false,
        disabledColor,
        className = "",
        ...props
      },
      ref,
    ) => {
      const finalTheme = theme === "default" || theme === "light" ? "" : theme;

      const lucideIconName = name
        ? (name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("") as LucideIconName)
        : null;

      let resolvedSize: number | string = size;

      if (typeof size === "string") {
        switch (size) {
          case "xs":
            resolvedSize = "0.75rem";
            break;

          case "sm":
            resolvedSize = "1rem";
            break;

          case "default":
          case "md":
            resolvedSize = "1.5rem";
            break;

          case "lg":
            resolvedSize = "2rem";
            break;

          case "xl":
            resolvedSize = "2.5rem";
            break;

          case "xxl":
            resolvedSize = "3rem";
            break;

          case "xxxl":
            resolvedSize = "3.5rem";
            break;
        }
      }

      let resolvedColor: string | undefined = undefined;

      if (disabled && disabledColor !== undefined) {
        if (typeof disabledColor === "string") {
          if (disabledColor.startsWith("#")) {
            resolvedColor = disabledColor;
          } else {
            resolvedColor = getColor(disabledColor, false);
          }
        } else if (typeof disabledColor === "object") {
          const _dc =
            finalTheme === "dark" ? disabledColor.dark : disabledColor.light;

          if (_dc) {
            resolvedColor = _dc.startsWith("#") ? _dc : getColor(_dc, false);
          }
        }
      } else if (color !== undefined) {
        if (typeof color === "string") {
          if (color.startsWith("#")) {
            resolvedColor = color;
          } else {
            resolvedColor = getColor(color, false);
          }
        } else if (typeof color === "object") {
          const _color = finalTheme === "dark" ? color.dark : color.light;

          if (_color) {
            resolvedColor = _color.startsWith("#")
              ? _color
              : getColor(_color, false);
          }
        }
      }

      let resolvedWeight: number = 1;

      switch (weight) {
        case "100":
        case "lighter":
          resolvedWeight = 0.5;
          break;

        case "200":
          resolvedWeight = 0.75;
          break;

        case "300":
        case "light":
          resolvedWeight = 1;
          break;

        case "400":
          resolvedWeight = 1.5;
          break;

        case "500":
        case "normal":
          resolvedWeight = 2;
          break;

        case "600":
          resolvedWeight = 2.25;
          break;

        case "700":
        case "bold":
          resolvedWeight = 2.5;
          break;

        case "800":
          resolvedWeight = 2.75;
          break;

        case "900":
        case "bolder":
          resolvedWeight = 3;
          break;
      }

      const IconComponent = lucideIconName ? icons[lucideIconName] : null;

      return IconComponent ? (
        <IconComponent
          ref={ref}
          size={resolvedSize}
          color={resolvedColor}
          strokeWidth={resolvedWeight}
          data-disabled={disabled ? "true" : undefined}
          opacity={""}
          className={className + " kd-static-lucide-icon"}
          {...props}
        />
      ) : null;
    },
  ),
);

StaticLucideIcon.displayName = "StaticLucideIcon";
