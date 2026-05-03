ServerEvents.recipes((e) => {
  let remove_recipes = [
    "supplementaries:sack",
    "supplementaries:sack_3",
    "create:crafting/kinetics/steam_engine",
    "create:crafting/kinetics/steam_whistle"
  ];
  remove_recipes.forEach((recipeID) => {
    e.remove({ id: recipeID });
  });
});
