import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/modules/Cart';
import { CartItem } from '../shared/modules/CartItem';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  imports: [RouterModule, CommonModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

  cart!:Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
