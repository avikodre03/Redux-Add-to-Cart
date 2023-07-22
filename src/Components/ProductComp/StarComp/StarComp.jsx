import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import './StarComp.css'
const StarComp = (props) => {

    const ratingStar = Array.from({ length: 5 }, (ele, idx) => {
        let number = idx + 0.5;
        return <span>
            {props.stars.rate >= idx + 1
                ? (<FaStar className="icon" />)
                : props.stars.rate >= number
                    ? (<FaStarHalfAlt className="icon" />)
                    : (<AiOutlineStar className="icon" />)}
        </span>
    })
    return (

        <div className='StarComp'>


            <p>{ratingStar} ( {props.stars.count} customer reviews )</p>
            {/* {console.log(props.stars.rate)}
            {console.log(props.stars.count)} */}
        </div>
    )
}

export default StarComp