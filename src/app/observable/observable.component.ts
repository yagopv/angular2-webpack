import { Component } from '@angular/core';
import {NumbersService} from './numbers.service.ts';
import {Subscription} from 'rxjs';

@Component({
    selector: 'aw-observable',
    templateUrl: 'observable.component.html'
})
export class ObservableComponent {
    subscriptions: Subscription[] = [];

    constructor(public numbersService: NumbersService) { }

    generateRandomNumber() {
        this.numbersService.setRandomNumber(Math.floor(
            Math.random() * (1000)));
        
        return false;
    }

    newSubscription() {
        let subscription = this.numbersService.numbers.subscribe(
            (number) => console.log(number),
            (error) => console.log(error),
            () => console.log('completed')
        ) 

        this.subscriptions.push(subscription);

        return false;
    }
}