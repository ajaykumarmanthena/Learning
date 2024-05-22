import { LightningElement, track } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    @track error;
    @track stack;
    @track isChildVisible = true;

    constructor() {
        super();
        console.log("Parent Constructor");
    }

    connectedCallback() {
        console.log("Parent Connected Callback");
    }

    renderedCallback() {
        console.log("parent rendered callback");
    }

    disconnectedCallback() {
        console.log("Parent Disconnected Callback");
    }

    errorCallback(error, stack) {
        console.log("parent error callback");
        this.error = error;
        this.stack = stack;
    }

    toggleChildVisibility() {
        this.isChildVisible = !this.isChildVisible;
    }
}
