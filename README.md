# Tekijä

Lotta Näsman, AE3398

# Harjoitustyön nimi

Tarot Reader

# Kuvaus

## Idea

Ajatus lähti siitä, kun oma äitini on aina on ollut kiinnostunut tarot korteista, joten tämä sovellus on "omistettu" hänelle! Sovellusta voi käyttää ihan huvikseen tai jos oikeasti kortit kiinnostaa/niistä jotain tietää.

## Toiminnallisuus

Sovelluksen toiminta perustuu siihen, että käyttäjä voi "nostaa" tietyn määrän kortteja (maksimissaan 10 korttia). Kortit nostetaan APIsta satunnaisesti. Kortista annetaan pieni sepustus ja jos korteista haluaa enemmän tietoa, voi käydä painamassa nappia joka näyttää kaikki kortit ja niiden tiedot (nämäkin kaikki APIsta).

### Kehitysideat

Haluaisin lisätä komponentin, jossa voi lisätä omia muistiinpanoja korteista. Korttien selauksessa on pieni ärsytyksen aihe; kortteja selatessa "näkymä" pysyy alhaalla eikä hyppää takaisin ylös missä näkyy kortin kuva ja otsikko. Yritin kaikenmoisia "scroll-to-the-top" tyyppisiä ratkaisuja mutta en saanut toimimaan. Samaten myös jos olet juuri selannut kortteja, suljet ikkunan ja avaat sen uudestaan, niin valinta ei ole nollaantunut.

# Ulkoiset materiaalit

Harjoitustyössä käytetty ulkoista datalähdettä tarot korttien tietojen noutamiseen. Linkki APIiin: https://github.com/ekelen/tarot-api

Tarot korttipakan kuvat on ladattu Wikimediasta. Kyseessä Rider Waite 1909 korttipakka, joka on public domainia: https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot

Taustakuva ladattu Pexels sivustolta ja svg on ladattu täältä: https://www.svgrepo.com/svg/474458/star-track

# Tekoäly

Tässä harjoitustyössä on käytetty tekoälyä. Olen mahdollisimman selkeästi merkannut kohdat joissa on tekoälyn tekemää koodia. Mikään tekoälyn luoma koodi ei ole ns. tuulesta temmattu, minulla on yleensä ollut jokin oma koodi jota olen pyytänyt tekoölyä muokkaamaan. Käytin ChatGPT:tä. Kaikki, missä ei toisin lue, on omaa koodia. Olen ottanut mallia kurssin aiemmista tehtävistä ja kurssimateriaaleista.
