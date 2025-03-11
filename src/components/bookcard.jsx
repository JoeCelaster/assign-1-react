// write the book component code here
import React from 'react';
import data from '../App'

const Bookcard = () => {
    return (
        <div>
            {data.map((item,i)=>{
                return(
                    <>
                    <h3 key={i}>{item.id}</h3>
                    <h3 key={i}>{item.image}</h3>
                    <h3 key={i}>{item.name}</h3>
                    <h3 key={i}>{item.genre}</h3>
                    </>
                    <h3 key={i}>{item.author}</h3>

                )
            })}
        </div>
    );
}

export default Bookcard;

// id: 1,
//       image:
//         'https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain',
//       name: 'The Great Adventure',
//       genre: 'Fiction',
//       author: 'Jane Doe',