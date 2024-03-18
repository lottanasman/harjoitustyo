export async function fetchTarotCards(numCards) {
  try {
    const response = await fetch(
      `https://tarotapi.dev/api/v1/cards/random?n=${numCards}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch tarot cards!');
    }
    const data = await response.json();
    return data.cards;
  } catch (error) {
    console.log('No tarot cards this time', error);
    throw error;
  }
}

export function getCardImage(nameShort) {
  return `images/${nameShort}.jpg`;
}
