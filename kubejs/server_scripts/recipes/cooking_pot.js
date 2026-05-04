ServerEvents.recipes((e) => {

  const recipes = [
    //Rubber by resin
    {
      id: "science_is_future/rubber_by_resin",
      experience: 1.0,
      ingredients: [
        {
          "item": "nomansland:resin"
        },
        {
          "item": "nomansland:resin"
        },
      ],
      result: {
        "id": "science_is_future:rubber",
        "count": 1,
      }
    },
    //Rubber by honeycomb
    {
      id: "science_is_future/rubber_by_honeycomb",
      experience: 1.0,
      ingredients: [
        {
          "item": "minecraft:honeycomb"
        },
        {
          "item": "minecraft:honeycomb"
        },
      ],
      result: {
        "id": "science_is_future:rubber",
        "count": 1,
      }
    }
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "farmersdelight:cooking",
      experience: recipe.experience,
      ingredients: recipe.ingredients,
      recipe_book_tab: recipe.recipe_book_tab,
      result: recipe.result
    }).id(`science_is_future:farmersdelight/cooking_pot/${recipe.id}`);
  });
})
      ingredients: recipe.ingredients,
      results: recipe.results,
    }).id(`science_is_future:farmersdelight/cooking_pot/${recipe.id}`);
  });
})