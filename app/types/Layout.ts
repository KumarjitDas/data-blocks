/** Layout orientation without an explicit default token (e.g. spinner/icon relative to label). */
export type Orientation = "horizontal" | "vertical";

/** Layout orientation with an explicit default token. "default" maps to "horizontal" at render time. */
export type OrientationWithDefault = "default" | "horizontal" | "vertical";

/** Relative position of a decorative element (icon or spinner) within a compound component. */
export type ElementPosition = "start" | "end";

/** Font or stroke weight token. Numeric values correspond to the CSS font-weight scale. */
export type FontWeight =
    | "lighter"
    | "light"
    | "normal"
    | "bold"
    | "bolder"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
