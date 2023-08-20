export default async function getAllFish() {
  const url = `https://fish-species.p.rapidapi.com/fish_api/fishes`;

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '780991b9d1mshadf331fe55de633p192346jsnc27d771562d6',
        'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
      }
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}