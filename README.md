# react-ts-gctfmx

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-gctfmx)

### Info

- Tasks can be done in `product-service.dojo-to-do.ts` file.
- Answers (finished implementation) are located in `product-service.finished-example.ts`
- In `product-service.ts` comment first line and uncomment second to see if your changes work.


### Coding Tasks


#### Create class called ProductService that implements IProductService interface and export it by default


`example class implementing IFoo interface`
``` typescript
class Foo implements IFoo {

}
```

Class was introduced in ES6 and it's a syntactic sugar on top of prototype-based inheritance.

`exporting object from file by default`
``` typescript 
export default Foo

export default class Foo ...
```

Exporting by default means we can import this object in other files this way `import Foo from './foo'`
There can be only one object exported by default from file, to export more than one object you need to use `export Foo2` syntax. 
Later you can import it in other files this way `import { Foo2 } from './foo'`


#### Create private fields - cart which is of type Cart, products (Product type) list and initialize these fields in constructor 

- use `generateProductList()` method to initialize `_products` field

`example of private class field with type assigned`
``` typescript
private _foo: Foo;
```

Class fields are by default public and mutable, you can use `readonly` to prevent changing reference to value.

ES2019 introduced concept of private in javascript.
`Example syntax`
``` javascript
#foo // # - means it's private 
```

`private` vs `#`

Typescript is superset of javascript which has to be transpiled to javascript before running in browser.
When you try accessing `private` variable ts compiler will throw error during compile time.
`#` makes sure there is runtime privacy.

`example of constructor`
``` typescript
constructor() {
  this._foo = [];
  this._foo2 = {};
}

```

There can be only one constructor in ES6/Typescript class.
If you are used to other OO languages where you can do this:
``` typescript
constructor(foo: Foo) {
  this.foo = foo;
  this.foo2 = {};
}

constructor(foo: Foo, foo2: Foo2) {
  this.foo = foo;
  this.foo2 = foo2;
}
```
 You might want to create static factory methods for such cases.


 #### Create getters for _cart and _products fields

 `example of getters`
 ``` typescript
get Foo(): Foo
 ```

 Getters and Setters in typescript in syntax are similar to C# accessors (Typescript was created by lead architect of C# Anders Hejlsberg)

 `accesing getters`
``` typescript 
const foo: Foo = awesomeClass.Foo;
```

#### Implement singleton pattern for ProductService class using static getter factory method

`static` keyword allows implementing functions / fields that belong to class and not object itself

`example usage`
``` typescript 
class Foo {
  static foo(): void 
}

Foo.foo()
```


#### Create private method that finds Variant in _products list


`method signature`
``` typescript
findVariant: (productId: string, variantId: string) => Variant 
```
- Search Products list for element matching productId.
- If there is no element matching productId throw error.
- Search in this Product element for Variant matching variantId.
- If there is no element matching variantId throw error.
- Return found variant.

`example of finding element in array using find function and predicate`
``` typescript

type Point = { x: number; y: number}

const points: Point[] = ...

const foundPoint: Point | undefined = points.find(({x, y}) => x === 5)

```

#### Create method that adds variant of product to cart and recalculates subtotal, total prices

Use previously implemented findVariant method to get variant.

`method signature`
``` typescript 
addVariantToCart: (productId: string, variantId: string, quantity: number) => void;
```

- Find variant.
- Create copy of line items from cart object and append it with new line item consisting of variant and quantity.
- Create copy of subtotal price (price for all variant added to cart * their quantity) and add price of variant * it's quantity.
- Calculate total price including shipping price.
- Create copy of cart and assign it to `this._cart` field. 

`Example of using spread operator to create copy of array and appending with new element`
``` typescript
const foo: Foo[] = [...oldFoo, {someField: 1}];
```

`Example of using spread operator to create copy of object and replacing field value`
``` typescript

type Foo = {x: number, y: number};
const foo1: Foo = {x: 1, y: 1}; 

const foo2: Foo = {...foo1, y: 4};
```

#### Create method that removes line item from cart and recalculates prices

`method signature`
``` typescript 
  removeLineItemFromCart: (variantId: string) => void;
```

- Find line item with provided variantId
- Create copy of line items from cart and remove line item with provided variantId
- Create copy of subtotal price from cart object and subtract variant price multiplied by it's quantity
- Create copy of total price and calculate amount by adding new subtotal price and shipping price
- Assign new copy of cart to cart object with objects created in above steps


`Using filter method to create new array with values mathing predicate`
``` typescript

type Point = { x: number; y: number}

const points: Point[] = ...

const pointsWithXLargerThan5 = points.filter(({x, y}) => x > 5);
```