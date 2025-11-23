import React, { useState, useEffect } from "react";
import "../styles/Desserts.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Desserts() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [showMyRecipes, setShowMyRecipes] = useState(false);


  useEffect(() => {
    const savedRecipes = localStorage.getItem("dessertsRecipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);
  

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("username", currentUser);
    }
  }, [currentUser]);

  const handlePost = () => {
    if (currentUser.trim() === "") {
      alert("You Have To Write Your Name !");
      return;
    }
    if (newRecipe.trim() === "") {
      alert("You Have To Write The Recipe before publishing!");
      return;
    }

    const lines = newRecipe.split("\n");
    const recipe = {
      title: lines[0],
      content: lines.length > 1 ? lines.slice(1) : [],
      author: currentUser,
      date: new Date().toLocaleString()
    };

    const updatedRecipes = [...recipes, recipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("dessertsRecipes", JSON.stringify(updatedRecipes));
    setNewRecipe("");

    alert(" Thank you " + currentUser + " To Share Your Recipe");
  };

  const handleDelete = (index) => {
    const recipe = recipes[index];
    if (recipe.author === currentUser) {
      const updatedRecipes = recipes.filter((_, i) => i !== index);
      setRecipes(updatedRecipes);
      localStorage.setItem("dessertsRecipes", JSON.stringify(updatedRecipes));
    } else {
      alert("you can't delete others ones posts!");
    }
  };

  
  const filteredRecipes = showMyRecipes
    ? recipes.filter((recipe) => recipe.author === currentUser)
    : recipes;

  return (
    <div className="desserts-page">
      <NavBar />
      <h1 className="desserts-title">Desserts Recipes 🍰</h1>

      
      <div className="user-form">
        <input
          type="text"
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          placeholder="Write your name!"
        />
      </div>

    
      <div className="desserts-post-form">
        <textarea
          value={newRecipe}
          onChange={(e) => setNewRecipe(e.target.value)}
          placeholder="Write the Title of the Recipe first then apply it's content down"
        />
        <button onClick={handlePost}>Post Recipe</button>
      </div>

    
      <div className="search-form">
        <button onClick={() => setShowMyRecipes(!showMyRecipes)}>
          {showMyRecipes ? "Show All Recipes" : "Show My Recipes"}
        </button>
      </div>

    
      <div className="desserts-recipes-feed">
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="desserts-recipe-card">
            <h2 className="desserts-recipe-title">{recipe.title}</h2>
            {recipe.content.length > 0 && (
              <div className="desserts-recipe-content">
                {recipe.content.map((line, i) => (
                  <p key={i} className="desserts-recipe-line"> 🍰{line}</p>
                ))}
              </div>
            )}
            <p className="date">📅 {recipe.date}</p>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
}

export default Desserts;
