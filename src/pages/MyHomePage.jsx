import React from "react";
import MyBrief from "../components/HomeComponents/MyBrief";
import MyImageSlider from "../components/HomeComponents/MyImageSlider";
import HomeFeatureSection from "../components/HomeComponents/HomeFeatureSection";
import HomeChooseFrom from "../components/HomeComponents/HomeChooseFrom";

function MyHomePage() {
  document.title = "Foody-Home"

  return (
    <div>
      <MyImageSlider></MyImageSlider>
      <MyBrief></MyBrief>
      <HomeFeatureSection></HomeFeatureSection>
      <HomeChooseFrom></HomeChooseFrom>
    </div>
  );
}

export default MyHomePage
