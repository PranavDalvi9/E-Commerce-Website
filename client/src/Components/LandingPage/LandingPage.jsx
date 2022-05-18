import React from 'react'
import "./LandingPage.css"

import SimpleImageSlider from "react-simple-image-slider";

export default function LandingPage() {

  const images = [
    { url: "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg.webp" },
    { url: "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg.webp" },
    { url: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Fashion-Wallpaper-HD-Download.jpg" },
    { url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
  ];
 
  return (
    <div className='LandingPage'>
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={504}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
        />
      </div>

    </div>
  )
}
