import { Component, EventEmitter, Output } from "@angular/core";



@Component({
    templateUrl: './header.component.html',
    selector: 'app-header'
})
export class HeaderComponent
{
 @Output() pageChoosen: EventEmitter<String> = new EventEmitter();

onRecipeClicked(): void{
this.pageChoosen.emit('Recipe');
}

onShoppingClicked(): void{
    this.pageChoosen.emit('Shopping');
}



}