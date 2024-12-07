```javascript
const query = {
  $expr: {
    $and: [
      { $exists: ['$price'] },
      { $gt: [ { $toDouble: '$price' }, 100 ] }
    ]
  }
};

db.collection.find(query);
```