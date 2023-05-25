const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
  console.log("**********Parcourons l'objet :")
  for (let elem of entrepreneurs) {
    if (elem.year >= 1970 && elem.year <= 1980) {
      console.log(elem);
    }
  };
  
  const names = entrepreneurs.map((entrepreneur) => {
    return {
      first: entrepreneur.first,
      last: entrepreneur.last
    };
  });
  console.log(names);
  
  const age = entrepreneurs.map((elem) => {
    return {
    first: elem.first,
    last: elem.last,
    year: 2023 - elem.year
    };
  });
  
  console.log(age);
  
  const sortedEntrepreneurs = entrepreneurs.sort((a, b) => {
    const lastA = a.last;
    const lastB = b.last;
    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
  });
  
  console.log(sortedEntrepreneurs);