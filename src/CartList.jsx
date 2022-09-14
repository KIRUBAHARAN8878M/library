function CartList({cartItem,removeFromCart}) {
    return (
        <>
         <div className='col-6'>
          <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="text-start  fw-bold">{cartItem.name}</div>
                      </div>
                      <div className="mx-5 bg-warning ">{cartItem.id}</div>
                      <div className="mx-5 bg-warning ">${cartItem.price}</div>
                      <button className="badge  bg-primary rounded-pill" onClick={()=>{removeFromCart(cartItem)}}>Return</button>
                    </li>
                    </div>

        </>
    );
}
export default CartList;