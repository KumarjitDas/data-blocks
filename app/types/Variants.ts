/** Color theme shared across all components. "default" and "light" both apply the light theme. */
export type Theme = "default" | "light" | "dark";

/** Visual style variant for interactive components (Button, Alert, Toggle). */
export type ComponentVariant = "default" | "outline" | "ghost" | "destructive" | "secondary";

/** Named size tokens shared across components. "default" maps to "md" at render time. */
export type NamedSize = "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
