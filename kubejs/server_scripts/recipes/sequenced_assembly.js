ServerEvents.recipes((e) => {

  const recipes = [
    /*Iron Ingot
    {
      id: "minecraft/iron_ingot",
      ingredient: {
        "item": "cogs_and_clocks:ingot_cast"
      },
      results: [
        {
          "item": { "id": "cogs_and_clocks:ingot_cast" },
          "chance": 1.0,
          "count": 1
        },
        {
          "item": { "id": "minecraft:iron_ingot" },
          "chance": 1.0,
          "count": 1
        }
      ],
      sequence: [
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": "cogs_and_clocks:ingot_cast"
            },
            {
              "fluid": "cogs_and_clocks:molten_iron",
              "type": "fluid_stack",
              "amount": 90
            }
          ],
          "results": [
            {
              "id": "cogs_and_clocks:ingot_cast"
            }
          ]
        },
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": "cogs_and_clocks:ingot_cast"
            }
          ],
          "results": [
            {
              "id": "cogs_and_clocks:ingot_cast"
            }
          ]
        }
      ],
      loops: 1,
      transitional_item: {
        "id": "cogs_and_clocks:iron_ingot_cast"
      }
    }*/
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient: recipe.ingredient,
      results: recipe.results,
      sequence: recipe.sequence,
      loops: recipe.loops,
      transitional_item: recipe.transitional_item
    }).id(`cogs_and_clocks:create/sequenced_assembly/${recipe.id}`);
  });
})