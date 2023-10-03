import "./App.css";
import Card from "./components/Card";
import Data from "./components/Data";

function loopCards(val){
  return (
    <Card
      key={val.id}
      imgSrc={val.imgSrc}
      title={val.title}
      netLink={val.netLink}
      platForm={val.platForm}
    />
  )
}

const choise = "amazon";
function ChoisePlatform(){
  if(choise === "netflix"){
    return(
      <Card
      key={Data[4].id}
      imgSrc={Data[4].imgSrc}
      title={Data[4].title}
      netLink={Data[4].netLink}
      platForm={Data[4].platForm}
    />
    );
  }
  else{
    return(
      <Card
        key={Data[2].id}
        imgSrc={Data[2].imgSrc}
        title={Data[2].title}
        netLink={Data[2].netLink}
        platForm={Data[2].platForm}
      />
    );
  }
}

function App() {
  return (
    <>
    <div className="allCards">

      {Data.map(loopCards)}
      <ChoisePlatform/>
      
    </div>
    </>
  );
}

export default App;
