```javascript
const query = { $expr: { $gt: [ { $toDouble: '$price' }, 100 ] } };

//This query will throw an error if the 'price' field is missing in any document or if it is not a valid number.
db.collection.find(query);
```