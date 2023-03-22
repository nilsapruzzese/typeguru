import { IsObjectLiteral } from "../types";

const isObjectLiteral: IsObjectLiteral = (value: unknown): boolean => {
    return (
        typeof value === "object" &&
            value !== null &&
            !Array.isArray(value) &&
            !(value instanceof Map) &&
            !(value instanceof Set) &&
            !(value instanceof RegExp) &&
            !(value instanceof Date)
   )
}

export default isObjectLiteral