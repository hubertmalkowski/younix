export const pairs = [
    ["primary", "onPrimary"],
    ["primaryContainer", "onPrimaryContainer"],
    ["secondary", "onSecondary"],
    ["secondaryContainer", "onSecondaryContainer"],
    ["tertiary", "onTertiary"],
    ["tertiaryContainer", "onTertiaryContainer"],
    ["background", "onBackground"],
    ["surface", "onSurface"],
    ["inverseSurface", "inverseOnSurface"],
    ["surfaceVariant", "onSurfaceVariant"],
    ["error", "onError"],
    ["errorContainer", "onErrorContainer"],
];

export const colors: Color[] = [
    "primary",
    "onPrimary",
    "primaryContainer",
    "onPrimaryContainer",
    "inversePrimary",
    "secondary",
    "onSecondary",
    "secondaryContainer",
    "onSecondaryContainer",
    "tertiary",
    "onTertiary",
    "tertiaryContainer",
    "onTertiaryContainer",
    "error",
    "onError",
    "errorContainer",
    "onErrorContainer",
    "background",
    "onBackground",
    "surface",
    "onSurface",
    "surfaceVariant",
    "onSurfaceVariant",
    "inverseSurface",
    "inverseOnSurface",
    "outline",
    "outlineVariant",
    "shadow",
    "scrim",
    "surfaceDim",
    "surfaceBright",
    "surfaceContainerLowest",
    "surfaceContainerLow",
    "surfaceContainer",
    "surfaceContainerHigh",
    "surfaceContainerHighest",
    "surfaceTint",
];

export type Color =
    | "primary"
    | "onPrimary"
    | "primaryContainer"
    | "onPrimaryContainer"
    | "inversePrimary"
    | "secondary"
    | "onSecondary"
    | "secondaryContainer"
    | "onSecondaryContainer"
    | "tertiary"
    | "onTertiary"
    | "tertiaryContainer"
    | "onTertiaryContainer"
    | "error"
    | "onError"
    | "errorContainer"
    | "onErrorContainer"
    | "background"
    | "onBackground"
    | "surface"
    | "onSurface"
    | "surfaceVariant"
    | "onSurfaceVariant"
    | "inverseSurface"
    | "inverseOnSurface"
    | "outline"
    | "outlineVariant"
    | "shadow"
    | "scrim"
    | "surfaceDim"
    | "surfaceBright"
    | "surfaceContainerLowest"
    | "surfaceContainerLow"
    | "surfaceContainer"
    | "surfaceContainerHigh"
    | "surfaceContainerHighest"
    | "surfaceTint";
export type SerializedScheme = Record<Color, string>;
