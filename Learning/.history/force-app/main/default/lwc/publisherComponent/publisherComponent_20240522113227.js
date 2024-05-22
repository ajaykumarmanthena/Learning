import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import ajayKumar from '@salesforce/messageChannel/ajayKumar__c';

export default class PublisherComponent extends LightningElement {
    pvalue;

    @wire(MessageContext)
    messageContext;

    handleChange(event) {
        this.pvalue = event.target.name;
    }

    handleClick(event) {
        publish(this.messageContext, ajayKumar, { value: this.pvalue });
    }
}