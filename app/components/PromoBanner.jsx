export function PromoBanner({promo}) {
  return (
    <div className="promo-banner">
      {/* {promo?.value ? promo.value : 'Welcome to Shopify Hydrogren'} */}
      {promo ? promo : 'Welcome to Shopify Hydrogen'}
    </div>
  );
}
