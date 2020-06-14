import { Injectable } from "@angular/core";

@Injectable()
export class FruitsService{
    fruits = [
        {
            name: "Apple",
            id: 1
        },
        {
            name: "Orange",
            id: 2
        },
        {
            name: "Grapes",
            id: 3
        },
        {
            name: "Banana",
            id: 4
        }
    ]
}