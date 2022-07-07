export async function getCategories() {
  const url = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=$MLB5672');
  const categories = JSON.parse(url);
  console.log(categories);
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
