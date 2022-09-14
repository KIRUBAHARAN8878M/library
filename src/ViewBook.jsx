import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewBook() {
    const params = useParams();
    console.log(params);
    
    const [bookData, setBookData] = useState({})
    useEffect(() => {
        loadBook()
    }, [])
    let loadBook = async () => {
        try {
            let book = await axios.get(`https://63180e51ece2736550bf999b.mockapi.io/books/${params.id}`)
            setBookData(book.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bookData.img} className="card-img-top offset-6 py-2 mt-3 mx-auto " alt="..." style={{  width: '10rem', height: '8rem' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{bookData.name}</h5>

                            </div>
                            <ul className="list-group list-group-flush">
                                <div className=''>
                                    <li className="list-group-item">Book Id<span className='mx-1'>&nbsp;:&nbsp;</span>{bookData.id}</li>
                                </div>
                                <div>
                                    <li className="list-group-item">Authorr <span className=' '>&nbsp;:&nbsp;</span>{bookData.author}</li>
                                </div>
                                <div>
                                    <li className="list-group-item">Price<span className='offset-1'>&nbsp;&nbsp;:&nbsp;</span>{bookData.price}</li>
                                </div>
                                <div>
                                    <li className="list-group-item">Quantity<span className=''>&nbsp;:&nbsp;</span>{bookData.quantity}</li>
                                </div>
                                <div>
                                    <li className="list-group-item">Available<span className=''>&nbsp;:&nbsp;</span>{bookData.available}
                                    </li></div>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewBook;