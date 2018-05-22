import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };












/*

//* /child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})


//child changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

//child added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

*/

/* database.ref('expenses')
  .on('value', snapshot => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
      });
      console.log(expenses)
  }); */





/* 
const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
}, (e) => {
    console.log('error with data fetching', e)
}); */

/* const firebaseNotes = {
    notes: {
        sdsdds: {
            title: 'first note',
            body: 'this is my note'
        },
        efwfwwef: {
            title: 'second note',
            body: 'this is my second note'
        }
    }
} */

/*
database.ref('expenses').push({
        description: 'expense 1',
        note: 'notes 1',
        amount: 34,
        createdAt: 4556
});
*/

/* const notes = [{
    id: '12',
    title: 'first note',
    body: 'this is my not'
}, {
    id: '12',
    title: 'first note',
    body: 'this is my not'
}];

database.ref('notes').set(notes) */

/* setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500); */

/* database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('error fetching data', e)
    }) */

/* database.ref().set({
    name: 'Nicolas Baranowski',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'software dev',
        company: 'google'
    },
    location: {
        city: 'Brussels',
        country: 'Belgium'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed. ', e);
}) */

//database.ref().set('This is my data.');
/* 
database.ref('age').set(27);
database.ref('location/city').set('New York'); */

// attributes
// height
// weight

/* database.ref('attributes').set({
        height: '180',
        weight: '89'
}).then(() => {
    console.log('Second set call worked')
}).catch((e) => {
    console.log('This failed. ', e);
}); */

/* database.ref('isSingle').set(null).then(() => {
    console.log('Deleted')
}).catch((e) => {
    console.log('This failed. ', e);
}); */

/* database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle',
}); */


//console.log('I made a request to change data') */