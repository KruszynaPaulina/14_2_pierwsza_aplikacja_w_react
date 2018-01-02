var movies = [
  {
    id: 1,
    title: 'Harry Potter i kamień filozoficzny',
    desc: 'film o czarodzieju',
    img: 'http://ecsmedia.pl/c/harry-potter-tom-1-harry-potter-i-kamien-filozoficzny-b-iext43238206.jpg'
  },
  {
    id: 2,
    title: 'Harry Potter i komnata tajemnic',
    desc: 'film o czarodzieju',
    img: 'https://cdn.bonito.pl/zdjecia/5/76f3d3918576ab358f7971127dd3f1a5.jpg'
  },
  {
    id: 3,
    title: 'Harry Potter i więzień Azkabanu',
    desc: 'film o czarodzieju',
    img: 'http://ecsmedia.pl/c/harry-potter-tom-3-harry-potter-i-wiezien-azkabanu-b-iext43238210.jpg'
  },
  {
    id: 4,
    title: 'Harry Potter i czara ognia',
    desc: 'film o czarodzieju',
    img: 'http://ecsmedia.pl/c/harry-potter-tom-4-harry-potter-i-czara-ognia-b-iext44156449.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));