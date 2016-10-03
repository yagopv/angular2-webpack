import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable()
export class NumbersService {
    numbers: Subject<any> = new BehaviorSubject<any>(0);

    constructor() { }
    
    setRandomNumber(number: number) { 
        this.numbers.next(number);        
    }
}