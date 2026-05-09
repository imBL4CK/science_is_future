ServerEvents.recipes((e) => {

  const recipes = [
    //Iron Ingot
    {
      id: "minecraft/iron_ingot",
      heatRequirement: "heated",
      ingredients: [
        {
          "tag": "c:plates/iron",
        },
        {
          "tag": "c:plates/iron",
        },
      ],
      results: [
        {
          "id": "science_is_future:iron_reinforced_plating"
        },
      ],
    },
  ];
  recipes.forEach((recipe) => {
    if (recipe.heatRequirement) {
      e.custom({
        type: "create:compacting",
        ingredients: recipe.ingredients,
        results: recipe.results,
        heat_requirement: recipe.heatRequirement,
      }).id(`science_is_future:create/compacting/${recipe.id}`);
    } else {
      e.custom({
        type: "create:compacting",
        ingredients: recipe.ingredients,
        results: recipe.results,
      }).id(`science_is_future:create/compacting/${recipe.id}`);
    }  
  });
})