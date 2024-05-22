import { LightningElement, wire } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import ajayKumar from '@salesforce/messageChannel/ajayKumar__c';

export default class SubscriberComponent extends LightningElement {
  svalue;
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
              this.svalue = message.value;
          });
      }
  }

  handleUnSubscribe() {
      unsubscribe(this.subscription);
      this.subscription = null;
  }
}