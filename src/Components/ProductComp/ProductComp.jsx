import React, { useEffect } from 'react'
import "./ProductComp.css"
import axios from "axios"
import productActionCreater from '../Redux/ActionCreater/productActionCreater'
import { useDispatch, useSelector } from 'react-redux'
import productStore from '../Redux/Store'
import cartActionCreater from '../Redux/ActionCreater/cartActionCreater'
import { useNavigate } from 'react-router-dom'
import StarComp from './StarComp/StarComp'
const ProductComp = () => {
    const navigate = useNavigate()
    const productsData = useSelector((productStore) => {
        return productStore
    })
    console.log(productsData);
    const dispatch = useDispatch(productStore)
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.data);
            dispatch(
                productActionCreater(res.data)
            )
        }).catch((error) => {
            alert("Data Not Found from API...")
        })
    }, [])
    const handleCart = (ele) => {
        console.log("hello", productsData.cart);
        // (productsData.cart.filter(id)=>id==ele.id)
        dispatch(

            cartActionCreater(ele)
        )
    }
    const handleGoToCart = () => {
        navigate('/cart')
    }
    return (
        <div className='productComp'>
            <h1>Product Component</h1>
            <p>Lorem, ipsum dolor sit amet elit. Recusandae repellat praesentium consequatur ut et maxime nulla placeat voluptates necessitatibus similique qui, dolorum ipsum enim! Repellendus veritatis a et modi, illum non itaque earum dolor fugiat autem, neque fugit odio doloremque, laborum explicabo repudiandae dicta accusamus facilis velit quo eos quibusdam maxime nostrum! Ab doloremque dolorem necessitatibus, expedita ut non dolore architecto fugiat, odit corrupti nobis quidem error repudiandae eius, ex vel corporis recusandae laudantium ratione tempore vero porro consectetur beatae animi? Eveniet officiis quis nihil numquam provident optio. Consequatur distinctio, rem quibusdam beatae odio explicabo! Tempora enim voluptas labore quia!</p>
            <div className="productCardContainer">
                {productsData.products && productsData.products.map((ele) => {
                    return <>
                        <div className="productCard">
                            <div className="imgContainer">

                                <img src={ele && ele.image} alt="" />
                            </div>
                            <div className="detailsContainer">
                                <p>{ele && ele.category}</p>
                                <h3>{ele && ele.title}</h3>
                                <StarComp stars={{ rate: ele.rating.rate, count: ele.rating.count }} />
                                <h4>Price : $ {ele && ele.price}</h4>
                                <div className="CardButtons">
                                    <button onClick={() => {
                                        handleCart(ele)
                                    }}>Add to Cart</button>
                                    <button id='cart' onClick={handleGoToCart}>Go to Cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default ProductComp