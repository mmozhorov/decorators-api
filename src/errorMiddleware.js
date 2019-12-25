export const ErrorMiddleware = (target, key, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args) {
        try {
            return await originalMethod.apply(this, args);
        } catch (error) {
            console.error(error);
        }
    };
    return descriptor;
};
