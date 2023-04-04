import bcrypt from 'bcryptjs';
const data={
  users: [
    {
      name: 'thuan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'duy',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  
    products: [
        {
          //  _id:'1',
            name: 'CASIO INVERD',
            slug: 'sd',
            category: 'Shirts',
            image:'/images/watch-1.jpg',
            price:500000,
            countInStock: 10,
            brand:'CASIO',
            rating:4.5,
            numReviews:10,
            description:'NGON ',
        },
        {
           // _id:'2',
            name: 'CASIO NON ',
            slug: 'zxc',
            category: 'Da',
            image:'/images/watch-2.jpg',
            price:120,
            countInStock: 0,
            brand:'CASIO',
            rating:3,
            numReviews:20,
            description:'Hight quality',
        },
        {
          //  _id:'3',
            name: 'CASadadO INVERD',
            slug: 'scx',
            category: 'Kim Loai',
            image:'/images/watch-3.jpg',
            price:120,
            countInStock: 10,
            brand:'CASIO',
            rating:4.5,
            numReviews:10,
            description:'Hight quality',
        },
        {
           // _id:'4',
            name: 'CASasdsacvcvxIO INVERD',
            slug: 'asdxxccas',
            category: 'Shirts',
            image:'/images/watch-4.jpg',
            price:120,
            countInStock: 10,
            brand:'CASIO',
            rating:4.5,
            numReviews:10,
            description:'Hight quality',
        },
     
    ],
};
export default data; 