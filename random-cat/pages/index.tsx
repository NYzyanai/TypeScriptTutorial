import { useEffect,useState } from "react";

interface CatCategory{
  id:number;
  name:string;
}

interface SearchCatImage{
  breeds:string[];
  categories:CatCategory[];
  id:string;
  url:string;
  width:number;
  height:number;
}

type SearchCatImageResponose=SearchCatImage[];

const fetchCatImage = async() =>{
  const res =await fetch("https://api.thecatapi.com/v1/images/search");
  const result =await res.json();
  return result[0];
};

fetchCatImage().then((image)=>{
  console.log(`猫の画像: ${image.url}`);
})



const IndexPage = () => {
  const [catImageUrl, setCatImageUrl]= useState("https://cdn2.thecatapi.com/images/bpc.jpg");


  const handleClick = async() =>{
    const image=await fetchCatImage();
    setCatImageUrl(image.url);
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