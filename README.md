Baigiamasis projektas

Šio projekto metu reikės sukurti internetinį forumą naudojant React, NodeJS Express ir MongoDB arba MySQL. Forumo tikslas - leisti užduoti klausimus, į juos atsakinėti bei žymėti patinkančius arba nepatinkančius atsakymus. Galite įsivaizduoti kažką panašaus į https://stackoverflow.com/questions, tik jums rekės padaryt supaprastintą versiją.

Funkcionalumas:

## Autentikacija

- [x] Registruotis
- [x] Prisijungti

## Klausimai

- [x] Peržiūrėti klausimų sąrašą.
- [x] Užduoti naują klausimą (tik prisijungus)
- [x] Ištrinti klausimą (tik prisiijungus)
- [x] Filtruoti į atsakytus arba neatsakytus klausimus // EXTRA

## Atsakymai

- [x] Peržiūrėti klausimų atsakymus
- [x] Atsakyti į užduotą klausimą (tik prisijungus) // EXTRA
- [x] Ištrinti atsakymą (tik prisijungus) // EXTRA
- [x] Žymėti/atžymėti patinkačius ir nepatinkančius atsakymus (like/dislike) (tik prisijungus)

Forumo projektas sudeda iš frontend'o ir backend'o dalių:
Backend'e naudosime NodeJS Express, MongoDB arba MySQL ir kelis papildomus npm paketus, kuries palengvins darbą.
Frontend'e naudosime React. Kaip ir backend'e node express, taip pat galima naudoti papildomjus npm paketus.

### Backend'as

- [x] POST /register
- [x] POST /login

- [x] GET /questions
- [x] POST /question
- [x] DELETE /question/:id

- [x] GET /question/:id/answers
- [x] POST /question/:id/answers
- [x] DELETE /answer/:id

### Frontend'as

Frontend'as neturi nustatyto dizaino , kurį reikia atkartoti. Tačiau jum tenka sunkesnė užduotis - patiems sugalvoti ir sukurti puslapio dizainą. Svarbiausia išpildyti visus funkcinius reikalavimus ir validuoti vartotojo įvedamus duomenis.

Puslapis turi gerai atrodyt tiek ant kompiuterinės tiek ant telefono versijos.

Užduoties įkėlimo instrukcijos

1. Sukurti GitHub repozitoriją.

2.!!! Kiekvienos paskaitos metu ar darant užuoti koda pushint bent 2 kartus per paskaitą. !!!

3. Galutine kodo versija pasidalinti su dėstytoju.

Sėkmės!

- Galutinio atsiskaitymo metu bus atsižvelgiama į:

* Kodo kokybę;
* Gerasias programavimo praktikas;
* Funkcinius reikalavimus;
* Bendrą web poslapio vaizdą;
* Programuotojo žinias kurios buvo pritaikytos užduoties atlikimui;

user: first_name, second_name, email, password, id,
category: category_name, id
question: question_text, date, id, user_id, category_id
answer: id, answer_text, date, liked_by, question_id

## Papildomos uzduotys

- [x] Header offset
- [x] Header responsiveness
- [x] Clear fields on question asked
- [x] Redirect button on question asked
- [ ] Data removal dialogs
- [ ] view your questions on sidebar
- [ ] Make logout button prettier
- [ ] Optimisitc UI update (when liking)
- [ ] Userbadge loading state
- [ ] finish register/login styling
- [ ] prettier dialogs
- [ ] make UI more alike to cao.lt
- [ ] button UI shift when loading
- [ ] skeleton loading for items
- [ ] infinite scroll questions/asnwers
- [ ] markdown
- [ ] profanity checks
- [ ] microsoft login (for codeacademy emails)
