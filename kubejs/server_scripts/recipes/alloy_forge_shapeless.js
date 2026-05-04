ServerEvents.recipes((e) => {
  const recipes = [
    //Steam Engine
    {
      result: {
        "id": "create:electron_tube",
        "count": 2
      },
      id: "create/electron_tube",
      ingredients: [
        {"item": "create:polished_rose_quartz"},
        {"tag": "c:plates/steel"},
        {"tag": "c:nuggets/copper"},
      ],
    },
    {
      result: {
        "id": "create:fluid_pipe",
        "count": 4
      },
      id: "create/fluid_pipe_by_kelps",
      ingredients: [
        {"tag": "c:plates/copper"},
        {"tag": "c:ingots/copper"},
        {"tag": "c:plates/copper"},
      ],
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "alloyed:forging",
      ingredients: recipe.ingredients,
      result: recipe.result,
    }).id(`cogs_and_clocks:alloyed/forging_shapeless/${recipe.id}`);
  });
});
