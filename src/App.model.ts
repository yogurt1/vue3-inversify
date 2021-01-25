import { injectable } from "inversify";
import { Vue } from "vue-class-component";
import { Ref } from "./decorators";

@injectable()
export class AppModel {
    @Ref counter = 0
    
    increment() {
        this.counter += 1
    }

    decrement() {
        this.counter -= 1
    }
}