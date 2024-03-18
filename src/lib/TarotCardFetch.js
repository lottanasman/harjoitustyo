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

//uusi haku koska yllä olevassa haetaan randomisti ja halusin että listaus on järjestyksessä
export async function fetchTarot() {
  try {
    const response = await fetch(`https://tarotapi.dev/api/v1/cards/`);

    if (!response.ok) {
      throw new Error('Failed to fetch tarot cards');
    }

    const data = await response.json();
    return data.cards;
  } catch (error) {
    console.error('Error fetching tarot cards:', error);
    throw error;
  }
}
