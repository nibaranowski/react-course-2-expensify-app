/* const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Brussels',
        temp: 88
    }
};


const { name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${city} in ${temperature}.`);
}
 */

/*  const book = {
     title: 'Ego is the enemy',
     author: 'Ryan Holiday',
     publisher: {
         name: 'Penguin'
     }
 };

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(`${publisherName}`); */

const address = [/* '18 Marszalkowska 29', 'Mazowiecka', 'Warsaw', '00590' */];
const [, , state = 'New York'] = address;

console.log(`You are in ${state}`)

const item = ['coffee (hot)', '$2.00', '$3.00', '4.00']
const [drink, , priceMedium] = item;
console.log(`${drink} costs ${priceMedium}`)