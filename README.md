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
Új szerzű felvétele a nyilvántartásba, ami a könyvek hozzáadását teszi lehetővé a regisztrált felhasználók számára. Ez egy űrlap kitöltésével történik, amiben megadjuk a szerző adatait: neve, nemzetisége, valamint életrajza (itt tetszőleges további információk lehetnek).

### Könyv felvétele
Meglévő szerző könyve rögzíthető az alkalmazással regisztrált felhasználók által, ami a könyv adatainak megadásával történik. Egy könyvnek több szerzője is lehet. Könyv adatai: szerző(k), cím, műfaj, megjelenés dátuma.

### Értékelés írása
Könyv kiválasztásával az adott könyvről szöveges értékelés írható. A szöveges értékelés egy pontszámmal is kiegészül. Ez a funkció regisztrált felhasználók számára érhető el.

## Entitások
> Az alkalmazás entitásai és a köztük lévő kapcsolatok, amelyek a [sématerven](#sématerv) is látszódnak.

### Értékelés
Egy értékelés egy könyvhöz kapcsolódik, egy könyvhöz azonban több értékelés is tartozhat. Értékelés alatt egy szöveges értékelés és egy pontszámot értünk, emellett rögzítjük az értékelés íróját(regisztrált felhasználó) és dátumát.

### Könyv
Egy könyvet jellemez a címe, műfaja és megjelenési dátuma. Szerzője több is lehet, és természetesen egy szerzőnek több könyve lehet, tehát köztük sok-sok kapcsolat áll fenn. Ennek megvalósítása kapcsolótáblával történik. Egy könyvhöz tetszőleges számú értékelés tartozhat.

### Szerző
Szerzőnek rögzítjük a nevét és nemzetiségét, további információk az ún. életrajz mezőben adhatóak meg. Szerzőhöz több könyv kapcsolódik, ez az előző pontban leírt sok-sok kapcsolat.

### Felhasználó
Az alkalmazás felhasználói 3 kategóriába sorolhatóak, jogosultságaikat [ábra](#felhasználói-szerepkörök) is szemlélteti.

#### Látogató
Az alkalmazás vendég látogatói a nem regisztrált felhasználók. Ők szabadon böngészhetik és megtekinthetik az oldalon elérhető tartalmat, azonban új tartalmat nem hozhatnak létre.

#### Regisztrált felhasználó
A regisztrált felhasználók a tartalom megtekintésén felül új tartalom létrehozására is jogosultak, legyen az szerző, könyv felvétele, vagy értékelés írása.

#### Admin
Az alkalmazás adminisztrátorai rendelkeznek értelemszerűen a legtöbb joggal. A tartalom módosításának és törlésének a joga az, ami megkülönbözteti őket a többi felhasználótól.

## Sématerv
![Az alkalmazáshoz tervezett sémák](images/schema_plan.png)

## Felhasználói szerepkörök
![Felhasználói szerepkörök](images/user_roles.png)

## Backend réteg

### Alkalmazott könyvtárstruktúra
![Alkalmazott könyvtárstruktúra](images/directory_structure.png)

- annotation: Saját készítésű annotációk.
- controller: Az alkalmazáshoz tartozó REST controllerek.
- model: Az alkalmazás entitásai.
- repository: Az adatbázisokat kezelő osztályok.
- service: Az alkalmazás üzleti logikáját tartalmazó osztályok.
- dto: Kliens és szerver közötti kommunikációt segítő osztályok. (Data Transfer Objects)
- exception: Kivételek.

### Végpontok
- book/
    - /{id}: adott könyv adatai
    - /books: könyvek listája
    - /searchBook: könyv keresése
    - /addBook: könyv készítése
    - /updateBook: könyv modosítása
    - /deleteBook/{id}: könyv törlése
- author/
	- /{id}: adott író adatai
	- /authors: írók listája
	- /searchAuthor/{searchTerm}: író keresése
	- /addAuthor: író készítése
	- /updateAuthor: író modosítása
	- /deleteAuthor/{id}: író törlése
- review/
	- /{bookId}: adott könyv értékelései
	- /addReview: értékelés készítése
	- /deleteReview/{id}: értékelés törlése
- auth/
	- /isLoggedIn: felhasználó adatai ha be van jelentkezve
	- /login: bejelentkező oldal
	- /register: regisztrációs oldal

## Felhasználói dokumentáció

### Ajánlott követelmények 
A program bármilyen operációs rendszeren futtatható.

### Telepítés 
#### Telepítés előtt pár szükséges lépés
  - npm amit itt lehet letölteni : [www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)
  - Internet elérés

#### Telepítés
1. Látogasson el a 	[github.com/ezkijez/book_cataloque](https://github.com/ezkijez/book_cataloque) oldalra
2. Itt kattintson a **"Clone and Download"** gombra, és azon belül kattintson a **"Download as Zip"** gombra.
3. A letöltött állományt csomagoljuk ki
4. **npm i** parancsot adjuk ki parancssorban a kicsomagolt állomány mappájában.
5. **npm start**-al elindíthatjuk a programot (Allapesetben localhost:8080-on fut a program)

### 6.3 Használata
1. Böngészőben a keresősávba írjuk be alapesetben: localhost:8080)
2. Regisztrálás és bejelentkezés után használhatjuk a programot.
