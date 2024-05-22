import { LightningElement, wire } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import ajayKumar from '@salesforce/messageChannel/ajayKumar__c';

export default class SubscriberComponent extends LightningElement {
    fname;
    lname
  subscription = null;

  @wire(MessageContext)
  messageContext;

  connectedCallback() {
      this.handleSubscribe();
  }

  disconnectedCallback() {
      this.handleUnSubscribe();
  }

  handleSubscribe() {
      if (!this.subscription) {
          this.subscription = subscribe(this.messageContext, ajayKumar, (message) => {
              this.lname = message.last;
              this.fname = message.first;
          });
      }
  }

  handleUnSubscribe() {
      unsubscribe(this.subscription);
      this.subscription = null;
  }
}