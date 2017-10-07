# Book catalogue
> Könyv nyilvántartó és értékelő alkalmazás

## Tervezett funkciók
- Szerző felvétele a rendszerbe
- Könyv felvétele a rendszerbe nyilvántartott szerzőtől
- Értékelés írása nyilvántartott könyvről
- Szerzők keresése és szűrése
- Könyvek keresése és szűrése
- Tartalom módosítása/törlése admin által

### Szerzők, könyvek és értékeléseik megtekintése
Az alkalmazásban elérhető tartalom, amit a regisztrált felhasználók hoznak létre, mindenki számára elérhető. Tartalom alatt értjük a szerzőket, a könyveket, és a könyvekhez tartozó értékeléseket. A szerzők és a könyvek kereséssel szűrhetőek. Egy szerzőt kiválasztva látható az adatai, valamint a könyvei. Egy könyvet kiválasztva megjelennek a hozzá kapcsolódó információk, valamint az értékelései.

### Szerző felvétele
Új szerzű felvétele a nyilvántartásba, ami a könyvek hozzáadását teszi lehetővé. Ez egy űrlap kitöltésével történik, amiben megadjuk a szerző adatait: neve, nemzetisége, valamint életrajza (itt tetszőleges további információk lehetnek).

### Könyv felvétele
Meglévő szerző könyve rögzíthető az alkalmazással, ami könyv adatainak megadásával történik. Egy könyvnek több szerzője is lehet. Könyv adatai: szerző(k), cím, műfaj, megjelenés dátuma.

### Értékelés írása
Könyv kiválasztásával az adott könyvről szöveges értékelés írható. A szöveges értékelés egy pontszámmal is kiegészül.

## Sématerv
![Az alkalmazáshoz tervezett sémák](images/schema_plan.png)

## Felhasználói szerepkörök
![Felhasználói szerepkörök](images/user_roles.png)
