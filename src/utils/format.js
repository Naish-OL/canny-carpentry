const priceFormatter = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR'
})

// The API returns NUMERIC columns as strings, so coerce before formatting
export const formatPrice = (price) => priceFormatter.format(Number(price))
