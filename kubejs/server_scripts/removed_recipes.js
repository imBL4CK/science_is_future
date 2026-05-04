ServerEvents.recipes((e) => {
  let remove_recipes = [
    "supplementaries:sack",
    "supplementaries:sack_3",
    "create:crafting/kinetics/steam_engine",
    "create:crafting/kinetics/steam_whistle",
    "create:crafting/logistics/brass_funnel",
    "create:crafting/logistics/brass_tunnel",
    "create:crafting/materials/electron_tube",
    "create:milling/granite",
    "create:crushing/diorite",
    "create:crushing/diorite_recycling",
    "create:milling/andesite",
    "create:crafting/kinetics/fluid_pipe_vertical",
    "create:crafting/kinetics/fluid_pipe"
  ];
  remove_recipes.forEach((recipeID) => {
    e.remove({ id: recipeID });
  });
});
