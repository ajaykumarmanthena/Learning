import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    name=""
    handleEvent(event){
        //this.name = event.detail.name;
this.name=event.detail;
    }
}