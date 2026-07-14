import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
function App() {
    return (
        <>
            <Header />
            <div className="cardContainer">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <Footer />
        </>
    );
}
export default App;