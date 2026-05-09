ServerEvents.recipes((e) => {

  const recipes = [
    //Tanned Leather
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
    //Bronze Ingot
    {
      id: "alloyed/bronze_ingot",
      heatRequirement: "heated",
      ingredients: [
        {
          "tag": "c:ingots/copper",
        },
        {
          "tag": "c:ingots/copper",
        },
        {
          "tag": "c:ingots/copper",
        },
        {
          "tag": "c:ingots/zinc",
        },
        {
          "item": "create:cinder_flour",
        },
        {
          "item": "create:cinder_flour",
        },
        {
          "item": "create:cinder_flour",
        },
        {
          "item": "create:cinder_flour",
        },
      ],
      results: [
        {
          "id": "alloyed:bronze_ingot",
          "count": 4
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