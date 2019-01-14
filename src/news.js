// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=ng&apiKey=46d61f315c1d48de8138b80ab619ef54";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
