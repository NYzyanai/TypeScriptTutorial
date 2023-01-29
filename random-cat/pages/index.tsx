import { useState } from "react";

const catImages:string[]=[
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg",
];

const randomcatImage = ()=>{
  const index=Math.floor(Math.random()* catImages.length);
  return catImages[index];
};

const IndexPage = () => {
  const [catImageUrl, setCatImageUrl]= useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  )
 
  const handleClick = () =>{
    setCatImageUrl(randomcatImage());
  }

  return (
    <div>
      <button onClick={handleClick}>きょうのにゃんこ</button>
      <div style={{ marginTop:8 }}>
        <img src={catImageUrl}/>
      </div>
    </div>
  );
};

export default IndexPage;