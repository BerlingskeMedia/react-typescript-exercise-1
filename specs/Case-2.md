# Case 2: Mid to Senior level dev specs

Please complete around 2 or more features (as per feature branches) within ~60-90 mins. 

We prefer engineering quality over quantity. We will ask you to explain your thought process behind decisions made.

You may skip an exercise if you´re stuck and unsure and move on to the next one.

## Feature branches

- `display-products`
- `product-filters`
- `filter-hook`
- `filter-config`

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

- Write tests for the `Product` component 

### Exercise 1.2: Style Products

Add Responsive Styling to Products so that the user is presented with: 
- 4 products per row for large width devices (laptops etc)
- 1 product per row on small width (mobile) devices

No testing necessary

## Exercise 2: Filter and sort products

Feature branch:  `product-filters`

The user should be able to apply multiple filters to narrow down
the products displayed.

### Exercise 2.1 : Filter by inStock availability

Add a filter to display only products where `inStock` is `true`

Write tests that confirm that no products out of stock are displayed. 

### Exercise 2.2 : Filter products by name

Add an `input` search box to allow filtering products by `name` matching (`includes` or regex).

Write tests to confirm that only products with matching name are displayed. 

### Exercise 2.2 : Ensure the filters can be combined

Write tests that confirm that the filters can be combined so that a user can filter on products that are available and match a given name.

## Exercise 3 : Custom filter hook

Feature branch:  `filter-hook`

Decouple presentation from state logic. Extract the filter logic in a custom hook. Test the hook separately.

## Exercise 4 : Configurable filters

Feature branch:  `filter-config`

How could you make the filters configurable from some sort of configuration file or system?

Use the file `src/config/filters.config.js` to configure which filters are enabled.

```js
export const filterConfig = {
    name: {
        enabled: true,
    },
    availability: {
        enabled: false,
    }
}
```

Write a test which confirms that a given filter configuration only displays and activates the filters enabled in the filter configuration. You may pass the config to the app component or otherwise make it available for injection to make it easier to test.

