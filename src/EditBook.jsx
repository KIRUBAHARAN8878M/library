import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      price: "",
      quantity: "",
      available: ""
      
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter name "
      }
      if (values.author === "") {
        errors.author = "Please enter author name"
      }
      if (values.price === "") {
        errors.price = "Please enter price"
      }
      if (values.quantity === "") {
        errors.quantity = "Please enter department"
      }
      if (values.available === "") {
        errors.available = "Book is available enter true otherwise enter false"
      }
      return errors;
    },
    onSubmit: async (values) => {
     await axios.put(`https://63180e51ece2736550bf999b.mockapi.io/books/${params.id}`,values)
     
     navigate('/portal/library')
    }
  });

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let book = await axios.get(`https://63180e51ece2736550bf999b.mockapi.io/books/${params.id}`)
      formik.setValues(
        {
          name: book.data.name,
          author:book.data.author,
          price: book.data.price,
          quantity: book.data.quantity,
          available: book.data.available
          
        }
      )


    } catch (error) {
      console.log(error)
    }
  }


  return (
   
      <>
      <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-center mt-3 mb-4">
          <h1 className="h3 mb-0 text-dark-800">Edit Book Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-10 mx-auto'>
              <label>Book Name</label>
              <input
                className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className='col-lg-10 mx-auto'>
              <label>Author</label>
              <input
                className={`form-control ${formik.errors.author ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.author}
                onChange={formik.handleChange}
                name="author"
              />
              <span style={{ color: "red" }}>{formik.errors.author}</span>
            </div>
            <div className='col-lg-10 mx-auto'>
              <label>Price</label>
              <input
                className={`form-control ${formik.errors.price ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.price}
                onChange={formik.handleChange}
                name="price"
              />
               <span style={{ color: "red" }}>{formik.errors.price}</span>
            </div>
            <div className='col-lg-10 mx-auto'>
              <label>Department</label>
              <input
                 className={`form-control ${formik.errors.quantity ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.quantity}
                onChange={formik.handleChange}
                name="quantity"
              />
               <span style={{ color: "red" }}>{formik.errors.quantity}</span>
            </div>
            <div className='col-lg-10 mx-auto'>
              <label>Available</label>
              <input
                 className={`form-control ${formik.errors.available ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.available}
                onChange={formik.handleChange}
                name="available"
              />
               <span style={{ color: "red" }}>{formik.errors.available}</span>
            </div>
        
            <div className='col-lg-3 mt-3 mx-auto'>

              <input
                className='btn-primary'
                type={'submit'}
                value='Submit'
                disabled={!formik.isValid}
              />

            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default EditBook;