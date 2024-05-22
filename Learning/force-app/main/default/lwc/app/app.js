import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track isParentVisible = true;

    toggleParentVisibility() {
        this.isParentVisible = !this.isParentVisible;
    }
}
