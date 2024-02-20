import { Hct, QuantizerCelebi, Score, argbFromRgb } from "@material/material-color-utilities";
import { createDynamicScheme, createJsonFromSerializedScheme, serializeScheme } from "./scheme";
import { generateGTKScheme } from "./plugins/gtk";


async function extract(path: string | URL) {
    const file = Bun.file("src/babie_lato.jpg")
    const imageBytes = new Uint8Array(await file.arrayBuffer())

    const pixels = []

    for (let i = 0; i < imageBytes.length; i += 4) {
        const r = imageBytes[i];
        const g = imageBytes[i + 1];
        const b = imageBytes[i + 2];
        const a = imageBytes[i + 3];
        if (a < 255) {
            continue;
        }
        const argb = argbFromRgb(r, g, b);
        pixels.push(argb);
    }

    // Convert Pixels to Material Colors
    const result = QuantizerCelebi.quantize(pixels, 512);
    const ranked = Score.score(result);
    const top = ranked[0];
    return top;
}

const schemes = createDynamicScheme("tonal_spot", Hct.fromInt(0x454545), 0)
const light = serializeScheme(schemes.light)
const dark = serializeScheme(schemes.dark)


await createJsonFromSerializedScheme("light", light)
await generateGTKScheme("light", light)





