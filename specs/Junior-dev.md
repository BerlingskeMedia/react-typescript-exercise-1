# Junior dev specs

See how many of the exercises you can complete in the time alloted. 
Prefer quality over quantity and explain your thought process and engineering mindset behind decisions.
You may skip an exercise if you´re stuck and unsure and move on to the next one.

## Exercise 1: Load and display products

Use the hooks `useEffect` and `useState` to load products and display them in a list
For now simply display the `name` of each product

## Exercise 1.1: Product component

Create a separate `Product` component that you use to display each product.

Display the following product properties

- Name: `Sofa`
- Description
- Availability: `Available` or `Unavailable`
- Price: `$ 5.00`

To display the html of `description` you may use [dangerouslysetinnerhtml](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

- Write tests for the `Product` component or do manual testing 

## Exercise 1.2: Style Products

Add Responsive Styling to Products so that you:
- display 4 or more products per row for large devices
- 2 for medium (tablet) devices
- 1 for small (phone) devices

## Exercise 2: Filter and sort products

The user should be able to apply multiple filters to narrow down
the products displayed.

### Exercise 2.1 : Filter by inStock availability

Add a filter to display only products where `inStock` is `true`

Write a test that confirms that no products out of stock are displayed. 

### Exercise 2.3 : Sort by price

Add functionality to ensure filtered products are always sorted by price (cheapest first).

### Exercise 2.4 : Filter products by name

Add an `input` search box to allow filtering products by `name` matching (`includes` or regex).

## Exercise 3 : Shopping basket

Let user select filtered products which are added to shopping basket. 
You may do this by adding a `Buy` button to the `Product` component.

Display the products in shopping basket

- Name
- Price

Display total price of basket under the basket items

Write a test which:
- adds two items to the shopping basket
- verifies the products are displayed in the basket
- verifies the total basket price

