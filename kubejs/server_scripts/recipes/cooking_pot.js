ServerEvents.recipes((e) => {

  const recipes = [
    //Rubber by resin
    {
      id: "science_is_future/rubber_by_resin",
      experience: 0.3,
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
      experience: 0.3,
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
    },
    //Tanned Leather by honeycomb
    {
      id: "science_is_future/tanned_leather",
      experience: 0.3,
      ingredients: [
        {
          "item": "minecraft:leather"
        },
        {
          "item": "farmersdelight:tree_bark"
        },
        {
          "item": "cookscollection:salt"
        },
        {
          "item": "minecraft:potion",
          "components": {
            "minecraft:potion_contents": {
              "potion": "minecraft:water"
            }
          }
        },
      ],
      result: {
        "id": "science_is_future:tanned_leather",
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