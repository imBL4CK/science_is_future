ServerEvents.recipes((e) => {

  const recipes = [
    //Sack
    {
      result: "supplementaries:sack",
      id: "sack_by_canvas",
      pattern: [
        "CRC",
        "C C",
        "CCC"
      ],
      key: {
        C: "farmersdelight:canvas",
        R: "#c:ropes",
      },
    },
    {
      result: "supplementaries:sack",
      id: "sack_by_flax",
      pattern: [
        "FRF",
        "F F",
        "FFF"
      ],
      key: {
        F: "supplementaries:flax",
        R: "#c:ropes",
      },
    },
  ];
  recipes.forEach((recipe) => {
    e.shaped(recipe.result, recipe.pattern, recipe.key).id(`cogs_and_clocks:minecraft/crafting_table/${recipe.id}`);
  });
});
