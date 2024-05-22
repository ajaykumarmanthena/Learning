import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    error;
stack;
constructor()
{
    super();
    console.log("Child Constructor");
}
connectedCallback(){
    console.log("child Connected Callback");
}
renderedCallback(){
console.log("child rendered call back")
}
disconnectedCallback(){
    console.log("child Disconnected Callback");
}
errorCallback(error,stack){
    console.log("child errorcallback")
    this.error=error;
    this.stack=stack;
}

}