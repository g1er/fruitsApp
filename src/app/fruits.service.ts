import { Injectable } from "@angular/core";

@Injectable()
export class FruitsService{
    fruits = [
        {
            name: "Apple",
            id: 1,
            color: "green",
            size: "medium"
        },
        {
            name: "Orange",
            id: 2,
            color: "orange",
            size: "big"
        },
        {
            name: "Grapes",
            id: 3,
            color: "violet",
            size: "small"
        },
        {
            name: "Banana",
            id: 4,
            color: "yellow",
            size: "medium"
        }
    ]
}