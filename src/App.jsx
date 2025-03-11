import { useState } from 'react';
import './App.css'


function App() {
  const books = [
    {
      id: 1,
      image:
        'https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain',
      name: 'The Great Adventure',
      genre: 'Fiction',
      author: 'Jane Doe',
    },
    {
      id: 2,
      image: 'https://i.thenile.io/r1000/9781496687197.jpg?r=6085750d133cf',
      name: 'Mysteries of the Universe',
      genre: 'Science',
      author: 'John Smith',
    },
    {
      id: 3,
      image: 'https://images3.penguinrandomhouse.com/cover/9781933771106',
      name: 'History Revisited',
      genre: 'Non-Fiction',
      author: 'Emily Johnson',
    },
    {
      id: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg',
      name: 'Culinary Delights',
      genre: 'Cooking',
      author: 'Michael Brown',
    },
  ];

  return <div className='joe'>{books.map((item,i)=>{
                  return(
                      <div key={i} className='rend'>
                        <p >{item.id}</p>
                        <img src={item.image}/>
                        <p >{item.name}</p>
                        <p >{item.genre}</p>
                        <p >{item.author}</p>
                      </div>
                  )
              })}</div>;
}

export default App;
