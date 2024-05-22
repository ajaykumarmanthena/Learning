import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
error;
stack;
constructor()
{
    super();
    console.log("Parent Constructor");
}
connectedCallback(){
    console.log("Parent Connected Callback");
}
renderedCallback(){
console.log("parent rendered call back")
}
disconnectedCallback(){
    console.log("Parent Disconnected Callback");
}
errorCallback(error,stack){
    console.log("parent errorcallback")
    this.error=error;
    this.stack=stack;
}

}