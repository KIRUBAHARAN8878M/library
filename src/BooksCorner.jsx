import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function BooksCorner() {

    const [books, setBooks] = useState([]);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let books = await axios.get("https://63180e51ece2736550bf999b.mockapi.io/books");
        setBooks(books.data);
        setLoading(false);
    }

    let bookDelete = async (id) => {
        try {
            let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
            if (ask) {
                await axios.delete(`https://63180e51ece2736550bf999b.mockapi.io/books/${id}`);
            }
            loadData();
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className="container">
            <div className="d-sm-flex align-items-center mt-3 justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">BooksCorner</h1>
               
            </div>
            {
                isLoading ? (<span> Loading . . .</span>) : (
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Book Data Details</h6>
                        </div>
                        <div className="card-body">
                            <div className='container'>
                                <div className='row'>
                                    {
                                        books.map((book, index) => {
                                            return <>
                                                <div className='col-lg-4 mx-auto'>
                                                    <div className="card mb-3" style={{ width: '18rem' }}>
                                                        <img src={book.img} className="card-img-top offset-6 py-2 mt-3 mx-auto " alt="..." style={{ width: '10rem', height: '8rem' }} />
                                                        <div className="card-body">
                                                            <h5 className="card-title text-center">{book.name}</h5>

                                                        </div>
                                                        <ul className="list-group list-group-flush">
                                                            <div className=''>
                                                                <li className="list-group-item ">Book Id<span className='mx-1'>&nbsp;:&nbsp;</span>{book.id}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Authorr <span className=' '>&nbsp;:&nbsp;</span>{book.author}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Price<span className='offset-1'>&nbsp;&nbsp;:&nbsp;</span>{book.price}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Genere<span className=''>&nbsp;&nbsp;&nbsp;:&nbsp;</span>{book.quantity}</li>
                                                            </div>
                                                            <div>
                                                                <li className="list-group-item">Available<span className=''>&nbsp;:&nbsp;</span>{book.available}
                                                                </li></div>
                                                            <li className="list-group-item mx-auto">
                                                                <Link to={`/portal/library/edit/${book.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>

                                                                <button onClick={() => {
                                                                    bookDelete(book.id)
                                                                }} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>

                                        })
                                    }


                                </div>
                            </div>


                        </div>
                     </div>       
       
       )
    }

</div>
    
</>
    )
}

export default BooksCorner;