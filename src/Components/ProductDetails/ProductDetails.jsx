import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import StarComp from '../ProductComp/StarComp/StarComp'
import cartActionCreater from '../Redux/ActionCreater/cartActionCreater'
import './ProductDetails.css'

const ProductDetails = () => {
  const [productData, setProductData] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const productDetails = useSelector((productStore) => {
    return productStore
  })
  console.log(productDetails.isLogin);

  const handleCart = (ele) => {
    dispatch(
      cartActionCreater(ele)
    )
  }

  useEffect(() => {
    let details = productDetails.products.filter((ele) => ele.id == id)
    setProductData(details)
  }, [])
  return (
    <>


      <div className='ProductDetails'>
        {productData && productData.map((ele) => {
          return <>
            <div className="imgLeftContainer">

              <img src={ele && ele.image} alt="" height="100px" width="100px" />
            </div>

            <div className="ProductDetailsContainer">

              <div className="categorypara">

                <p>{ele && ele.category}</p>
              </div>
              <h2>{ele && ele.title}</h2>
              <StarComp stars={{ rate: ele.rating.rate, count: ele.rating.count }} />
              <div className="description">

                <span>- Product description</span>
              </div>
              <div className="descriptionPara">

                <p>{ele && ele.description}</p>
              </div>
              <h4>${ele && ele.price}</h4>
              <div className="buttons">

                <button
                  onClick={() => { handleCart(ele) }}

                >Add to Cart</button>
                <button
                  onClick={() => { navigate(`${productDetails.isLogin ? '/cart' : "/login"}`) }}
                  id='goCart'
                >Go to Cart</button>
              </div>
            </div>
          </>
        })}
      </div>
    </>
  )
}

export default ProductDetails