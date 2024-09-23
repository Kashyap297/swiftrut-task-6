// src/pages/RecipeDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api"; // Axios instance for API calls

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await api.get(`/recipes/${id}`); // Fetch recipe by ID
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!recipe) {
    return <div className="text-center">Recipe not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p>
        <strong>Cuisine Type:</strong> {recipe.cuisineType}
      </p>
      <p>
        <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
      </p>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <ul className="list-disc ml-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>
        <strong>Instructions:</strong>
      </p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
