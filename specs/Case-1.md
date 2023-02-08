# Case 1: Junior to Mid level dev specs

Please complete around 2 or more exercises within ~60 mins. 

We prefer engineering quality over quantity. We will ask you to explain your thought process behind decisions made.

You may skip an exercise if you´re stuck and unsure and move on to the next one.

## Feature branches

- `responsive-products`
- `product-filters`
- `shopping-basket`
- `filter-hook`

## Exercise 1: Load and display products

Feature branch:  `display-products`

Use the hooks `useEffect` and `useState` to load products and display them in a list
For now simply display the `name` of each product

### Exercise 1.1: Product component

Create a separate `Product` component that you use to display each product.

Display the following product properties

- Name: `Sofa`
- Description
- Availability: `Available` or `Unavailable`
- Price: `$ 5.00`

To display the html of `description` you may use [dangerouslysetinnerhtml](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

- Write tests for the `Product` component or do manual testing 

### Exercise 1.2: Responsive Products

Add Responsive Styling to Products so that the user is presented with: 
- 4 products per row for large width devices (laptops etc)
- 1 product per row on small width (mobile) devices

## Exercise 2: Filter and sort products

Feature branch: `product-filters`

The user should be able to apply multiple filters to narrow down
the products displayed.

### Exercise 2.1 : Filter by inStock availability

Add a filter to display only products where `inStock` is `true`

Write a test that confirms that no products out of stock are displayed. 

### Exercise 2.2 : Sort by price

Add functionality to ensure filtered products are always sorted by price (cheapest first).

### Exercise 2.3 : Filter products by name

Add an `input` search box to allow filtering products by `name` matching (`includes` or regex).

### Exercise 2.4 : Ensure the filters can be combined

Write tests that confirm that two or more filters can be combined. Test that a user can simultaneously filter on products that are available and that match a given name.

## Exercise 3 : Shopping basket

Feature branch: `shopping-basket`

Let the user select filtered products which are added to a shopping basket. 
You may do this by adding a `Buy` button to the `Product` component.

Display the products in a shopping basket

- Name
- Price

Display total price of the basket under the basket items

Write tests which:
- adds two items to the shopping basket
- verifies the products added are displayed in the basket
- verifies the total basket price

## Exercise 4 : Custom filter hook

Feature branch: `filter-hook`

Decouple presentation from state logic. Extract the filter logic in a custom hook. Test the hook separately.

