ServerEvents.recipes((e) => {
  const recipes = [
    //Steam Engine
    {
      result: {
        "id": "create:steam_engine"
      },
      id: "create/steam_engine",
      pattern: [
        " S ",
        "SAS",
        " C "
      ],
      key: {
        S: {
          tag: "c:plates/bronze"
        },
        A: {
          item: "create:andesite_alloy"
        },
        C: {
          tag: "c:storage_blocks/copper"
        }
      },
    },
    //Steam Whistle
    {
      result: {
        id: "create:steam_whistle"
      },
      id: "create/steam_whistle",
      pattern: [
        " S ",
        " C ",
        "   "
      ],
      key: {
        S: {
          tag: "c:ingots/bronze"
        },
        C: {
          tag: "c:ingots/copper"
        }
      },
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "alloyed:forging_shaped",
      pattern: recipe.pattern,
      key: recipe.key,
      result: recipe.result,
    }).id(`cogs_and_clocks:alloyed/forging_shaped/${recipe.id}`);
  });
});
