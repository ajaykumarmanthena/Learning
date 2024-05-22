import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import ajayKumar from '@salesforce/messageChannel/ajayKumar__c';

export default class PublisherComponent extends LightningElement {
    fname;
    lname;
    @wire(MessageContext)
    messageContext;

    handleChange(event) {//fname
        const name=event.target.name;
        const value=event.target.value;
        if(name=='fname'){
        this.fname = value;
        }
        if(name=='lname'){
            this.lname = value;
            }
    }

    handleClick(event) {
        publish(this.messageContext, ajayKumar, { first: this.fname,last:this.lname });
    }
}