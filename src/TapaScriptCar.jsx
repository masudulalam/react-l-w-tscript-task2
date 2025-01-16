import CarList from "./CarList"
import Header from "./Header"
import SearchSection from "./SearchSection"


function TapaScriptCar() {
  return (
    <div className="border rounded-lg p-8 m-2">
        <Header />
        <SearchSection />
        <CarList />
    </div>
  )
};

export default TapaScriptCar