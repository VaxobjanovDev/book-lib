import {BaseLayout} from "../layout";
import React from "react";
import {HomeModule} from "../modules/home";

function Home(){
  return(
    <BaseLayout>
      <HomeModule/>
    </BaseLayout>
  )
}

export default Home