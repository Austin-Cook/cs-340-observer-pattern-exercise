export interface Observer {
    update: () => void;
}

export abstract class Subject {
    observers: Observer[] = [];

    attach(observer: Observer) {
        this.observers.push(observer);
    }

    notify() {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update();
        }
    }
}
