import React from 'react';

function Form({currentReview, closeForm}) {
  return (
    <div>
      {console.log("FORMMMMcurrent review", currentReview)}
      <h3 onClick={closeForm}>X</h3>
      <img style={{width: "200px"}}src={currentReview[0].reviews[0].image} />
      <h2></h2>
      <h3>My Review for {currentReview[0].reviews[0].productName}</h3>
      <p>Required fields are marked with *</p>
      <h3>Product Rating*</h3>
      <button type="submit">☆</button>
      <button type="submit">☆</button>
      <button type="submit">☆</button>
      <button type="submit">☆</button>
      <button type="submit">☆</button>
      <h3>Review Title*</h3>
      <input type="text" placeholder="Example: Great on the trails!" onChange={(e)=>{console.log(e.target.value)}}></input>
      <h3>Review*</h3>
      <input type="text" placeholder="Please keep your review focused on the product and your experience with it. Your review is so important for improving REI and the experience for other REI shoppers!" onChange={(e)=>{console.log(e.target.value)}}></input>
      <button type="submit">Add photo</button>
      <button type="submit"> Add video</button>
      <h3>Would you recommend this product to a friend</h3>
      <button type="submit">Yes</button>
      <button type="submit">No</button>
      <h3>Age</h3>
      <select>
        <option>Select</option>
        <option>Under 18</option>
        <option>18-24 </option>
        <option>25-34</option>
        <option>35-44</option>
        <option>45-54</option>
        <option>55-64</option>
        <option>65-74</option>
        <option>75+</option>
      </select>
      <h3>Experience</h3>
      <h3>Nickname*</h3>
      <input type="text" placeholder="Example: jackie27" onChange={(e)=>{console.log(e.target.value)}}></input>
      <h3>Location*</h3>
      <input type="text" placeholder="Example: Seattle, WA" onChange={(e)=>{console.log(e.target.value)}}></input>
      <h3>Email*</h3>
      <input type="email" placeholder="Example: Seattle@washington.com"  onChange={(e)=>{console.log(e.target.value)}} required></input>
      <p>I agree to the terms & conditions</p>
      <p>You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</p>
      <button type="submit"> Post review</button>
    </div>
  );
}

export default Form;
