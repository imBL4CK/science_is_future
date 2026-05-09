ServerEvents.recipes((e) => {

  const recipes = [
    //Iron Ingot
    {
      id: "minecraft/iron_ingot",
      heatRequirement: "heated",
      ingredients: [
        {
          "fluid": "minecraft:water",
          "type": "fluid_stack",
          "amount": 250
        },
        {
          "item": "minecraft:leather"
        },
        {
          "item": "farmersdelight:tree_bark"
        },
        {
          "item": "salt:salt"
        },
      ],
      results: [
        {
          "id": "science_is_future:tanned_leather",
        }
      ],
    },
  ];
  recipes.forEach((recipe) => {
    if (recipe.heatRequirement) {
      e.custom({
        type: "create:mixing",
        ingredients: recipe.ingredients,
        results: recipe.results,
        heat_requirement: recipe.heatRequirement,
      }).id(`science_is_future:create/mixing/${recipe.id}`);
    } else {
      e.custom({
        type: "create:mixing",
        ingredients: recipe.ingredients,
        results: recipe.results,
      }).id(`science_is_future:create/mixing/${recipe.id}`);
    }
  });
})