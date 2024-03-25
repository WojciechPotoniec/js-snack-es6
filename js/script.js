/*SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/

const invitedName = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "George Clooney",
  "Amal Clooney",
  "Fedez",
  "Amadeus",
  "Fiorello"
];

const guestList = invitedName.map((member, i) => {
  let elMember = {
    tableName: "VipTable",
    guestName: member,
    place: i + 1,
  };
  return elMember;
});
console.log(guestList);


/* SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/

const studentsList = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84
  },
];

const newClass = studentsList.map((student) => {
    let name = student.name.toUpperCase()
    return name
});
console.log(newClass);

const gradeList = studentsList.filter((student) => student.grades > 70);
console.log(gradeList);

const gradeidList = studentsList.filter((student) => student.grades > 70 && student.id > 120);
console.log(gradeidList);

/*SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

 const cycle  =[
   {name: 'Rocky Mountain', weight: 1500},
   {name: 'Byte', weight: 2500},
   {name: 'MTB', weight: 1200},
   {name: 'Alpinestar', weight: 2400},
   {name: 'Atala', weight: 3000},
 ];

console.log(cycle);

// Trovare la bici con peso minore
let lightweightcycle = cycle[0];
for (let i = 1; i < cycle.length; i++) {
  if (cycle[i].weight < lightweightcycle.weight) {
    lightweightcycle = cycle[i];
  }
}

// Stampare in console la bici con peso minore utilizzando destructuring e template literal
let { name, weight } = lightweightcycle;
console.log(`La bici con peso minore è ${name} con un peso di ${weight} kg.`);


/*SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

/*BONUS
Stampare in pagina oltre che in console!
*/

const soccerTeam = [
  {
    name: 'Milan',
    points: 0,
    fouls: 0
  },
  {
    name: 'Roma',
    points: 0,
    fouls: 0
  }, 
  {
    name: 'Inter',
    points: 0,
    fouls: 0  
  },
  {
    name: 'Napoli',
    points: 0,
    fouls: 0
  },
  {
    name: 'Juventus',
    points: 0,
    fouls: 0
  }
]

// Generare numeri random al posto degli 0 nelle proprietà: points e fouls
for (let i = 0; i < soccerTeam.length; i++) {
  soccerTeam[i].points = getRndInteger(1, 100);
  soccerTeam[i].fouls = getRndInteger(1, 100);
}

// Usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
let newArray = soccerTeam.map(({ name, fouls }) => ({ name, fouls}));

// Stampiamo tutto in console
console.log(newArray);

// Stampiamo tutto in pagina 
let message = document.getElementById('message')

for (let i = 0; i < newArray.length; i++) {
  message.innerHTML += `
  <h2>Nome: ${newArray[i].name}, Falli Subiti: ${newArray[i].fouls}</h2>
  `;
}