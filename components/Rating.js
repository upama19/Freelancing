// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";

// function Ratings() {
//     const[rating ,setRating] = useState(null);
//     const[hover ,setHover] = useState(null);

//     return (
//         <>
//             {[...Array(5)].map((star,i) => {
//                 const ratingvalue=i+1;
//                 return (
//                     <label>
//                         <input type="radio"  class="buttonhidden" name="rating" value={ratingvalue} onClick={()=>setRating(ratingvalue)} />
//                         <FaStar className="star" color={ratingvalue <=(rating || hover)  ? "#fe8529":"#fff"} size={100} 
//                         onMouseEnter={()=> setHover(ratingvalue)} onMouseLeave={()=>setHover(null)}/>
//                     </label>
//                 );
//             })}
//             <p>The rating is {rating}</p>
//         </>
        
//     );
// }

// export default Ratings;


import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component"




const Rating= ({onRatingClick,rating}) =>{
//   const ratingChanged = (rating) => {
// //    alert("You gave {rating} ratings")
//    console.log(rating);
//   };
  return (
    <>
        <div className="Ratings">
         <ReactStars
         activeColor="#fe8529"
         size={30}
         value={rating}
         onChange={onRatingClick}
         />
        </div>
        
    </>
    
    
  );
}

export default Rating;


