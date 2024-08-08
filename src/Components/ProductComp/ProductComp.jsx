import React, { useEffect, useState } from 'react'
import "./ProductComp.css"
import axios from "axios"
import productActionCreater from '../Redux/ActionCreater/productActionCreater'
import { useDispatch, useSelector } from 'react-redux'
import productStore from '../Redux/Store'
import cartActionCreater from '../Redux/ActionCreater/cartActionCreater'
import { Link, useNavigate } from 'react-router-dom'
import StarComp from './StarComp/StarComp'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { NavLink } from 'react-router-dom'

const ProductComp = () => {
    const [active, setActive] = useState("All")

    const navigate = useNavigate()
    const productsData = useSelector((productStore) => {
        return productStore
    })
    const [filteraCategory, setfilteraCategory] = useState(productsData.products)

    // console.log(filteraCategory)
    console.log(productsData);

    const dispatch = useDispatch(productStore)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
          
            setfilteraCategory(res.data)
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
        toast.success("Item added to cart!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    }
    // const handleGoToCart = () => {
    //     navigate('/productDetails')
    // }
    const productCategory = (category) => {
        if (category === "All") {
            setfilteraCategory(productsData.products)
            setActive(category)
        } else {
            setActive(category)

            const categoryData = productsData.products.filter((ele) => {
                return ele.category === category
            })
            setfilteraCategory(categoryData)
        }
    }
    return (
        <div className='productComp'>
            <h1>Products</h1>
            <hr />
            <div className="productsCategorySection">

                <button className={`allCategory ${active === "All" ? "buttonActive" : null}`}
                    onClick={() => { productCategory("All") }}
                >
                    <p>All</p>
                </button>

                <button className={`mensCategory ${active === "men's clothing" ? "buttonActive" : null}`}
                    onClick={() => { productCategory("men's clothing") }}>
                    <p>Men's Category</p>
                </button>
                <button className={`womensCategory ${active === "women's clothing" ? "buttonActive" : null}`}
                    onClick={() => { productCategory("women's clothing") }}>
                    <p>Women's Category</p>
                </button>
                <button className={`jewelleryCategory ${active === "jewelery" ? "buttonActive" : null}`}
                    onClick={() => { productCategory("jewelery") }}>
                    <p>Jewellery's</p>
                </button>
                <button className={`electronicCategory ${active === "electronics" ? "buttonActive" : null}`}
                    onClick={() => { productCategory("electronics") }}>
                    <p>Electronics</p>
                </button>
            </div>
            <div className="productCardContainer">
                {filteraCategory && filteraCategory.map((ele) => {
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
                                    <Link to={`/product/${ele.id}`}>
                                    
                                    <button id='cart'>More Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
            <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        </div>
    )
}

export default ProductComp