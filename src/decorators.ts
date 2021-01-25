import { interfaces } from "inversify";
import { ref } from "vue";
import { createDecorator } from "vue-class-component";
import { container } from "./inversify.config";

export const Ref: PropertyDecorator = (target, property) => {
    const initialValue = (target as any)[property]
    const valueRef = ref(initialValue)

    Object.defineProperty(target, property, {
        get() {
            return valueRef.value
        },
        set(newValue) {
            return valueRef.value = newValue
        }
    })
}

export const Inject = <T>(ctor: interfaces.Newable<T>) => createDecorator((options, key) => {
    options.computed = {
        ...options.computed,
        [key]() {
            return container.resolve(ctor)
        }
    }
})