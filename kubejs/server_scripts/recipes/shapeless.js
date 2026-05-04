ServerEvents.recipes((e) => {

  const recipes = [
    /*Template
    {
      result: "minecraft:chest",
      id: "minecraft/chest",
      ingredients: "#c:chests/wooden"
    },*/
  ];
  recipes.forEach((recipe) => {
    e.shapeless(recipe.result, recipe.ingredients).id(`science_is_future:shapeless/${recipe.id}`);
  });
});
