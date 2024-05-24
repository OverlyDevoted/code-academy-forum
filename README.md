Baigiamasis projektas

Šio projekto metu reikės sukurti internetinį forumą naudojant React, NodeJS Express ir MongoDB arba MySQL. Forumo tikslas - leisti užduoti klausimus, į juos atsakinėti bei žymėti patinkančius arba nepatinkančius atsakymus. Galite įsivaizduoti kažką panašaus į https://stackoverflow.com/questions, tik jums rekės padaryt supaprastintą versiją.

Funkcionalumas:

- [x] Registruotis
- [x] Prisijungti
- [ ] Užduoti naują klausimą (tik prisijungus)
- [ ] Ištrinti klausimą (tik prisiijungus)
- [ ] Atsakyti į užduotą klausimą (tik prisijungus) // EXTRA
- [ ] Ištrinti atsakymą (tik prisijungus) // EXTRA
- [ ] Žymėti/atžymėti patinkačius ir nepatinkančius atsakymus (like/dislike) (tik prisijungus)
- [ ] Peržiūrėti klausimų sąrašą.
- [ ] Filtruoti į atsakytus arba neatsakytus klausimus // EXTRA
- [ ] Peržiūrėti klausimų atsakymus

Forumo projektas sudeda iš frontend'o ir backend'o dalių:
Backend'e naudosime NodeJS Express, MongoDB arba MySQL ir kelis papildomus npm paketus, kuries palengvins darbą.
Frontend'e naudosime React. Kaip ir backend'e node express, taip pat galima naudoti papildomjus npm paketus.

### Backend'as

- [x] POST /register
- [x] POST /login

- [x] GET /questions
- [x] POST /question
- [ ] DELETE /question/:id

- [x] GET /question/:id/answers
- [x] POST /question/:id/answers
- [ ] DELETE /answer/:id

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
