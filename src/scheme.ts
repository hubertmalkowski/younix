import {
    SchemeTonalSpot,
    SchemeContent,
    SchemeFidelity,
    SchemeVibrant,
    SchemeExpressive,
    SchemeNeutral,
    SchemeMonochrome,
    MaterialDynamicColors,
    DynamicScheme,
    Hct,
    hexFromArgb,
} from "@material/material-color-utilities";
import { SerializedScheme, colors } from "./colors";

export const schemes = {
    tonal_spot: SchemeTonalSpot,
    content: SchemeContent,
    fidelity: SchemeFidelity,
    vibrant: SchemeVibrant,
    expressive: SchemeExpressive,
    neutral: SchemeNeutral,
    monochrome: SchemeMonochrome,
};

export function serializeScheme(scheme: DynamicScheme) {
    const out: Record<string, string> = {};
    for (const color of colors) {
        out[color] = hexFromArgb(MaterialDynamicColors[color].getArgb(scheme));

    }
    return out as SerializedScheme;
};

export function createDynamicScheme(scheme: keyof typeof schemes, sourceColor: Hct, contrastLevel: number) {

    const algorithm = schemes[scheme]
    const dynamicLightTheme = new algorithm(sourceColor, false, contrastLevel)
    const dynamicDarkTheme = new algorithm(sourceColor, true, contrastLevel)

    return {
        light: dynamicLightTheme,
        dark: dynamicDarkTheme
    }
}

export async function createJsonFromSerializedScheme(name: string, scheme: SerializedScheme) {
    Bun.write(`${name}.json`, JSON.stringify(scheme))
}


