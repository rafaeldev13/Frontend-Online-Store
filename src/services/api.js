export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await response.json();
  return responseJson;
}

export async function getProductsFromCategory(categoryId) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const responseJson = await response.json();
  return responseJson;
}

export async function getProductsById(Id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${Id}`);
  const responseJson = await response.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const responseJson = await response.json();
  return responseJson;
}
