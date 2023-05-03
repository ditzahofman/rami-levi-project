import AllProducts from "../../ProductsArea/AllProducts/AllProducts";
import CategoriesSelect from "../../ProductsArea/CategoriesSelect/CategoriesSelect";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h1>wellcome!!</h1>
            {/* <h2>select the category:</h2> */}
			{/* <CategoriesSelect/> */}
            <AllProducts/>
        </div>
    );
}

export default Home;
