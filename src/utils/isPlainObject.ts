import { IsPlainObject } from "../types";

const isPlainObject: IsPlainObject = (value) => {
    return (
        typeof value === "object" &&
        value !== null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === "[object Object]"
    );
}

export default isPlainObject