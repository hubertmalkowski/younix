import { Color, SerializedScheme } from "../colors";


export async function generateGTKScheme(name: string, scheme: SerializedScheme) {
    let result = ""
    Object.entries(scheme).forEach(([token, value]) => {
        result += `@define-color ${token} ${value};\n`
    })

    await Bun.write(`${name}.css`, result)
}
