//const name = 'Josh Perez';
//const element = <h1>Hello, {name}</h1>;
//ReactDOM.render(
//  element,
//  document.getElementById('root')
//);
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element = React.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user),
  '!'
);

ReactDOM.render(element, document.getElementById('root'));