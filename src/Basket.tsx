export const Basket = ({ basket }: any) => {
  if (!basket) {
    return <div>Empty basket</div>;
  }
  // display products in basket here
  // - name
  // - price
  return <section id="basket">
    <ul></ul>
    <div>Total</div>
  </section>
};
