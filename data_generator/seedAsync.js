const mongoose = require('mongoose');
const faker = require('faker');
const { ProductReview } = require('../database/product_reviews.js');
const connection = require('../database/connection.js');
const moment = require('moment')

const deleteAll = async () => { await ProductReview.deleteMany() };

const products = [
  { name: `HOKA ONE ONE Clifton 7 Road-Running Shoes - Women's`, id: 1, url: 'https://www.rei.com/media/8f078d8a-aa49-4f1e-9c8f-120063bb2042?size=646x485' },
  { name: 'Manduka Cork Yoga Block', id: 2, url: 'https://www.rei.com/media/464a596c-9755-4535-aa1b-4f2bae31d780?size=646x485' },
  { name: 'Smith Trace MIPS Helmet', id: 3, url: 'https://www.rei.com/media/992d6626-cad0-4854-8c5b-98081f51eb05?size=646x485' },
  { name: 'Co-op Cycles ADV 1.1 Bike', id: 4, url: 'https://www.rei.com/media/3336b5c6-ccb5-4177-ab9b-6d04a0ea40fa?size=646x485' },
  { name: `REI Co-op Trailbreak 60 Pack - Men's`, id: 5, url: 'https://www.rei.com/media/c74fc48b-628d-45ea-8249-f073a6f4d12e?size=646x485' },
];

const nouns = ['show', 'running shoe', 'socks', 'sole', 'laces', 'bike', 'cork block', 'yoga', 'helmet', 'road', 'outside', 'recreation', 'open-air', 'outdoorsy', 'wild', 'foundation', 'biodiversity', 'wilderness', 'areas', 'outdoors', 'out-of-door', 'national', 'park', 'playground', 'backyard', 'courtyard', 'open', 'patio', 'recreational', 'landscape', 'tent', 'air', 'open', 'air','earth', 'human', 'species'];
const verbs = ['ran', 'walked', 'walk', 'stand', 'yoga', 'riding', 'jump', 'fall'];
const articles = ['a', 'the'];
const adjectives = ['great', 'fast', 'smooth', 'fun', 'light', 'comfortable', 'attractive', 'proud', 'happy', 'gentle', 'tiny', 'great', 'big', 'calm'];
const pronouns = ['I', 'we', 'you', 'they', 'she', 'he', 'my', 'me', 'his', 'hers', 'it'];

function randomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const seedProduct = () => {
  let reviews = [];

  for (let i = 0; i < 100; i += 1) {
    const product = randomWord(products);
    const newDate = new Date(faker.date.past(5));
    // var d = newDate.getDate();
    // var m = newDate.getMonth();
    // console.log(m, d)
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate);
    const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
    const dateFormat = `${date}-${month}-${year}`;
    let fakeReviews = {
      productId: product.id,
      reviewId: faker.random.number({ min: 1000000, max: 9999999 }),
      helpful_count: 0,
      not_helpful_count: 0,
      reviews: [
        {
          productName: product.name,
          image: product.url,
          name: faker.name.findName(),
          user: faker.internet.userName(),
          email: faker.internet.email(),
          city: faker.address.city(),
          state: faker.address.state(),
          review_total: faker.random.number({ min: 1, max: 12 }),
          stars: faker.random.number({ min: 1, max: 5 }),
          date: moment(newDate).fromNow(),
          realDate: newDate,
          title: faker.random.words(5),
          description: `${randomWord(adjectives)} ${randomWord(adjectives)}  ${randomWord(nouns)} ${randomWord(nouns)}  ${randomWord(pronouns)} ${randomWord(articles)} ${randomWord(adjectives)} ${randomWord(verbs)}`,
          age: Math.floor(Math.random() * 75) + 17,
          recommended: faker.random.boolean(),
        },
      ],
    };
    reviews.push(fakeReviews);
  }

  return reviews;
};

var reviews = seedProduct()
// console.log("reviews: ", reviews);

const insertReviews = async () => {
  let seededProduct = seedProduct();
  await ProductReview.insertMany(seededProduct);
};

const seed = async () => {
  await deleteAll();
  await insertReviews();
  process.exit(0);
};

seed();

// review_total: Math.floor(Math.random() * 10) + 1,
//         stars: Math.floor(Math.random() * 5) + 1,.
// deleteAll().then(()=> {console.log('worked')}).catch(err=> console.log(err))
// insertReviews().then(()=> {console.log('worked')}).catch(err=> console.log(err))