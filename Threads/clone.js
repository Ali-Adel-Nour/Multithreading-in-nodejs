const v8 = require('v8');


function structuredClone(obj){

  return v8.deserialize(v8.serialize(obj));

}


const obj = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  },
  hobbies: ['reading', 'painting', 'cooking'] ,
  created : new Date()
}

const cloneObj = structuredClone(obj)

cloneObj.name = 'Jane'

console.log('Original Object:', obj)