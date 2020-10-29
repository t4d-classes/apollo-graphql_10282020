# Exercise 4

1. Create a form to collect information for a new book. If you would like, please use the following code for the form JSX.

```jsx
<form>
  <div>
    <label htmlFor="book-title-input">Title:</label>
    <input
      type="text"
      id="book-title-input"
      name="title"
      value={bookForm.title}
      onChange={change}
    />
  </div>
  <div>
    <label htmlFor="book-isbn-input">ISBN:</label>
    <input
      type="text"
      id="book-isbn-input"
      name="isbn"
      value={bookForm.isbn}
      onChange={change}
    />
  </div>
  <div>
    <label htmlFor="book-authorid-input">Authors:</label>
    <select
      id="book-authorid-input"
      name="authorId"
      value={bookForm.authorId}
      onChange={change}
    >
      <option value="-1">Select One...</option>
      {authors.map((a) => (
        <option key={a.value} value={a.value}>
          {a.label}
        </option>
      ))}
    </select>
  </div>
  <div>
    <label htmlFor="book-category-input">Category:</label>
    <input
      type="text"
      id="book-category-input"
      name="category"
      value={bookForm.category}
      onChange={change}
    />
  </div>
  <div>
    <label htmlFor="book-price-input">Price:</label>
    <input
      type="number"
      id="book-price-input"
      name="price"
      value={bookForm.price}
      onChange={change}
    />
  </div>
  <div>
    <label htmlFor="book-quantity-input">Quantity:</label>
    <input
      type="number"
      id="book-quantity-input"
      name="quantity"
      value={bookForm.quantity}
      onChange={change}
    />
  </div>
  <button type="button" onClick={submitBook}>
    {props.buttonText}
  </button>
</form>
```

2. Save the collected form data to the GraphQL server using a mutation.

3. Ensure it works!

