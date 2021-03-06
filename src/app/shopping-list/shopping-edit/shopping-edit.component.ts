import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameRef', { static: false }) ingredientNameRef: ElementRef;
  @ViewChild('amountRef', { static: false }) ingredientAmountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddIngredient() {
    const newIngName = this.ingredientNameRef.nativeElement.value;
    const newIngAmount = this.ingredientAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(newIngName, newIngAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
