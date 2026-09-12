import { Suspense } from "react";
import Bannerr from "./component/bannerr";
import Nav from "./component/nav";
import Tecnologies from "./component/tecnologies/tecnologies";
import "./main.css";
import type { Technology } from "./type/tecnologytype";
import Footer from "./component/footer";

const technologiesFetch=async():Promise<Technology[]>=>{
  const res= await fetch('/data.json')
  const data= await res.json()
  return data
}

function App() {
  const technologiesPromise=technologiesFetch()
console.log(technologiesPromise);

  return (
    <>
  <Nav />
  <Bannerr/>
  <Suspense fallback={<h2>LOADING ...</h2>}>
    <Tecnologies technologiesPromise={technologiesPromise}/>
  </Suspense>
  <Footer></Footer>
  
    </>
  )
}

export default App
