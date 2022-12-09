export const Products = ({ products }: any) => {
  if (!products) {
    return <div>No products</div>;
  }
  // display products here
  // - name
  // - description
  // - availability
  // - price
  return <section id="products">
    <ul></ul>
  </section>;
};
