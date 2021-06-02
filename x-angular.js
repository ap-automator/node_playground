async addToCart(product){
  let cartId= await this.getOrCreateCartId();
  let item$=  this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
  item$.valueChanges().pipe(take(1)).subscribe((item:any) => {
    if(item!=null) {
      item$.set({product: product.payload.val(), quantity: item.quantity + 1})
    }
    else item$.set({product: product.payload.val(), quantity: 1});
  });
}
