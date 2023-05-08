export function PromoBanner({promo}) {
  return (
    <div className="promo-banner">
      {promo ? promo : 'Welcome to Shopify Hydrogen'}
    </div>
  );
}
