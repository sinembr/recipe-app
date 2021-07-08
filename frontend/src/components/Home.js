import React, { useState, useEffect } from "react";
// import { Switch,Route} from "react-router-dom";
// import UserService from "../services/user.service";
import RecipeService from "../services/recipe.service";
import Recipe from "../components/Recipe"
// import logo from "../images/logo.png"


const Home = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    RecipeService.getRecipe().then(
      (response) => {
        setContent(response.data);
        console.log(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
	<div>
    <div className="result">
      <ul className="results__list">
        {content.map((data)=>{
              return <li>
                    <a className="results__link results__link--active" href={`recipe/${data.id}`}>
                        <figure className="results__fig">
                            <img src={data.image_url} alt={data.title}/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">{data.title}</h4>
                            <p className="results__author">{data.publisher}</p>
                        </div>
                    </a>
                </li>
        })}
      </ul>
    </div>
		{/* {<Switch>
			<Route exact path='/recipe/:id' component={Recipe} />
		</Switch>} */}
		{Recipe}
		
	</div>
  );
};

export default Home;